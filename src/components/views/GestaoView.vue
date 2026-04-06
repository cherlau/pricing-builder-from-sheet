<template>
  <div>
    <div id="container">
      <div class="content">
        <div class="modules-content">
          <data class="modules-container">
            <module-list
              :module="module"
              @moduloClicked="moduloClicado = $event"
            ></module-list>
            <resource-list
              :gestao-tipo="gestaoTipo"
              :modulo="moduloClicado"
              :resources="module"
            ></resource-list>
          </data>
          <input-range
            v-for="tipo in inputRanges"
            :key="tipo"
            :tipo="tipo"
          ></input-range>
        </div>
      </div>
      <div class="sidebar-spacer"></div>

      <side-bar
        :gestao-tipo="gestaoTipo"
        :totalValue="totalValue"
        :listaChecked="listaChecked"
        :valueConsultoria="valueConsultoria"
      ></side-bar>
    </div>
  </div>
</template>

<script>
import { modulesStore } from "@/store/modules.js";
import ResourceList from "@/components/comuns/ResourceList";
import moduleList from "@/components/comuns/ModuleList";
import InputRange from "@/components/comuns/InputRange.vue";
import SideBar from "@/components/comuns/SideBar.vue";
import { onBeforeMount, watch, ref, onBeforeUnmount } from "vue";

export default {
  name: "GestaoView",
  props: {
    gestaoTipo: {
      type: String,
      required: true,
    },
    inputRanges: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    moduloClicado: "gestao_de_produtos",
  }),
  setup(props) {
    const store = modulesStore();
    store.getChecked(props.gestaoTipo);
    const module = store.getNestedFiltredModules(props.gestaoTipo);
    let listaChecked = store.resourcesCheckedTrue;
    const totalValue = ref(store.totalValue);
    const valueConsultoria = ref(store.valueConsultoria);

    watch(
      () => store.totalValue,
      (newValue) => {
        totalValue.value = newValue;
      }
    );
    watch(
      () => store.valueConsultoria,
      (newValue) => {
        valueConsultoria.value = newValue;
      }
    );
    watch(
      () => store.resourcesCheckedTrue,
      (newValue) => {
        listaChecked = newValue;
      }
    );

    onBeforeMount(() => {
      store.calcTotal();
      store.getConsultoria();
    });

    onBeforeUnmount(() => {
      store.clearAllRanges();
    });

    return { module, listaChecked, totalValue, valueConsultoria };
  },
  components: {
    ResourceList,
    moduleList,
    InputRange,
    SideBar,
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
}

.sidebar-spacer {
  width: 400px;
  flex-shrink: 0;
}

.content {
  margin: auto;
  width: 100%;
  max-width: 900px;
}

.modules-content {
  margin-inline: 30px;
}

.modules-container {
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  margin-top: 55px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  #container {
    flex-direction: column;
  }

  .sidebar-spacer {
    display: none;
  }

  .content {
    margin: 0;
    padding: 16px;
    padding-bottom: 140px;
    width: 100%;
    box-sizing: border-box;
  }

  .modules-container {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 44px;
  }
}
</style>
