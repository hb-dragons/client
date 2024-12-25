<script setup lang="ts">
import { useGetImageBySlugQuery, type Team } from '~/types/graphql';

const NuxtLink = resolveComponent('nuxt-link');

const props = defineProps<{ team?: Team; imagePosition: 'left' | 'right' }>();
const teamImage = computed(() => props.team?.teamDetails?.teamPhoto?.node.sourceUrl);
const { result } = useGetImageBySlugQuery({ slug: 'dragons_kreis' });
const backgroundImage = computed(() => result.value?.mediaItemBy?.mediaItemUrl || undefined);
</script>

<template>
  <div
    class="flex flex-col-reverse md:flex-row bg-surface-950"
    :class="{ 'md:flex-row-reverse': props.imagePosition === 'right' }"
  >
    <div class="w-full relative md:w-1/2">
      <div class="absolute w-full h-full select-none z-0">
        <div class="absolute inset-0 bg-surface-950/70 z-10" />
        <NuxtImg
          v-if="backgroundImage"
          class="w-full h-full object-cover object-center grayscale"
          :src="backgroundImage"
          alt="Team Background Image"
        />
      </div>
      <div
        class="w-full h-full z-20 flex flex-col justify-center p-6 md:p-20 items-center"
        :class="{ 'md:items-end': props.imagePosition === 'left', 'md:items-start': props.imagePosition === 'right' }"
      >
        <p class="z-10 text-4xl md:text-7xl text-primary-500 font-bold mb-2">
          {{ team?.teamDetails?.teamName }}
        </p>
        <p class="z-10 text-xl md:text-3xl font-bold mb-4 md:mb-8">
          {{ team?.teamDetails?.leagueName }}
        </p>
        <div class="hidden md:block">
          <Button
            :as="NuxtLink"
            :to="`/teams/${team?.slug}`"
            size="large"
            severity="secondary"
            raised
          >
            Mehr Infos
          </Button>
        </div>

        <div class="block md:hidden">
          <Button
            :as="NuxtLink"
            :to="`/teams/${team?.slug}`"
            size="small"
            severity="secondary"
            raised
          >
            Mehr Infos
          </Button>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 h-[200px] md:h-[500px]">
      <NuxtImg
        v-if="teamImage"
        class="w-full h-full object-cover object-center"
        :src="teamImage"
        alt="Team Image"
      />
    </div>
  </div>
</template>
