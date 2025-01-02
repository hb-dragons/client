<script setup lang='ts'>
import { useGetPostBySlugQuery } from '~/types/graphql';

const route = useRoute();

const { result, loading } = useGetPostBySlugQuery(
  { slug: route.params.slug as string },
);
</script>

<template>
  <div>
    <ParallaxHeader
      :img-src="result?.postBy?.featuredImage?.node.mediaItemUrl || undefined"
      :title="result?.postBy?.title || ''"
      :use-default-image="true"
      :is-loading="loading"
    />
    <PageContentWrapper>
      <Skeleton
        v-if="loading"
        width="100%"
        height="2rem"
      />
      <div
        v-else
        class="space-y-2"
        v-html="result?.postBy?.content"
      />
    </PageContentWrapper>
  </div>
</template>

<style>
.wp-block-list {
  list-style: square !important;
  padding-left: 1rem !important ;
}

.wp-block-quote {
  border-left: 4px solid #333;
  padding-left: 1rem;
  margin-left: 0;
}
</style>
