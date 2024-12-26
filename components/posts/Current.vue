<script setup lang='ts'>
import { useGetPostsQuery } from '~/types/graphql';

const { result } = useGetPostsQuery({ last: 3 });
</script>

<template>
  <PageContentWrapper class="bg-surface-950">
    <h2 class="text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6">
      Aktuelle News
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <PostsListItem
        v-for="node in result?.posts?.nodes"
        :key="node?.id"
        :post="node"
      />
    </div>
  </PageContentWrapper>
</template>
