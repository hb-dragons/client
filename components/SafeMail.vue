<script setup lang="ts">
const { email } = defineProps<{
  title: string;
  email: string;
}>();

const reversedMail = computed(() => email.split('').reverse().join(''));

function mailClicked(e: any) {
  e.preventDefault();
  e.target.href = `mailto:${email}`;
  e.target.click();
}
</script>
<template>
  <a class="safe-mail" :href="`mailto:${reversedMail}`" :title="title" @click="mailClicked">{{ reversedMail }}</a>
</template>

<style>
.safe-mail {
  direction: rtl;
  unicode-bidi: bidi-override;
}
</style>
