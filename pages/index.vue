<script setup lang="ts">
import { useGetImageBySlugQuery } from '~/types/graphql';

const { result, loading } = useGetImageBySlugQuery({
  slug: 'gesamt',
});
</script>

<template>
  <div>
    <LandingVideoBackground>
      <div class="flex flex-col h-full justify-center items-center gap-8 text-center">
        <DragonsLogo class="w-48 lg:w-96 motion-preset-pop" />
        <h1 class="text-5xl lg:text-8xl text-white font-bold motion-preset-blur-right">
          HB Dragons
        </h1>
      </div>
    </LandingVideoBackground>

    <div class="py-8 lg:py-24 text-center">
      <p class="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
        Basketball in Hannover
      </p>
      <p class="text-2xl lg:text-3xl xl:text-4xl font-semibold">
        #dragonstakeover
      </p>
    </div>
    <ParallaxImage
      :img-src="result?.mediaItemBy?.mediaItemUrl || undefined"
      :is-loading="loading"
      :parallax-enabled="false"
      :backdrop-opacity="0.5"
      class="h-[250px] lg:h-[500px]"
    >
      <div class="py-8 text-center px-2">
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
          class="flex items-center"
        >
          <span>Zu unseren Teams</span>
          <Icon
            name="ph:arrow-right-bold"
          />
        </LinkButton>
      </div>
    </ParallaxImage>

    <div class="h-screen" />
  </div>
</template>
