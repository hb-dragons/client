<script lang="ts" setup>
onMounted(() => {
  document.documentElement.classList.add('dark'); // Forces dark mode by default
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      :throttle="200"
      :height="5"
    />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* assets/styles/layout-transitions.css */
@media screen and (prefers-reduced-motion: no-preference) {
  .layout-enter-active,
  .layout-leave-active {
    /* transition: transform 0.1s ease, opacity 0.1s ease; */
  }

  .layout-enter-from {
    /* transform: scale(0.99); */
    opacity: 0;
  }

  .layout-leave-to {
    transform: scale(1.01);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .layout-enter-active,
  .layout-leave-active {
    transition: none;
  }
}

.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
