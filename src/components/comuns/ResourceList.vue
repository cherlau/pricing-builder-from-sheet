<template>
  <div class="resource-list">
    <div class="resources-head">
      <h3> Recursos</h3>
    </div>
    <div class="resources-body">
      <div class="resources-body-list">
        <ul v-if="resources">
          <li v-for="(item, index) in filteredResources" :key="index">
            <input type="checkbox" :id="'checkbox_' + index" v-model="item.checked" @change="checkboxChange(item)" class="custom-checkbox">
            <label :for="'checkbox_' + index">{{ item.nome }}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { modulesStore } from '@/store/modules.js';
import { watch, ref, onMounted } from 'vue';

export default {
  props: {
    resources: Object,
    managementType: String,
    module: String,
  },
  setup(props) {
    const store = modulesStore();
    let filteredResources = ref([])

    const fetchFilteredResources = async (newModule) => {
      try {
        filteredResources.value = await store.getResources(newModule, props.managementType)

      } catch (error) {
        console.error('Erro durante a execução do watch:', error)
      }
    }

    onMounted(() => {
      fetchFilteredResources(props.module)
    })

    watch(() => props.module, (newModule) => {
      fetchFilteredResources(newModule)
    })

    const checkboxChange = () => {
      store.calculateChecked()
      store.calculateTotalCheckedValue();
      store.getConsultancy()
    };

    return { filteredResources, checkboxChange }
  },
};
</script>

<style scoped>
.resource-list {
  width: 100%;
}

.resources-head{
  background-color: #0181e2;
  border-top-right-radius: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 20px 30px;
}

.resources-body{
  padding: 40px 30px;
  font-size: 12px;
  font-weight: 400;
  color: rgb(155, 170, 191);
  height: 630px;
  user-select: none;
}

.resources-body-list{
  height: 410px;
  overflow: auto;
}

ul li:first-child{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

li{
  padding: 15px;
  border: 1px solid #e1ecf5;
}
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  background-color: #D7E4EF;
  border: 2px solid #D7E4EF;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
  vertical-align: middle;
}

label{
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #1cca85;
  border-color: #1cca85;
  color: #fff;
}

.custom-checkbox:checked + label{
  color: rgb(87, 110, 144);
}

@media (max-width: 768px) {
  .resources-head {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .resources-body {
    height: auto;
    max-height: 300px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .resources-body-list {
    height: auto;
    max-height: 260px;
  }
}
</style>
