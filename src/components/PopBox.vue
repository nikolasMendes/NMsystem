<template>
  <div
    class="pop-box"
    v-bind:class="{ 'display-pop-box': display }"
    v-on:click="close"
  >
    <div
      class="bg-gradient-to-tr from-blue-500 via-teal-500 to-emerald-500 p-5 rounded-3xl"
    >
      <div class="flex justify-between mb-10">
        <span class="text-subtitle text-primary-900">{{ title }}</span>
        <button
          class="p-1 shadow-md shadow-gray-600 rounded-full flex items-center justify-center"
          v-on:click="$emit('update', false)"
          v-if="!hiddenClose"
        >
          <img src="../assets/x.png" class="w-4 h-4" />
        </button>
      </div>

      <div class="flex flex-col gap-5 px-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopBox",
  data() {
    return {};
  },
  props: {
    title: { type: String },
    display: { type: Boolean },
    displayForm: { type: Boolean },
    hiddenClose: { type: Boolean, default: false },
  },
  methods: {
    close(event) {
      if (event.target.classList[0] == "pop-box" && !this.displayForm) {
        this.$emit("update", false);
      }
    },
  },
};
</script>
<style scoped>
.pop-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(16, 16, 16, 0.3);
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 8;

  display: grid;
  justify-content: center;
  align-content: center;
}
.display-pop-box {
  opacity: 10;
  visibility: visible;
}
</style>
