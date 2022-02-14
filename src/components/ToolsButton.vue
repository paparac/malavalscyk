<template>
  <button class="tools-button" @click="onClick">
    {{ content }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolsButton",
  props: {
    onClick: Function,
    content: String,
  },
});
</script>

<style scoped>
.tools-button {
  --bgColor: var(--black);
  --textColor: var(--white);

  background: var(--bgColor);
  border: 0;
  color: var(--textColor);
  font-weight: bold;
  border-radius: var(--borderRadius);
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
  transition: var(--trasition);
}

.tools-button:hover {
  transform: scale(1.1);
}

.tools-button:active {
  transform: scale(0.9);
}
</style>
