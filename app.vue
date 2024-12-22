<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="200" :height="20" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leat-to {
  opacity: 0;
}
</style>
