import { defineStore } from 'pinia'

const RANGE_TYPE_MAP = {
  'CRM': {
    module: 'gestao_de_atendimentos',
    item: 'crm',
    limitsField: 'gestao_de_atendimento',
  },
  'Usuários': {
    module: 'gestao_de_usuarios',
    item: 'usuarios',
    limitsField: 'limite',
  },
  'CRM (reservas)': {
    module: 'gestao_de_produtos',
    item: 'crm_reservas',
    limitsField: 'limite',
  },
  'Espelho de Vendas - Gestão de Unidades e Tabelas': {
    module: 'gestao_de_vendas',
    item: 'espelho_de_vendas_gestao_de_unidades_e_tabelas',
    limitsField: 'limite',
  },
  'Usuários Ativos': {
    module: 'gestao_de_usuarios',
    item: 'usuarios_ativos',
    limitsField: 'limite',
  },
  'API Pública': {
    module: 'integracoes',
    item: 'api_publica',
    limitsField: 'limite',
  },
  'Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas': {
    module: 'gestao_de_vendas',
    item: 'espelho_de_vendas_gestao_de_unidades_reservas_e_tabelas',
    limitsField: 'limite',
  },
  'CRM (funil)': {
    module: 'gestao_de_atendimentos',
    item: 'crm_funil',
    limitsField: 'gestao_de_vendas',
  },
}

const INITIAL_STATE = () => ({
  objectData: {},
  resourcedList: [],
  checkedResources: [],
  totalCheckedValue: 0,
  ranges: {},
  consultancyValue: 0,
  paymentCycle: 0,
  totalValue: 0,
})

export const modulesStore = defineStore({
  id: 'modules',
  state: INITIAL_STATE,
  actions: {
    async setResponseData(modules) {
      this.objectData = modules
    },
    getNestedFilteredModules(managementType) {
      const resourcesArray = this.resourcedList
      const modulesObject = {}
      const uniqueModules = new Set()

      for (const moduleKey in resourcesArray) {
        for (const resource in resourcesArray[moduleKey].items) {
          if (resourcesArray[moduleKey].items[resource][managementType] !== '-' && !uniqueModules.has(moduleKey)) {
            modulesObject[moduleKey] = resourcesArray[moduleKey]
            uniqueModules.add(moduleKey)
          }
        }
      }

      return modulesObject
    },
    setDiscont() {
      const discounts = this.objectData.discounts
      const discount = discounts[this.paymentCycle]
      if (!discount) return
      const factor = 1 - (discount.value / 100)
      this.totalValue = this.totalValue * factor
    },
    getConsultancy() {
      let total = 0

      for (const i in this.checkedResources) {
        if (this.checkedResources[i].implantacao != 0) {
          total += parseFloat(this.checkedResources[i].implantacao)
        }
      }

      this.consultancyValue = total
    },
    getResources(clickedModule, managementType) {
      const resourcesArray = this.resourcedList
      const filteredResources = []

      for (const i in resourcesArray[clickedModule]?.items) {
        const item = resourcesArray[clickedModule]?.items[i]
        if (item[managementType] !== '-') {
          filteredResources.push(item)
        }
      }

      return filteredResources
    },
    getChecked(managementType) {
      this.checkedResources = []
      const modules = this.objectData.modules
      const allowedItems = this.objectData?.plans[managementType].items
      const newResourcedList = {}

      for (const i in modules) {
        newResourcedList[i] = { title: modules[i].title, items: {} }
        for (const j in modules[i].items) {
          const isChecked = modules[i].items[j][managementType] !== '-' && allowedItems.includes(j)
          const item = { ...modules[i].items[j], key: j, checked: isChecked }
          newResourcedList[i].items[j] = item
          if (isChecked) {
            this.checkedResources.push(item)
          }
        }
      }

      this.resourcedList = newResourcedList
      this.calculateTotalCheckedValue()
      this.calcTotal()
    },
    calculateChecked() {
      for (const i in this.resourcedList) {
        for (const j in this.resourcedList[i].items) {
          const item = this.resourcedList[i].items[j]

          if (item.checked && !this.checkedResources.includes(item)) {
            this.checkedResources.push(item)
          } else if (!item.checked && this.checkedResources.includes(item)) {
            const index = this.checkedResources.indexOf(item)
            if (index !== -1) {
              this.checkedResources.splice(index, 1)
            }
          }
        }
      }
      this.calcTotal()
    },
    calculateTotalCheckedValue() {
      let totalValue = 0

      for (const i in this.resourcedList) {
        for (const j in this.resourcedList[i].items) {
          const item = this.resourcedList[i].items[j]
          if (item.checked && item.preco) {
            totalValue += parseFloat(item.preco)
          }
        }
      }

      this.totalCheckedValue = totalValue
      this.calcTotal()
    },
    calcTotal() {
      const rangesTotal = Object.values(this.ranges).reduce((sum, val) => sum + val, 0)
      this.totalValue = this.totalCheckedValue + rangesTotal
    },
    getLimits(rangeType) {
      const mapping = RANGE_TYPE_MAP[rangeType]
      if (!mapping) return []
      const item = this.resourcedList[mapping.module]?.items[mapping.item]
      if (!item) return []
      return item[mapping.limitsField].split('/')
    },
    setRange(rangeType, range) {
      const mapping = RANGE_TYPE_MAP[rangeType]
      if (!mapping) return
      const item = this.resourcedList[mapping.module]?.items[mapping.item]
      if (!item) return
      this.ranges[rangeType] = range * parseFloat(item.preco_unitario)
      this.calcTotal()
    },
    clearAllRanges() {
      this.ranges = {}
      this.calcTotal()
    },
    reset() {
      Object.assign(this, INITIAL_STATE())
    },
  },
})
