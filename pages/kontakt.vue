<script setup lang="ts">
import { useGetImageBySlugQuery, useGetPositionsQuery, useGetVorstandQuery, type Position } from '~/types/graphql';

const { result: vorstand, loading: vorstandLoading } = useGetVorstandQuery();
const { result, loading } = useGetPositionsQuery();
const { result: image } = useGetImageBySlugQuery({ slug: 'orga' });

const vorstandPositions = computed(() => {
  if (!vorstand.value?.vorstands?.nodes) {
    return [];
  }
  return vorstand.value.vorstands?.nodes?.toSorted((a, b) => {
    if (a.positionDetails?.sortPriority && b.positionDetails?.sortPriority) {
      return a.positionDetails.sortPriority - b.positionDetails.sortPriority;
    }
    return 0;
  }) as Position[];
});

const positions = computed(() => {
  if (!result.value?.positions?.nodes) {
    return [];
  }
  return result.value.positions?.nodes?.toSorted((a, b) => {
    if (a.positionDetails?.sortPriority && b.positionDetails?.sortPriority) {
      return a.positionDetails.sortPriority - b.positionDetails.sortPriority;
    }
    return 0;
  }) as Position[];
});
</script>

<template>
  <ParallaxPage
    title="Kontakt"
    :background-image="image?.mediaItemBy?.mediaItemUrl || undefined"
  >
    {{ positions }}
    {{ vorstandPositions }}
    <!-- <PositionsList
      :positions="vorstandPositions"
      header-text="Unser Vorstand"
      :loading="vorstandLoading"
      class="mb-12 md:mb-16 xl:mb-24"
    />

    <PositionsList
      :positions="poistions"
      header-text="Ehrenamtliche"
      :loading="loading"
    /> -->
  </ParallaxPage>
</template>
