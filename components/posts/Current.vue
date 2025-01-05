<script setup lang='ts'>
import { useGetPostsQuery } from '~/types/graphql';

const { result } = useGetPostsQuery({ last: 3 });
</script>

<template>
  <section>
    <h2 class="text-2xl lg:text-3xl xl:text-4xl mb-4 md:mb-6">
      Aktuelle News
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 gap-4 md:gap-6">
      <PostsListItem
        v-for="node in result?.posts?.nodes"
        :key="node?.id"
        class="md:col-span-2 lg:col-span-3"
        :post="node"
      />

      <NuxtLink
        to="/news"
        class="w-full h-full bg-surface-900 cursor-pointer rounded-lg flex md:flex-col justify-center gap-3 items-center py-2 md:hover:scale-[1.02] md:transition"
      >
        <div class="flex flex-row md:flex-col items-center gap-1">
          <span>Weitere</span>
          <span>News</span>
        </div>
        <Icon
          name="ph:arrow-right"
          class="w-6 h-6 lg:w-8 lg:h-8"
        />
      </NuxtLink>
    </div>
  </section>
</template>
