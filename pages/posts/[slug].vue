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
      <UiSkeleton
        v-if="loading"
        class="w-full h-[2rem]"
      />
      <div
        v-else
        class="flex justify-center"
      >
        <div
          class="prose w-full md:prose-lg lg:prose-xl prose-invert"
          v-html="result?.postBy?.content"
        />
      </div>
    </PageContentWrapper>
  </div>
</template>

<style>
</style>
