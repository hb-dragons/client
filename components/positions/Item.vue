<script setup lang='ts'>
import type { Position, Volunteer } from '~/types/graphql';

const { position } = defineProps<{
  position: Position;
  loading: boolean;
}>();

const volunteer = computed(() => position?.positionDetails?.volunteer?.node as Volunteer | undefined);

const email = computed(() => position?.positionDetails?.email || volunteer.value?.volunteerDetails?.email || '');
</script>

<template>
  <div class="rounded-lg overflow-hidden relative group h-full z-10">
    <Skeleton
      v-if="loading"
      width="100%"
      height="100%"
    />
    <template v-else>
      <div class="absolute top-0 w-full h-full -z-10">
        <ImageWithDefault
          :img-src="volunteer?.volunteerDetails?.profileImage?.node?.mediaItemUrl || undefined"
          default-image="/img/logo.svg"
          :is-loading="loading"
          :img-classes="`md:group-hover:scale-[1.02] md:transition ${volunteer?.volunteerDetails?.profileImage?.node.mediaItemUrl ? '!object-cover' : '!object-contain'}`"
        />
      </div>

      <div class="flex flex-col justify-between items-start h-full">
        <div class="w-full mt-4 flex justify-center items-center">
          <div class="flex flex-col w-fit px-8 md:px-8 lg:px-12 py-1 md:py-3 lg:py-4 text-center bg-surface-800 rounded-lg">
            <div class="text-lg md:text-xl lg:text-2xl w-full mb-1 md:mb-2">
              {{ position?.positionDetails?.name }}
            </div>
            <div class="text-lg md:text-xl lg:text-2xl w-full font-bold">
              {{ volunteer?.volunteerDetails?.name }}
            </div>
          </div>
        </div>

        <div class="bg-surface-800 w-fit text-right p-2 rounded-r-md">
          <div class="text-base md:text-lg lg:text-xl">
            {{ sanitizeEmail(email) }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
