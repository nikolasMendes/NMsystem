<template>
  <div class="bg-gradient-to-tr to-emerald-500 via-teal-500 from-blue-500">
    <router-view></router-view>
  </div>
</template>
<script>
import HomePage from "./views/HomePage.vue";
export default {
  name: "App",
  data() {},
  components: {
    HomePage,
  },
};
</script>
<style></style>
