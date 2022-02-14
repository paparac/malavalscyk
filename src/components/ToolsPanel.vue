<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <ToolsButton content="Create Random Arc" :onClick="createArc" />
      <ToolsButton content="Clear" :onClick="clearCtx" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ToolsButton from "@/components/ToolsButton.vue";
import { ctxCreate } from "@/canvas/crxCreate";
import { createSeveralRandomCircles } from "@/canvas/createSeveralRandomCircles";
import { createRandomCircle } from "@/canvas/createRandomCircle";

export default defineComponent({
  name: "ToolsPanel",
  components: { ToolsButton },
  props: {
    isVisiblePanel: Boolean,
  },

  setup() {
    onMounted(() => {
      const ctx = ctxCreate();
      createSeveralRandomCircles(ctx);
    });

    const createArc = () => {
      const ctx = ctxCreate();
      createRandomCircle(ctx);
    };

    const clearCtx = () => {
      const ctx = ctxCreate();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    return { createArc, clearCtx };
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
  color: #c271a7;
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
