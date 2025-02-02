<script setup lang='ts'>
import type { Post } from '~/types/graphql';

defineProps<{ post: Post }>();
</script>

<template>
  <NuxtLink
    :key="post.id"
    as="div"
    :to="`/posts/${post.slug}`"
    class="relative shadow-lg h-[200px] xl:h-[300px] rounded-lg overflow-hidden md:hover:scale-[1.02] md:transition cursor-pointer"
  >
    <BackgroundImage
      :img-src="post.featuredImage?.node.mediaItemUrl"
    />
    <div class="h-full relative z-20 flex justify-start items-end">
      <div class="bg-surface-900/95  w-full py-1.5 px-3">
        <div class="text-lg lg:text-2xl mb-1 md:mb-2">
          {{ post.title }}
        </div>
        <div class="flex justify-between items-center">
          <time
            :datetime="$dayjs(post.date).utc().toString()"
            class="text-sm lg:text-base text-surface-300"
          >{{ $dayjs(post.date).format('DD.MM.YYYY') }}</time>
          <div
            v-for="category in getCategories(post)"
            :key="category.name!"
          >
            <UiTag
              :value="category.name"
              class="text-sm"
            />
          </div>
        </div>
      </div>

    </div>
  </NuxtLink>
</template>
