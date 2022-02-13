<template>
  <Transition name="fade">
    <section class="menu-panel" v-show="isVisiblePanel">
      <h1 class="menu-panel__title">Menu:</h1>
      <div class="menu-panel__content"></div>
    </section>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPanel",
  props: {
    isVisiblePanel: Boolean,
  },
});
</script>

<style scoped>
.menu-panel {
  --width: 200px;
  --bgColor: var(--black);
  --textColor: var(--white);

  background-color: var(--bgColor);
  color: var(--textColor);
  border-radius: var(--borderRadius);
  aspect-ratio: 1;
  width: var(--width);
  padding: var(--gap);
  padding-top: calc(var(--gap) * 3);
  position: absolute;
  left: var(--gap);
  top: var(--gap);
}

.menu-panel__content {
  padding-top: var(--gap);
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
