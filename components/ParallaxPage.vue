<script setup lang='ts'>
defineProps<{ title: string; subtitle?: string; backgroundImage?: string } >();
</script>

<template>
  <div>
    <ParallaxHeader
      :title="title"
      :subtitle="subtitle"
      :img-src="backgroundImage"
    />

    <PageContentWrapper>
      <slot />
    </PageContentWrapper>
  </div>
</template>
