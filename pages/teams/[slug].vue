<script setup lang="ts">
import { useGetImageBySlugQuery, useGetTeamBySlugNameQuery, type TeamDetailsTrainingFriday, type TeamDetailsTrainingMonday, type TeamDetailsTrainingThursday, type TeamDetailsTrainingTuesday, type TeamDetailsTrainingWednesday } from '~/types/graphql';

const route = useRoute();

const { result } = useGetTeamBySlugNameQuery({
  slug: route.params.slug as string,
});

const { result: trainerPhoto } = useGetImageBySlugQuery({
  slug: 'kianusch',
});

const teamPhoto = computed(() => result.value?.teamBy?.teamDetails?.teamPhoto?.node.mediaItemUrl);
const teamName = computed(() => result.value?.teamBy?.teamDetails?.teamName);
const teamLeague = computed(() => result.value?.teamBy?.teamDetails?.leagueName);

type TrainingDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
const TrainingDisplayMap = {
  monday: 'Montags',
  tuesday: 'Dienstags',
  wednesday: 'Mittwochs',
  thursday: 'Donnerstags',
  friday: 'Freitags',
};

type TrainingType = TeamDetailsTrainingMonday | TeamDetailsTrainingTuesday | TeamDetailsTrainingWednesday | TeamDetailsTrainingThursday | TeamDetailsTrainingFriday;

const trainingMap = computed(() => {
  const training = result.value?.teamBy?.teamDetails?.training;
  if (!training) return undefined;
  const days: TrainingDays[] = Object.keys(training).filter(day => day !== '__typename') as TrainingDays[];
  const trainingResult: Record<string, TrainingType> = {};
  for (const day of days) {
    if (training[day]?.gym === null) continue;
    trainingResult[day] = training[day] as TrainingType;
  }
  return trainingResult;
});
</script>

<template>
  <div>
    <ParallaxHeader
      :background-image="teamPhoto || undefined"
      :title="teamName || ''"
      :subtitle="teamLeague || ''"
    />
    <PageContentWrapper>
      <section class="flex flex-col md:flex-row gap-10">
        <!-- TEAM Section -->
        <div class="flex flex-col flex-1">
          <GrayHeadline
            is="h2"
            class="text-3xl font-semibold mb-5"
          >
            TEAM
          </GrayHeadline>
          <div class="flex flex-1 h-full">
            <NuxtImg
              v-if="teamPhoto"
              class="rounded-lg  object-contain h-[400px]"
              :src="teamPhoto"
              alt="Team Photo"
            />
          </div>
        </div>

        <!-- TRAINER Section -->
        <div class="flex flex-col flex-1">
          <GrayHeadline
            is="h2"
            class="text-3xl mb-5 font-semibold"
          >
            TRAINER
          </GrayHeadline>
          <div class="flex flex-1 h-full">
            <NuxtImg
              v-if="trainerPhoto?.mediaItemBy?.mediaItemUrl"
              class="rounded-lg h-[400px] object-contain"
              :src="trainerPhoto?.mediaItemBy?.mediaItemUrl"
              alt="Trainer Photo"
            />
            <div class="mt-4">
              <p class="font-semibold text-xl">
                Kianusch Pour-Rahimi
              </p>
              <p>
                herren2[at]hbdragons.de
              </p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="trainingMap">
        <GrayHeadline
          is="h2"
          class="text-xl font-semibold"
        >
          TRAININGSZEITEN
        </GrayHeadline>
        <div
          v-for="[day, training] in Object.entries(trainingMap)"
          :key="day"
        >
          <div>{{ TrainingDisplayMap[day as TrainingDays] }}</div>
          <div>{{ training.gym?.node.gymFields.name }}</div>
          <div>{{ training.gym?.node.gymFields.address }}</div>
          <div>{{ training.startTime }}</div>
          <div>{{ training.endTime }}</div>
        </div>
      </section>
    </PageContentWrapper>
  </div>
</template>
