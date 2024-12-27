<script setup lang='ts'>
import { useGetPostsQuery } from '~/types/graphql';

const { result } = useGetPostsQuery();
</script>

<template>
  <div>
    <ParallaxHeader
      title="News"
      :use-default-image="true"
    />
    <PageContentWrapper>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PostsListItem
          v-for="post in result?.posts?.nodes"
          :key="post?.id"
          :post="post"
        />
      </div>
    </PageContentWrapper>
  </div>
</template>
