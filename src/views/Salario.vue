<template>
  <div class="p-5">
    <div v-for="item in item" key="item">
      <div
        class="shadow-gray-600 shadow-md w-max rounded-3xl mt-5 mb-3 p-1 px-2 flex justify-center"
      >
        <p class="text-gray-100 text-titule">
          {{ item.name }}
        </p>
      </div>
      <div
        class="rounded-3xl mb-10 shadow-lg shadow-gray-600 p-5 flex flex-col items-center justify-center gap-5"
      >
        <div
          class="bg-gradient-to-r w-max px-3 from-emerald-600 via-teal-600 to-blue-500 shadow-lg py-1 rounded-3xl"
        >
          <p class="text-gray-200 text-titule text-center">
            {{ item.titule }}
          </p>
        </div>
        <div class="flex justify-between w-full mb-5">
          <p class="text-gray-200">Valor</p>
          <div class="bg-teal-200 py-1 px-2 rounded-full">
            <p class="text-blue-600 text-body1">R$ {{ item.value }}</p>
          </div>
        </div>
        <div
          class="flex justify-between items-center w-full"
          v-for="item in item.portionAmmount"
        >
          <p class="text-gray-200">Parcela</p>
          <div key="item" class="">
            <p class="text-gray-200">{{ item.datePortion }}</p>
            <p class="text-blue-700 text-body1">R$ {{ item.portionValue }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mt-8">
      <button
        v-on:click="openPopBox"
        class="w-20 h-20 border-white shadow-lg bg-gradient-to-tr from-blue-500 via-teal-500 to-emerald-500 shadow-gray-600 rounded-full flex justify-center items-center"
      >
        <img src="../assets/mais.png" class="h-12 w-12" />
      </button>
    </div>
  </div>
  <PopBox
    :hiddenClose="false"
    v-bind:display="displayPopBox"
    v-on:update="closePopBox"
  >
    <div class="flex flex-row justify-between">
      <p>Titulo</p>
      <input class="border border-gray-400 rounded-md w-6/12" />
    </div>
    <div class="flex flex-row justify-between">
      <p>Valor</p>
      <input class="border border-gray-400 rounded-md w-6/12" />
    </div>
    <div class="flex flex-row justify-between">
      <p>Parcela</p>
      <div class="flex justify-between w-6/12">
        <input type="checkbox" class="border border-gray-400 rounded-md" />
        <input type="checkbox" class="border border-gray-400 rounded-md" />
      </div>
    </div>
    <div class="flex flex-row justify-between mt-5">
      <button class="bg-gray-300 rounded-3xl py-2 px-4"><p>LIMPAR</p></button>
      <button class="bg-emerald-400 rounded-3xl py-2 px-4">
        <p>ADCIONAR</p>
      </button>
    </div>
  </PopBox>
</template>
<script>
import PopBox from "../components/PopBox.vue";
export default {
  name: "salario",
  data() {
    return {
      item: [
        {
          name: "Geovanna",
          titule: "Vale Alimentação",
          value: "1400",
          portion: "Sim",
          portionAmmount: [
            {
              datePortion: "01/09/2023",
              portionValue: "600",
            },
            { datePortion: "15/09/2023", portionValue: "800" },
          ],
        },
        {
          name: "Geovanna",
          titule: "Vale Alimentação",
          value: "1400",
          portion: "Sim",
          portionAmmount: [
            {
              datePortion: "01/09/2023",
              portionValue: "600",
            },
            { datePortion: "15/09/2023", portionValue: "800" },
          ],
        },
      ],
      displayPopBox: false,
    };
  },
  components: {
    PopBox,
  },
  methods: {
    closePopBox() {
      this.displayPopBox = false;
    },
    openPopBox() {
      this.displayPopBox = true;
    },
  },
};
</script>
<style></style>
