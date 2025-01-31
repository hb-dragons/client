<script setup lang='ts'>
import { useGetPostsQuery } from '~/types/graphql';

const { result, loading } = useGetPostsQuery();
</script>

<template>
  <div>
    <ParallaxHeader
      title="News"
      :use-default-image="true"
    />
    <PageContentWrapper>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="loading">
          <UiSkeleton
            v-for="i in 4"
            :key="i"
            class="w-[300px] h-[200px]"
          />
        </template>
        <template v-else>
          <PostsListItem
            v-for="post in result?.posts?.nodes"
            :key="post?.id"
            :post="post"
          />
        </template>
      </div>
    </PageContentWrapper>
  </div>
</template>
