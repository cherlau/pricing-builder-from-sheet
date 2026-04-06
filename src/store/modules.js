import { defineStore } from 'pinia'

export const modulesStore = defineStore({
  id: 'modules',
  state: () => ({
    objectData: {},
    resourcedList: [],
    checkedResources: [],
    totalCheckedValue: 0,
    rangeCrm: 0,
    rangeUser: 0,
    rangeCrmReserva: 0,
    rangeEspelhoEmp: 0,
    rangeUsersAtivos: 0,
    rangeApiPublica: 0,
    rangeEspelhoVen: 0,
    rangeCrmFunil: 0,
    consultancyValue: 0,
    paymentCycle: 0,
    totalValue: 0
  }),
  actions: {
    async setResponseData(modules) {
      this.objectData = modules
    },
    getNestedFilteredModules(managementType) {
      const resourcesArray = this.resourcedList;
      const modulesObject = {};
      const uniqueModules = new Set();

      for (const moduleKey in resourcesArray) {
        for (const resource in resourcesArray[moduleKey].items) {
          if (resourcesArray[moduleKey].items[resource][managementType] !== '-' && !uniqueModules.has(moduleKey)) {
            modulesObject[moduleKey] = resourcesArray[moduleKey];
            uniqueModules.add(moduleKey);
          }
        }
      }

      return modulesObject;
    },
    setDiscont(){

      const discounts = this.objectData.discounts
      let valueDiscount

      for(const cicle in discounts){

        if(this.paymentCycle == cicle){
          valueDiscount = discounts[cicle].value
        }
      }

      const discount = 1 - (valueDiscount / 100)
      this.totalValue = this.totalValue * discount
    },
    getConsultancy(){
      let total = 0

      for (const i in this.checkedResources) {

        if(this.checkedResources[i].implantacao != 0){
          total += parseFloat(this.checkedResources[i].implantacao)
        }
      }

      this.consultancyValue = total
    },
    getResources(clickedModule, managementType){

      const resourcesArray = this.resourcedList
      const allowedItems = this.objectData?.plans[managementType].items
      const filteredResources = []

      for (const i in resourcesArray[clickedModule]?.items) {

        const item = resourcesArray[clickedModule]?.items[i]

        if (item[managementType] !== '-' ) {

          if(allowedItems.includes(item.key)){
            filteredResources.push(item)
          } else {
            filteredResources.push(item)
          }
        }
      }

      return filteredResources
    },
    getChecked(managementType){
      this.checkedResources = []

      const modules = this.objectData.modules
      const allowedItems = this.objectData?.plans[managementType].items

      for(const i in modules){
        for(const j in modules[i].items){

          modules[i].items[j].checked = false

          if (modules[i].items[j][managementType] !== '-' ){

            if(allowedItems.includes(j)){

              modules[i].items[j].checked = true
              this.checkedResources.push(modules[i].items[j])
            }
          }
        }
      }

      this.resourcedList = modules
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

          if (item.checked && item.preco)
            totalValue += parseFloat(item.preco)
        }
      }

      this.totalCheckedValue = totalValue
      this.calcTotal()
    },
    calcTotal() {

      if ( this.rangeCrm > 0 && this.rangeUser > 0){
        this.totalValue = this.totalCheckedValue + this.rangeCrm + this.rangeUser
      }
      if( this.rangeCrmReserva > 0 && this.rangeEspelhoEmp > 0 && this.rangeUsersAtivos > 0 && this.rangeApiPublica > 0){
        this.totalValue = this.totalCheckedValue + this.rangeCrmReserva + this.rangeEspelhoEmp + this.rangeUsersAtivos + this.rangeApiPublica
      }
      if( this.rangeEspelhoVen > 0 && this.rangeCrmFunil > 0 && this.rangeUser > 0){
        this.totalValue = this.totalCheckedValue + this.rangeEspelhoVen + this.rangeCrmFunil + this.rangeUser
      }
    },
    getLimits(rangeType){

      if(rangeType === 'CRM')
        return this.resourcedList.gestao_de_atendimentos.items.crm.gestao_de_atendimento.split("/")

      if(rangeType === 'Usuários')
        return this.resourcedList.gestao_de_usuarios.items.usuarios.limite.split("/")

      if(rangeType === 'CRM (reservas)')
        return this.resourcedList.gestao_de_produtos.items.crm_reservas.limite.split("/")

      if(rangeType === 'Espelho de Vendas - Gestão de Unidades e Tabelas')
        return this.resourcedList.gestao_de_vendas.items.espelho_de_vendas_gestao_de_unidades_e_tabelas.limite.split("/")

      if(rangeType === 'Usuários Ativos')
        return this.resourcedList.gestao_de_usuarios.items.usuarios_ativos.limite.split("/")

      if(rangeType === 'API Pública')
        return this.resourcedList.integracoes.items.api_publica.limite.split("/")

      if(rangeType === 'Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas')
        return this.resourcedList.gestao_de_vendas.items.espelho_de_vendas_gestao_de_unidades_reservas_e_tabelas.limite.split("/")

      if(rangeType === 'CRM (funil)')
        return this.resourcedList.gestao_de_atendimentos.items.crm_funil.gestao_de_vendas.split("/")
    },
    setRange(rangeType, range){

      if(rangeType === 'CRM')
        this.rangeCrm = range * this.resourcedList.gestao_de_atendimentos.items.crm.preco_unitario

      if(rangeType === 'Usuários'){
        this.rangeUser =  range * this.resourcedList.gestao_de_usuarios.items.usuarios.preco_unitario
      }
      if(rangeType === 'CRM (reservas)')
        this.rangeCrmReserva =  range * this.resourcedList.gestao_de_produtos.items.crm_reservas.preco_unitario

      if(rangeType === 'Espelho de Vendas - Gestão de Unidades e Tabelas')
        this.rangeEspelhoEmp =  range * this.resourcedList.gestao_de_vendas.items.espelho_de_vendas_gestao_de_unidades_e_tabelas.preco_unitario

      if(rangeType === 'Usuários Ativos')
        this.rangeUsersAtivos = range * this.resourcedList.gestao_de_usuarios.items.usuarios_ativos.preco_unitario

      if(rangeType === 'API Pública')
        this.rangeApiPublica = range * this.resourcedList.integracoes.items.api_publica.preco_unitario

      if(rangeType === 'Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas'){
        this.rangeEspelhoVen = range * this.resourcedList.gestao_de_vendas.items.espelho_de_vendas_gestao_de_unidades_reservas_e_tabelas.preco_unitario
      }
      if(rangeType === 'CRM (funil)'){
        this.rangeCrmFunil = range * this.resourcedList.gestao_de_atendimentos.items.crm_funil.preco_unitario
      }

      this.calcTotal()
    },
    clearAllRanges() {
      this.rangeCrm = 0;
      this.rangeUser = 0;
      this.rangeCrmReserva = 0;
      this.rangeEspelhoEmp = 0;
      this.rangeUsersAtivos = 0;
      this.rangeApiPublica = 0;
      this.rangeEspelhoVen = 0;
      this.rangeCrmFunil = 0;
    },
}})
