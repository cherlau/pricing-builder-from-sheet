<template>
  <div>
    <gestao-view
      v-if="viewConfig"
      :gestao-tipo="viewConfig.gestaoTipo"
      :input-ranges="viewConfig.inputRanges"
    ></gestao-view>
  </div>
</template>

<script>
import GestaoView from "@/components/views/GestaoView.vue";

const VIEW_CONFIG = {
  GestaoAtendimento: {
    gestaoTipo: "gestao_de_atendimento",
    inputRanges: ["CRM", "Usuários"],
  },
  GestaoEmpreendimentos: {
    gestaoTipo: "gestao_de_empreendimentos",
    inputRanges: [
      "CRM (reservas)",
      "Espelho de Vendas - Gestão de Unidades e Tabelas",
      "Usuários Ativos",
      "API Pública",
    ],
  },
  GestaoVendas: {
    gestaoTipo: "gestao_de_vendas",
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
    GestaoView,
  },
};
</script>
