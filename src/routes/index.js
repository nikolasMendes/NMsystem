import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Salario from "../views/Salario.vue";
import Despesas from "../views/Despesas.vue";
import Investimentos from "../views/Investimentos.vue";
import Agenda from "../views/Agenda.vue";
import Mercado from "../views/Mercado.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/salario", name: "Salario", component: Salario },
  { path: "/despesas", name: "Despesas", component: Despesas },
  { path: "/investimentos", name: "Investimentos", component: Investimentos },
  { path: "/agenda", name: "Agenda", component: Agenda },
  { path: "/mercado", name: "Mercado", component: Mercado },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
