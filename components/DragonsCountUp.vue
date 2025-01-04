<script setup lang='ts'>
import type { CountUp } from 'countup.js';

defineProps<{ endVal: number; duration: number }>();

const countUpInstance = ref<CountUp | null>(null);

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
    <span v-if="!countUpInstance">{{ endVal }}</span>
    <CountUp

      ref="countUpInstalce"
      :end-val="endVal"
      :duration="duration"
      :autoplay="false"
      @init="countUpInstance = $event"
    />
  </OnVisible>
</template>
