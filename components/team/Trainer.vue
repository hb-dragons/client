<script setup lang='ts'>
import type { Trainer } from '~/types/graphql';

const trainer = defineProps<{
  trainer: Trainer;
}>();
</script>

<template>
  <SectionContent headline="TRAINER">
    <div class="flex flex-col w-full">
      <div class="flex flex-row md:flex-col lg:flex-row flex-1 gap-4 h-full">
        <div class="w-full lg:w-2/4">
          <NuxtImg
            v-if="trainer.trainer.trainerDetails?.image?.node.mediaItemUrl"
            class="rounded-md md:rounded-lg  object-contain"
            :src="trainer.trainer.trainerDetails?.image?.node.mediaItemUrl"
            alt="Trainer Photo"
          />
        </div>
        <div class="flex-shrink-0 md:flex-shrink">
          <p class="font-semibold text-base md:text-xl lg:text-2xl">
            {{ trainer.trainer.trainerDetails?.name }}
          </p>
          <p class="text-sm md:text-base lg:text-lg">
            {{ trainer.trainer.trainerDetails?.email }}
          </p>
        </div>
      </div>
    </div>
  </SectionContent>
</template>
