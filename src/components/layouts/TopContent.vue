<template>
  <nav>
    <div class="sidebar-spacer"></div>
    <div class="container">
      <div class="content">
        <h1>
          Personalize o melhor plano para seu
          <span class="span-highlight">negócio</span>.
        </h1>
        <div class="container-buttons">
          <button
            v-for="view in views"
            :key="view.name"
            :class="{ highlighted: activeView === view.name }"
            @click="selectView(view.name)"
          >
            <span class="span-point"></span>
            {{ view.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
const VIEWS = [
  { name: "ServiceManagement", label: "Gestão de Atendimento" },
  { name: "DevelopmentManagement", label: "Gestão de Empreendimentos" },
  { name: "SalesManagement", label: "Gestão de Vendas" },
];

export default {
  name: "PlanNavigator",
  data() {
    return {
      views: VIEWS,
      activeView: VIEWS[0].name,
    };
  },
  methods: {
    selectView(name) {
      this.activeView = name;
      this.$emit("navigate", name);
    },
  },
};
</script>

<style scoped>
.sidebar-spacer {
  width: 400px;
  height: 100%;
  flex-shrink: 0;
}

.highlighted {
  border: 1px solid #7cc7ff;
  color: #32445e;
}

.highlighted .span-point {
  background-color: #1cca85;
}

nav {
  background-color: aliceblue;
  height: 15vh;
  display: flex;
  flex-direction: row-reverse;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin: auto;
}

.content {
	margin-inline: 30px;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  color: #32445e;
}

.span-highlight {
  color: #0091ff;
}

.container-buttons {
  display: flex;
  gap: 20px;
  margin-top: 13px;
}

button {
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: rgb(136, 156, 185);
  padding: 15px 19px;
  gap: 8px;
  border-radius: 7px;
  border: 1px solid #c8d7e8;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
}

.span-point {
  display: inline-block;
  height: 24px;
  width: 24px;
  background-color: #c8d7e8;
  border-radius: 50%;
}

@media (max-width: 1236px) {
  nav {
    height: auto;
    padding: 16px;
  }

  .container {
    margin: 0;
    width: 100%;
  }

  .content {
	max-width: 800px;
  }

  h1 {
    font-size: 20px;
  }

  .container-buttons {
    flex-direction: column;
    gap: 10px;
  }

  button {
    font-size: 14px;
    padding: 10px 14px;
  }

  .container-buttons button {
    flex: 1;
  }
}

@media (max-width: 1029px) {
  .sidebar-spacer {
    display: none;
  }

  nav {
    height: auto;
    padding: 16px;
    flex-direction: column;
  }

  .container {
    margin: 0;
    width: 100%;
  }

  .content {
	width: 100%;
	max-width: 850px;
	margin-inline: auto;
  }

  h1 {
    font-size: 16px;
  }

  .container-buttons {
    flex-direction: column;
    gap: 10px;
  }

  button {
    font-size: 14px;
    padding: 10px 14px;
  }

  .container-buttons button {
    flex: 1;
  }
}
</style>
