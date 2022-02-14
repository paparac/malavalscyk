<template>
  <div id="dom-layout">
    <ToolsButton
      :isVisiblePanel="isVisiblePanel"
      :changeVisiblePanel="changeVisiblePanel"
      content="Tools"
    />
    <ToolsPanel :isVisiblePanel="isVisiblePanel" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToolsButton from "@/components/ToolsButton.vue";
import ToolsPanel from "@/components/ToolsPanel.vue";

export default defineComponent({
  name: "DomLayout",

  components: { ToolsButton, ToolsPanel },

  setup() {
    let isVisiblePanel = ref(false);

    const changeVisiblePanel = () => {
      isVisiblePanel.value = !isVisiblePanel.value;
    };

    return {
      isVisiblePanel,
      changeVisiblePanel,
    };
  },
});
</script>

<style scoped>
#dom-layout {
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  left: var(--gap);
  top: var(--gap);
  position: absolute;
}
</style>
