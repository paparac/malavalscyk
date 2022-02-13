<template>
  <button class="menu-button" @click="changeVisiblePanel">
    <span v-if="isVisiblePanel">X</span>
    <span v-else>M</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
  props: {
    isVisiblePanel: Boolean,
    changeVisiblePanel: Function,
  },
});
</script>

<style scoped>
.menu-button {
  --width: 30px;
  --bgColor: var(--black);
  --textColor: var(--white);

  background: var(--bgColor);
  border: 2px solid var(--textColor);
  color: var(--textColor);
  font-weight: bold;
  border-radius: var(--borderRadius);
  width: var(--width);
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  transition: var(--trasition);
  position: absolute;
  left: var(--gap);
  top: var(--gap);
  z-index: var(--zIndex1);
}

.menu-button:hover {
  transform: scale(1.1);
}

.menu-button:active {
  transform: scale(0.9);
}
</style>
