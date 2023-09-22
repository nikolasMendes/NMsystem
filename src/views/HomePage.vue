<template>
  <div
    class="bg-gradient-to-tr p-4 flex flex-col justify-center items-center to-emerald-500 via-teal-500 from-blue-500 w-screen h-screen"
  >
    <div
      class="flex flex-col w-screen h-screen justify-center items-center gap-10"
    >
      <RouterLink
        to="/salario"
        class="w-10/12 h-1/6 shadow-2xl hover:bg-teal-500 shadow-gray-800 rounded-3xl flex items-center justify-center"
      >
        <img src="../assets/money.png" />
      </RouterLink>
      <RouterLink
        to="/despesas"
        class="w-10/12 h-1/6 shadow-2xl shadow-gray-800 hover:bg-teal-500 rounded-3xl flex items-center justify-center"
      >
        <img src="../assets/despesas.png" />
      </RouterLink>

      <RouterLink
        to="/investimentos"
        class="w-10/12 h-1/6 shadow-2xl shadow-gray-800 hover:bg-teal-500 rounded-3xl flex justify-center items-center"
      >
        <img src="../assets/invest.png" />
      </RouterLink>
      <div class="w-10/12 h-1/6 flex flex-row justify-between">
        <RouterLink
          to="/agenda"
          class="w-5/12 h-6/6 shadow-2xl shadow-gray-800 hover:bg-teal-500 rounded-3xl flex justify-center items-center"
        >
          <img src="..//assets/calendar.png" class="w-20 h-20" />
        </RouterLink>
        <RouterLink
          to="/mercado"
          class="w-5/12 h-6/6 shadow-2xl shadow-gray-800 hover:bg-teal-500 rounded-3xl flex justify-center items-center"
        >
          <img src="../assets/market.png" class="" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      cards: [
        {
          image: "",
          titule: "",
          placeHolder: "",
        },
        {
          image: "",
          titule: "",
          placeHolder: "",
        },
        {
          image: "",
          titule: "",
          placeHolder: "",
        },
      ],
    };
  },
  components: {},
};
</script>
<style></style>
