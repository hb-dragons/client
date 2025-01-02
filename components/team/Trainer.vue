<script setup lang='ts'>
import type { Trainer } from '~/types/graphql';

defineProps<{
  trainer: Trainer;
  isMultiple?: boolean;
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
            {{ trainer.trainerDetails?.name }}
          </p>
          <p class="text-sm md:text-base lg:text-lg">
            {{ trainer.trainerDetails?.email }}
          </p>
        </div>
        <div
          v-if="trainer.trainerDetails?.image?.node.mediaItemUrl"
          class="h-[300px] md:h-[200px] w-full self-center md:w-full"
          :class="{ 'w-1/2 h-[300px] md:h-[500px]': !isMultiple }"
        >
          <SkeletonImage
            v-if="trainer.trainerDetails?.image?.node.mediaItemUrl"
            img-classes="rounded-md md:rounded-lg  object-contain"
            :img-src="trainer.trainerDetails?.image?.node.mediaItemUrl"
          />
        </div>
      </div>
    </div>
  </SectionContent>
</template>
