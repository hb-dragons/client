<script lang="ts" setup></script>

<template>
  <main class="bg-surface-950 min-h-screen overflow-x-hidden">
    <HeaderNavigation />
    <div>
      <slot />
    </div>
    <PageFooter />
  </main>
</template>
