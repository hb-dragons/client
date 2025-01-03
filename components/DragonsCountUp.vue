<script setup lang='ts'>
import type { CountUp } from '#build/components';

defineProps<{ endVal: number; duration: number }>();

const countUpInstance = ref<typeof CountUp | null>(null);

function handleIsVisible() {
  if (countUpInstance.value) {
    countUpInstance.value.start();
  }
}
</script>

<template>
  <OnVisible
    :trigger-once="true"
    @visible="handleIsVisible"
  >
    <CountUp
      ref="countUpInstalce"
      :end-val="endVal"
      :duration="duration"
      :autoplay="false"
      @init="countUpInstance = $event"
    />
  </OnVisible>
</template>
