<script setup lang='ts'>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { type CountUpOptions, CountUp } from 'countup.js';

interface RafContext {
  cancel(): void;
}

// delay to execute callback function
function useRaf(cb: () => unknown, delaySeconds = 1): RafContext {
  const rafId = ref(-1);
  let startTime: number;

  function count(timestamp: number) {
    if (!startTime) startTime = timestamp;

    const diff = timestamp - startTime;

    if (diff < delaySeconds * 1000) {
      rafId.value = requestAnimationFrame(count);
    }
    else {
      cb();
    }
  }
  rafId.value = requestAnimationFrame(count);

  function cancel() {
    window.cancelAnimationFrame(rafId.value);
  }

  return { cancel };
}

interface CountUpProps {
  endVal: number | string;
  startVal?: number | string;
  // animation duration (s)
  duration?: number | string;
  decimalPlaces?: number;
  autoplay?: boolean;
  // animation times，infinite loop if true
  loop?: boolean | number;
  // delay (s) to animation
  delay?: number;
  // countup.js original options
  options?: CountUpOptions;
}
interface CountUpEmits {
  (event: 'init', countup: CountUpType): void;
  (event: 'finished'): void;
}

const props = withDefaults(defineProps<CountUpProps>(), {
  startVal: 0,
  duration: 2.5,
  decimalPlaces: 0,
  autoplay: true,
  loop: false,
  delay: 0,
  ignorePart: undefined,
  options: undefined,
});
const emits = defineEmits<CountUpEmits>();

const elRef = ref<HTMLElement>();
const countUp = ref<CountUpType>();
let loopCount = 0;
const isFinished = ref(false);
let rafCtx: RafContext;

function initCountUp() {
  if (!elRef.value) {
    return;
  }
  loopCount = 0;
  isFinished.value = false;
  const startVal = Number(props.startVal);
  const endVal = Number(props.endVal);
  const duration = Number(props.duration);
  countUp.value = new CountUp(elRef.value, endVal, {
    startVal,
    duration,
    decimalPlaces: props.decimalPlaces,
    ...props.options,
  });
  if (countUp.value.error) {
    return;
  }
  emits('init', countUp.value);
}

function startAnimation() {
  if (!countUp.value) {
    initCountUp();
  }
  countUp.value?.start(_loop);
  loopCount++;

  function _loop() {
    const isTrue = typeof props.loop === 'boolean' && props.loop;
    if (isTrue || (props.loop as number) > loopCount) {
      rafCtx = useRaf(() => {
        countUp.value?.reset();
        startAnimation();
      }, props.delay);
    }
    else {
      isFinished.value = true;
    }
  }
}

function restart() {
  rafCtx?.cancel();
  initCountUp();
  startAnimation();
}

watch([() => props.startVal, () => props.endVal], () => {
  if (props.autoplay) {
    restart();
  }
});

watch(isFinished, (flag) => {
  if (flag) {
    emits('finished');
  }
});

onMounted(() => {
  initCountUp();
  if (props.autoplay) {
    startAnimation();
  }
});

onUnmounted(() => {
  rafCtx?.cancel();
  countUp.value?.reset();
});

defineExpose({
  init: initCountUp,
  restart,
});
</script>

<template>
  <div>
    <span v-if="!countUp">{{ endVal }}</span>
    <span ref="elRef" />
  </div>
</template>
