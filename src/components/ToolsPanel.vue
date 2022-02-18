<template>
  <Transition name="fade">
    <div class="tools-panel" v-show="isVisiblePanel">
      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Circle</h2>
        <ToolsButton content="Create" :onClick="createCircle" />
      </div>

      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Rect</h2>
        <ToolsButton content="Create" :onClick="createRect" />
      </div>

      <div class="tools-panel-section">
        <h2 class="tools-panel-title">Line</h2>
        <ToolsButton content="Create" :onClick="createLine" />
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
      x: 30,
      y: 30,
      radius: 10,
      bgColor: "#c27171",
    });

    const rectSample = reactive({
      x: 30,
      y: 30,
      width: 10,
      heigth: 10,
      bgColor: "#c27171",
    });

    const lineSample = reactive({
      x: 30,
      y: 30,
      width: 3,
      heigth: 100,
      bgColor: "#c27171",
    });

    const createCircle = () => {
      const ctx = getCtx();
      createRandomCircle(ctx);
    };

    const createRect = () => {
      const ctx = getCtx();
      createRandomRect(ctx);
    };

    const createLine = () => {
      const ctx = getCtx();
      createRandomLine(ctx);
    };

    return {
      createCircle,
      createRect,
      createLine,
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
