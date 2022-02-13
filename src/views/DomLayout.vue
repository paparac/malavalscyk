<template>
  <div id="dom-layout">
    <MenuButton
      :isVisiblePanel="isVisiblePanel"
      :changeVisiblePanel="changeVisiblePanel"
    />
    <MenuPanel :isVisiblePanel="isVisiblePanel" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuButton from "@/components/MenuButton.vue";
import MenuPanel from "@/components/MenuPanel.vue";

export default defineComponent({
  name: "DomLayout",

  components: { MenuButton, MenuPanel },

  setup() {
    let isVisiblePanel = ref(false);

    function changeVisiblePanel(): void {
      isVisiblePanel.value = !isVisiblePanel.value;
    }

    return {
      isVisiblePanel,
      changeVisiblePanel,
    };
  },
});
</script>

<style scoped>
#dom-layout {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
