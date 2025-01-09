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
        class="flex justify-center"
      >
        <div
          class="prose w-full md:prose-xl lg:prose-2xl prose-invert"
          v-html="result?.postBy?.content"
        />
      </div>
    </PageContentWrapper>
  </div>
</template>

<style>
</style>
