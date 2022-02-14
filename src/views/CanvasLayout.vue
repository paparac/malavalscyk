<template>
  <canvas id="canvas-layout" :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CanvasLayout",

  setup() {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    return { width, height };
  },
});
</script>

<style>
a {
  color: #c27171;
}
</style>
