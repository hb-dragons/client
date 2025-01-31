<script lang="ts" setup></script>

<template>
  <div>
    <main class="bg-surface-950 text-surface-100 min-h-screen overflow-x-hidden">
      <HeaderNavigation />
      <div>
        <slot />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
