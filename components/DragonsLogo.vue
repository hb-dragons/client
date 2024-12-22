<script setup lang='ts'>
import { useGetLogoQuery } from '~/types/graphql';

const {result} = useGetLogoQuery()
</script>
<template>
    <NuxtImg v-if="result?.mediaItemBy?.mediaItemUrl" :src="result?.mediaItemBy?.mediaItemUrl"/>
</template>