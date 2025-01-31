<script lang="ts" setup>
import type { Position } from '~/types/graphql';

defineProps<{
  headerText: string;
  positions: Position[];
  loading: boolean;
}>();
</script>

<template>
  <div>
    <GrayHeadline class="text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-8 lg:mb-12">
      {{ headerText }}
    </GrayHeadline>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 md:gap-16 lg:gap-24 ">
      <template v-if="loading">
        <div
          v-for="i in 3"
          :key="i"
          class="h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <UiSkeleton
            class="w-full h-full"
          />
        </div>
      </template>
      <template v-else>
        <div
          v-for="position in positions"
          :key="position.databaseId"
          class="h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <PositionsItem
            :position="position"
            :loading="loading"
          />
        </div>
      </template>
    </div>
  </div>
</template>
