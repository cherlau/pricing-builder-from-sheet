<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <div class="sidebar-head">
        <span>{{ formattedManagementName }}</span>
      </div>
      <div class="sidebar-body">
        <ul>
          <li v-for="(item1, key1) in checkedList" :key="key1">
            {{ item1.nome_completo }}
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-price">
          <template v-if="!isNaN(totalValue) && !isNaN(totalValue)">
            <span>R$<span class="span-total-value">{{ formattedTotalValue }}</span>/mês</span>
            <br>
            <span class="span-consultoria">+ Consultoria: {{ formattedConsultancyValue }}</span>
          </template>
        </div>
        <div class="sidebar-cycle">
          <p>Ciclo de Pagamento</p>
          <input type="radio" v-model="paymentCycleValue" value="0" :id="'monthlyRadio'" class="custom-radio">
          <label :for="'monthlyRadio'" @click.prevent="selectRadio(0)">Mensal</label>

          <input type="radio" v-model="paymentCycleValue" value="1" :id="'quarterlyRadio'" class="custom-radio">
          <label :for="'quarterlyRadio'" @click.prevent="selectRadio(1)">Trimestral</label>

          <input type="radio" v-model="paymentCycleValue" value="2" :id="'semiannualRadio'" class="custom-radio">
          <label :for="'semiannualRadio'" @click.prevent="selectRadio(2)">Semestral</label>

          <input type="radio" v-model="paymentCycleValue" value="3" :id="'annualRadio'" class="custom-radio">
          <label :for="'annualRadio'" @click.prevent="selectRadio(3)">Anual</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modulesStore } from '@/store/modules.js'
import { watch, computed, ref } from 'vue';

export default {
  name: 'SideBar',
  props: {
    totalValue: Number,
    checkedList: Array,
    consultancyValue: Number,
    managementType: String
  },
  setup(props) {
    const store = modulesStore();
    const paymentCycleValue = ref(0);
    store.setDiscont();

    watch(paymentCycleValue, (newValue) => {
      store.paymentCycle = newValue;
      store.calculateTotalCheckedValue();
      store.setDiscont();
    });

    const formatCurrency = (value) => {
      return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    const formatManagementType = (name) => {
      switch (name) {
        case 'gestao_de_atendimento': return 'Gestão de Atendimento';
        case 'gestao_de_empreendimentos': return 'Gestão de Empreendimentos';
        case 'gestao_de_vendas': return 'Gestão de Vendas';
        default: return 'Gestão de Atendimento';
      }
    };

    const selectRadio = (value) => {
      paymentCycleValue.value = value;
      store.paymentCycle = value;
      store.calculateTotalCheckedValue();
      store.setDiscont();
    };

    const formattedTotalValue = computed(() => formatCurrency(props.totalValue));
    const formattedConsultancyValue = computed(() => formatCurrency(props.consultancyValue));
    const formattedManagementName = computed(() => formatManagementType(props.managementType));

    return { paymentCycleValue, formattedTotalValue, formattedConsultancyValue, formattedManagementName, selectRadio };
  }
}
</script>

<style scoped>
.sidebar-container {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-head {
  background-color: #0091ff;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  padding: 25px 30px;
}

.sidebar-body {
  background-color: #fff;
  overflow-y: auto;
  flex-grow: 1;
}

li {
  font-size: 12px;
  padding: 10px 30px;
  border-bottom: 1px dashed #e2e2f6;
  color: rgb(50, 68, 94);
}

.sidebar-footer {
  background-color: #1cca85;
  color: #fff;
  font-weight: 500;

}

.span-total-value {
  font-size: 40px;
}

.span-consultoria {
  font-size: 13px;
}

.sidebar-price {
  text-align: right;
  padding: 10px;
}

.sidebar-price{
  font-size: 18px;
}

.sidebar-cycle {
  background-color: #08b671;
  padding: 20px;
}

.sidebar-cycle p{
  margin-bottom: 10px;
}

label{
  margin: 0 12px 0 2px;
  font-size: 12px;
}

.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  width: 13px;
  height: 13px;
  border: 2px solid #fff;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
  vertical-align: middle;
}

.custom-radio:checked {
  background-color: #00a25d;
  border-color: #fff;
}

label{
  cursor: pointer;
}

@media (max-width: 1029px) {
  .sidebar-container {
    height: auto;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
  }

  .sidebar {
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  .sidebar-head {
    display: none;
  }

  .sidebar-body {
    display: none;
  }

  .sidebar-footer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .sidebar-price {
    flex: 1;
    padding: 12px 16px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .span-total-value {
    font-size: 26px;
  }

  .span-consultoria {
    font-size: 11px;
  }

  .sidebar-cycle {
    flex: 1;
    padding: 12px 16px;
  }

  .sidebar-cycle p {
    margin-bottom: 6px;
    font-size: 11px;
  }

  label {
    margin: 0 8px 0 2px;
    font-size: 11px;
  }
}
</style>
