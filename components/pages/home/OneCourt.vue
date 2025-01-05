<script setup lang='ts'>
import { useGetImageBySlugQuery } from '~/types/graphql';

const { result, loading } = useGetImageBySlugQuery({
  slug: 'kreis',
});
</script>

<template>
  <ParallaxImage
    :img-src="result?.mediaItemBy?.mediaItemUrl || undefined"
    :is-loading="loading"
    :parallax-enabled="false"
    :backdrop-opacity="0.5"
    class="h-[250px] lg:h-[700px]"
  >
    <div class="py-8 text-center px-2 flex flex-col items-center">
      <OnVisible
        :trigger-once="true"
        trigger-classes="motion-preset-blur-right"
      >
        <p class="text-xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8">
          Bei uns sind alle willkommen, ganz nach dem Motto:
        </p>
      </OnVisible>
      <OnVisible
        :trigger-once="true"
        trigger-classes="motion-preset-compress"
      >
        <p
          class="text-2xl lg:text-6xl xl:text-7xl font-bold mb-12"
        >
          "One Court, Many Cultures!"
        </p>
      </OnVisible>
      <LinkButton
        to="/teams"
        size="large"
        raised
        class="flex items-center w-fit"
      >
        <span>Zu unseren Teams</span>
        <Icon
          name="ph:arrow-right-bold"
        />
      </LinkButton>
    </div>
  </ParallaxImage>
</template>
