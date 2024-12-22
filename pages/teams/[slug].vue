<script setup lang="ts">
import { useGetTeamBySlugNameQuery, type TeamDetailsTraining, type Trainer } from '~/types/graphql';

const route = useRoute();

const { result } = useGetTeamBySlugNameQuery({
  slug: route.params.slug as string,
});

const teamPhoto = computed(() => result.value?.teamBy?.teamDetails?.teamPhoto?.node.mediaItemUrl);
const teamName = computed(() => result.value?.teamBy?.teamDetails?.teamName);
const teamLeague = computed(() => result.value?.teamBy?.teamDetails?.leagueName);

const trainers = computed(() => result.value?.teamBy?.teamDetails?.trainer?.nodes as Trainer[]);
const training = computed(() => result.value?.teamBy?.teamDetails?.training as TeamDetailsTraining);
</script>

<template>
  <div>
    <ParallaxHeader
      :background-image="teamPhoto || undefined"
      :title="teamName || ''"
      :subtitle="teamLeague || ''"
    />
    <PageContentWrapper>
      <div class="space-y-8">
        <div class="flex flex-col md:flex-row gap-8 lg:gap-14">
          <SectionContent headline="TEAM">
            <div class="w-full h-full">
              <NuxtImg
                v-if="teamPhoto"
                class="rounded-lg object-contain"
                :src="teamPhoto"
                alt="Team Photo"
              />
            </div>
          </SectionContent>

          <template v-if="trainers">
            <TeamTrainer
              v-for="trainer in trainers"
              :key="trainer.id"
              :trainer="trainer"
            />
          </template>
        </div>

        <TeamTraining :training="training" />
      </div>
    </PageContentWrapper>
  </div>
</template>
