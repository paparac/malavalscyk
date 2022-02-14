<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <ToolsButton content="Circle" :onClick="createCircle" />
      <ToolsButton
        content="Transparent Circle"
        :onClick="createTransparentCircle"
      />
      <ToolsButton content="Clear" :onClick="clearCtx" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolsButton from "@/components/ToolsButton.vue";
import { getCtx } from "@/utils/getCtx";
import { createRandomCircle } from "@/utils/createRandomCircle";

export default defineComponent({
  name: "ToolsPanel",
  components: { ToolsButton },
  props: {
    isVisiblePanel: Boolean,
  },

  setup() {
    const createCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx);
    };

    const createTransparentCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, true);
    };

    const clearCtx = () => {
      const ctx = getCtx();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    return { createCircle, createTransparentCircle, clearCtx };
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
