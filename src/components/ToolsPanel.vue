<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Circle</h2>
        <ToolsButton content="Create" :onClick="createCircle" />
        <ToolsButton
          content="Transparent"
          :isActive="circleSample.transparent"
          :onClick="() => changeCircleSample('transparent')"
        />
        <ToolsButton
          content="R. Color"
          :isActive="circleSample.randomColor"
          :onClick="() => changeCircleSample('randomColor')"
        />
        <ToolsButton
          content="R. Radius"
          :isActive="circleSample.randomRadius"
          :onClick="() => changeCircleSample('randomRadius')"
        />
      </div>

      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Rect</h2>
        <ToolsButton content="Create" :onClick="createRect" />
        <ToolsButton
          content="Transparent"
          :isActive="rectSample.transparent"
          :onClick="() => changeRectSample('transparent')"
        />
        <ToolsButton
          content="R. Color"
          :isActive="rectSample.randomColor"
          :onClick="() => changeRectSample('randomColor')"
        />
        <ToolsButton
          content="R. Size"
          :isActive="rectSample.randomSize"
          :onClick="() => changeRectSample('randomSize')"
        />
      </div>

      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Line</h2>
        <ToolsButton content="Create" :onClick="createLine" />
        <ToolsButton
          content="Transparent"
          :isActive="lineSample.transparent"
          :onClick="() => changeLineSample('transparent')"
        />
        <ToolsButton
          content="R. Color"
          :isActive="lineSample.randomColor"
          :onClick="() => changeLineSample('randomColor')"
        />
        <ToolsButton
          content="R. Size"
          :isActive="lineSample.randomSize"
          :onClick="() => changeLineSample('randomSize')"
        />
      </div>

      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Other</h2>
        <ToolsButton content="Clear" :onClick="clearCtx" />
        <ToolsButton
          content="Clear 100 ms"
          :isActive="ctxClearTimeout.status"
          :onClick="clearCtxEvery200ms"
        />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
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
    const circleSample = reactive({
      transparent: true,
      randomColor: false,
      randomRadius: false,
    });

    const createCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx, circleSample);
    };

    const changeCircleSample = (property: keyof typeof circleSample) => {
      circleSample[property] = !circleSample[property];
    };

    const rectSample = reactive({
      transparent: true,
      randomSize: false,
      randomColor: false,
    });

    const createRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx, rectSample);
    };

    const changeRectSample = (property: keyof typeof rectSample) => {
      rectSample[property] = !rectSample[property];
    };

    const lineSample = reactive({
      transparent: true,
      randomSize: false,
      randomColor: false,
    });

    const createLine = () => {
      const ctx = getCtx();
      createRandomLine(ctx, lineSample);
    };

    const changeLineSample = (property: keyof typeof lineSample) => {
      lineSample[property] = !lineSample[property];
    };

    const clearCtx = () => {
      const ctx = getCtx();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const ctxClearTimeout = reactive({
      id: 0,
      status: false,
    });

    const clearCtxEvery200ms = () => {
      if (ctxClearTimeout.status) {
        clearTimeout(ctxClearTimeout.id);
        ctxClearTimeout.status = false;
        return;
      }

      ctxClearTimeout.id = setInterval(() => clearCtx(), 200);
      ctxClearTimeout.status = true;
    };

    return {
      createCircle,
      circleSample,
      changeCircleSample,
      createRect,
      rectSample,
      changeRectSample,
      lineSample,
      createLine,
      changeLineSample,
      clearCtx,
      clearCtxEvery200ms,
      ctxClearTimeout,
    };
  },
});
</script>

<style scoped>
.tools-panel {
  backdrop-filter: blur(30px);
  background-color: var(--selfWhite);
  border-radius: var(--borderRadius);
  opacity: 0.8;

  padding: var(--gap);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: calc(var(--gap) * 2);
}

.tools-panel-section {
  display: flex;
  gap: var(--gap);
  flex-wrap: wrap;
}

.tools-panel-title {
  width: 100%;
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
