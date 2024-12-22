<script setup lang='ts'>
import type { Gym, TeamDetailsTraining, TeamDetailsTrainingFriday, TeamDetailsTrainingMonday, TeamDetailsTrainingThursday, TeamDetailsTrainingTuesday, TeamDetailsTrainingWednesday } from '~/types/graphql';

type TrainingDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
const TrainingDisplayMap = {
  monday: 'Montags',
  tuesday: 'Dienstags',
  wednesday: 'Mittwochs',
  thursday: 'Donnerstags',
  friday: 'Freitags',
};

type TrainingType = TeamDetailsTrainingMonday | TeamDetailsTrainingTuesday | TeamDetailsTrainingWednesday | TeamDetailsTrainingThursday | TeamDetailsTrainingFriday;

const { training } = defineProps<{
  training?: TeamDetailsTraining;
}>();

const trainingMap = computed(() => {
  if (!training) return undefined;
  const days: TrainingDays[] = Object.keys(training).filter(day => day !== '__typename') as TrainingDays[];
  const trainingResult: Record<string, TrainingType> = {};
  for (const day of days) {
    if (training[day]?.gym === null) continue;
    trainingResult[day] = training[day] as TrainingType;
  }
  return trainingResult;
});

function handleClick(gym: Gym) {
  window.open(`https://www.google.com/maps/?f=d&daddr=${gym.gymFields?.address}`, '_blank');
}
</script>

<template>
  <SectionContent headline="TRAININGSZEITEN">
    <div
      v-if="trainingMap"
      class="flex flex-col lg:flex-row gap-4 md:gap-12"
    >
      <div
        v-for="[day, trainingInfo] in Object.entries(trainingMap)"
        :key="day"
      >
        <p class="font-bold text-base md:text-lg lg:text-xl text-surface-200">
          {{ TrainingDisplayMap[day as TrainingDays] }}
        </p>
        <p class="text-sm md:text-base lg:text-lg mb-2">
          {{ trainingInfo.startTime }} - {{ trainingInfo.endTime }}
        </p>
        <p class="text-sm md:text-base lg:text-lg font-semibold">
          {{ trainingInfo.gym?.node.gymFields.name }}
        </p>
        <p class="text-sm md:text-base lg:text-lg mb-2">
          {{ trainingInfo.gym?.node.gymFields.address }}
        </p>
        <Button
          size="small"
          severity="secondary"
          class="w-full"
          @click="handleClick(trainingInfo.gym?.node as Gym)"
        >
          Open in Google Maps
        </Button>
      </div>
    </div>
    <div v-else>
      <div>Aktuell keine Trainingszeiten</div>
    </div>
  </SectionContent>
</template>
