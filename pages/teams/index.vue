<script setup lang="ts">
import { useGetTeamsQuery, useGetImageBySlugQuery, type Team } from '~/types/graphql';

const { result, loading } = useGetTeamsQuery();
const teams = computed(() => result.value?.teams?.nodes);

const { result: teamsImage } = useGetImageBySlugQuery({ slug: 'teams' });

const sortedTeams = computed(() => {
  if (!teams.value) return [];
  const arr = [...teams.value];
  return arr.sort((a, b) => {
    if (a?.teamDetails?.ranking && b?.teamDetails?.ranking) {
      return a.teamDetails.ranking - b.teamDetails.ranking;
    }
    return 0;
  });
});
</script>

<template>
  <div>
    <ParallaxHeader
      :img-src="teamsImage?.mediaItemBy?.mediaItemUrl || undefined"
      title="Unsere Teams"
      :is-loading="loading"
    />
    <div class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center px-2 py-8 lg:py-16 bg-surface-950">
      Wir bieten Mannschaften von der U12 bis zu den Senioren.
    </div>
    <div
      v-if="loading"
      class="p-4"
    >
      <UiSkeleton
        class="w-full h-[200px]"
      />
    </div>
    <div
      v-if="teams"
      class="flex flex-col"
    >
      <div
        v-for="(team, index) in sortedTeams"
        :key="team.slug!"
      >
        <TeamRow
          :image-position="index % 2 == 0 ? 'right' : 'left'"
          :team="team as Team || undefined"
        />
      </div>
    </div>
  </div>
</template>
