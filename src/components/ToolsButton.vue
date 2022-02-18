<template>
  <button
    :class="`tools-button ${isActive ? 'is-active' : ''}`"
    @click="onClick"
  >
    {{ content }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolsButton",
  props: {
    onClick: Function,
    isActive: Boolean,
    content: String,
  },
});
</script>

<style scoped>
.tools-button {
  --bgColor: var(--black);
  --textColor: var(--white);

  background: var(--bgColor);
  color: var(--textColor);
  border: 0;
  border-radius: var(--borderRadius);
  cursor: pointer;
  user-select: none;
  transition: var(--trasition);

  font-weight: bold;

  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
}

.is-active {
  opacity: 0.5;
}

.tools-button:hover {
  transform: scale(1.1);
}

.tools-button:active {
  transform: scale(0.9);
}
</style>
