<template>
  <div id="dom-layout">
    <ToolsButton :onClick="changeVisiblePanel" content="Tools" />
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
  max-width: 60%;
  max-height: 60%;

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  position: absolute;
  left: var(--gap);
  top: var(--gap);
}
</style>
