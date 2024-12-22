<script setup lang="ts">
import { useGetTeamsQuery, useGetImageBySlugQuery, type Team } from '~/types/graphql';

const { result } = useGetTeamsQuery();
const teams = computed(() => result.value?.teams?.nodes);

const { result: teamsImage } = useGetImageBySlugQuery({ slug: 'teams' });
</script>

<template>
  <div>
    <ParallaxHeader :background-image="teamsImage?.mediaItemBy?.mediaItemUrl || undefined" title="Unsere Teams" />
    <div class="text-xl md:text-3xl text-center py-16 bg-surface-950">
      Wir bieten Mannschaften von der U12 bis zu den Senioren.
    </div>
    <div v-if="teams" class="flex flex-col">
      <div v-for="(team, index) in teams" :key="team.slug!">
        <TeamRow :image-position="index % 2 == 0 ? 'right' : 'left'" :team="team as Team || undefined" />
      </div>
    </div>
  </div>
</template>
