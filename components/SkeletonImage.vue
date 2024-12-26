<script setup lang='ts'>
const { src } = defineProps<{ src?: string; imgClasses?: string }>();

const isLoading = ref(true);

onMounted(() => {
  if (src) {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      isLoading.value = false;
      console.log('Image was already loaded from cache.');
    }
  }
});

function isLoaded() {
  isLoading.value = false;
}
</script>

<template>
  <Transition name="fade">
    <img
      v-show="!isLoading"
      :src="src"
      :alt="src"
      class="w-full h-full object-center object-cover"
      :class="imgClasses"
      @load="isLoaded"
    >
  </Transition>
  <Skeleton
    v-if="isLoading"
    width="100%"
    height="100%"
  />
</template>
