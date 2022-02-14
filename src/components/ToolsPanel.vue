<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <ToolsButton content="Create Rect" />
      <ToolsButton content="Create Arc" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolsButton from "@/components/ToolsButton.vue";

export default defineComponent({
  name: "ToolsPanel",
  components: { ToolsButton },
  props: {
    isVisiblePanel: Boolean,
  },
});
</script>

<style scoped>
.tools-panel {
  border-radius: var(--borderRadius);
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: var(--gap);
  opacity: 0.8;
}

.fade-enter-active,
.fade-leave-active {
  transition: var(--trasition);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
