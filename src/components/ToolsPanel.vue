<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <ToolsButton content="Circle" :onClick="createCircle" />
      <ToolsButton
        content="Circle Radius"
        :onClick="createRandomRadiusCircle"
      />
      <ToolsButton content="Circle Color" :onClick="createRandomColorCircle" />
      <ToolsButton
        content="Circle Transparent Color"
        :onClick="createTransparentColorCircle"
      />
      <ToolsButton
        content="Random Circle"
        :onClick="createRandomRadiusTransparentCircle"
      />
      <ToolsButton
        content="Transparent Circle"
        :onClick="createTransparentCircle"
      />

      <ToolsButton content="Rect" :onClick="createRect" />
      <ToolsButton
        content="Transparent Rect"
        :onClick="createTransparentRect"
      />
      <ToolsButton content="Rect Size" :onClick="createRandomSizeRect" />
      <ToolsButton content="Rect Color" :onClick="createRandomColorRect" />
      <ToolsButton content="Rect Random" :onClick="createAllRandomRect" />

      <ToolsButton content="Line" :onClick="createLine" />
      <ToolsButton
        content="Transparent Line"
        :onClick="createTransparentLine"
      />
      <ToolsButton content="Random Line" :onClick="createAllRandomLine" />
      <ToolsButton content="Clear" :onClick="clearCtx" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolsButton from "@/components/ToolsButton.vue";
import { getCtx } from "@/utils/getCtx";
import { createRandomCircle } from "@/utils/createRandomCircle";
import { createRandomRect } from "@/utils/createRandomRect";
import { createRandomLine } from "@/utils/createRandomLine";

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

    const createRandomRadiusCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, false, false, true);
    };

    const createRandomRadiusTransparentCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, true, true, true);
    };

    const createRandomColorCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, false, true);
    };

    const createTransparentColorCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, true, true);
    };

    const createTransparentCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, true);
    };

    const createRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx);
    };

    const createTransparentRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx, true);
    };

    const createRandomSizeRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx, true, true);
    };

    const createRandomColorRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx, true, false, true);
    };

    const createAllRandomRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx, true, true, true);
    };

    const createLine = () => {
      const ctx = getCtx();
      createRandomLine(ctx);
    };

    const createTransparentLine = () => {
      const ctx = getCtx();
      createRandomLine(ctx, true);
    };

    const createAllRandomLine = () => {
      const ctx = getCtx();
      createRandomLine(ctx, true, true, true);
    };

    const clearCtx = () => {
      const ctx = getCtx();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    return {
      createCircle,
      createRandomColorCircle,
      createRandomRadiusTransparentCircle,
      createRandomRadiusCircle,
      createTransparentColorCircle,
      createTransparentCircle,
      createRect,
      createTransparentRect,
      createRandomSizeRect,
      createRandomColorRect,
      createAllRandomRect,
      createLine,
      createTransparentLine,
      createAllRandomLine,
      clearCtx,
    };
  },
});
</script>

<style scoped>
.tools-panel {
  border-radius: var(--borderRadius);
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  max-height: 100%;
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
