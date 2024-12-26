<script setup lang='ts'>
import type { Trainer } from '~/types/graphql';

const trainer = defineProps<{
  trainer: Trainer;
}>();
</script>

<template>
  <SectionContent
    headline="TRAINER"
  >
    <div class="flex w-full">
      <div class="flex flex-col gap-4 w-full">
        <div class="flex-shrink-0 md:flex-shrink">
          <p class="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
            {{ trainer.trainer.trainerDetails?.name }}
          </p>
          <p class="text-sm md:text-base lg:text-lg">
            {{ trainer.trainer.trainerDetails?.email }}
          </p>
        </div>
        <div
          v-if="trainer.trainer.trainerDetails?.image?.node.mediaItemUrl"
          class="h-[80vw] md:h-[50vh] w-1/2 self-center md:w-full"
        >
          <SkeletonImage
            v-if="trainer.trainer.trainerDetails?.image?.node.mediaItemUrl"
            img-classes="rounded-md md:rounded-lg  object-contain"
            :src="trainer.trainer.trainerDetails?.image?.node.mediaItemUrl"
          />
        </div>
      </div>
    </div>
  </SectionContent>
</template>
