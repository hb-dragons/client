<script setup lang='ts'>
const error = useError();
</script>

<template>
  <NuxtLayout>
    <div
      v-if="error"
      class="flex-1"
    >
      <template v-if="error.statusCode === 404">
        <NotFound />
      </template>
      <template v-else>
        <h1>Dang</h1>
        <p>
          <strong>{{ error }}</strong>
        </p>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </template>
    </div>
  </NuxtLayout>
</template>
