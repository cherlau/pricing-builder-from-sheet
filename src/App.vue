<template>
  <div v-if="apiLoaded" id="app">
    <top-content @navigate="component = $event"> </top-content>

    <main-content :content="component" ></main-content>
  </div>
  <div v-else>
    <div class="loading-container">
      <img src="https://gestao.appfacilita.com/planos/img/loader-bg-grey-blue.97ade1b6.svg" alt="Carregando...">
    </div>
  </div>
</template>

<script>
import TopContent from '@/components/layouts/TopContent.vue';
import MainContent from '@/components/layouts/MainContent.vue';

import { ref, onMounted } from 'vue';

import { modulesStore } from '@/store/modules.js';
import mockData from '@/mocks/mockData.js';

export default {
  name: 'App',
  data: () => ({
    component: 'ServiceManagement'
  }),
  setup() {
    const store = modulesStore();
    const json = ref(store);
    const apiLoaded = ref(false);

    onMounted(() => {
      store.setResponseData(mockData);
      apiLoaded.value = true;
    });

    return { json, apiLoaded };
  },
  components: {
    TopContent,
    MainContent
  },
};
</script>

<style>
*{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #DBDEF0;
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #FFF;
}

body{
  padding: 0;
  background-color: #FBFCFC;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-container img {
  max-width: 5%;
  max-height: 5%;
}
</style>