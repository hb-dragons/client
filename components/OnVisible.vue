<script setup lang='ts'>
import { useElementVisibility } from '@vueuse/core';

const { triggerOnce = true, triggerClasses = '' } = defineProps<{ triggerOnce?: boolean; triggerClasses?: string }>();

const target = ref<HTMLElement | null>(null);

const targetIsVisible = useElementVisibility(target);
const wasTriggered = ref(false);
const visible = ref(false);

watch(targetIsVisible, (isVisible) => {
  if (isVisible && !wasTriggered.value) {
    wasTriggered.value = true;
    visible.value = true;
    return;
  }

  if (isVisible && wasTriggered.value && triggerOnce) {
    visible.value = false;
  }
});
</script>

<template>
  <div
    ref="target"
    :class="{ [triggerClasses]: visible }"
  >
    <slot />
  </div>
</template>
