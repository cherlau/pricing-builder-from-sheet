<template>
  <div>
    <management-view
      v-if="viewConfig"
      :management-type="viewConfig.managementType"
      :input-ranges="viewConfig.inputRanges"
    ></management-view>
  </div>
</template>

<script>
import ManagementView from "@/components/views/managerView.vue";

const VIEW_CONFIG = {
  ServiceManagement: {
    managementType: "gestao_de_atendimento",
    inputRanges: ["CRM", "Usuários"],
  },
  DevelopmentManagement: {
    managementType: "gestao_de_empreendimentos",
    inputRanges: [
      "CRM (reservas)",
      "Espelho de Vendas - Gestão de Unidades e Tabelas",
      "Usuários Ativos",
      "API Pública",
    ],
  },
  SalesManagement: {
    managementType: "gestao_de_vendas",
    inputRanges: [
      "Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas",
      "CRM (funil)",
      "Usuários",
    ],
  },
};

export default {
  name: "MainContent",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    viewConfig() {
      return VIEW_CONFIG[this.content] || null;
    },
  },
  components: {
    ManagementView,
  },
};
</script>
