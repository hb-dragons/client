<script setup lang="ts">
import { useGetTeamBySlugNameQuery, type TeamDetailsTraining, type Trainer } from '~/types/graphql';

const route = useRoute();

const { result, loading } = useGetTeamBySlugNameQuery({
  slug: route.params.slug as string,
});

const teamPhoto = computed(() => result.value?.teamBy?.teamDetails?.teamPhoto?.node.mediaItemUrl);
const teamName = computed(() => result.value?.teamBy?.teamDetails?.teamName);

const trainers = computed(() => result.value?.teamBy?.teamDetails?.trainer?.nodes as Trainer[]);
const training = computed(() => result.value?.teamBy?.teamDetails?.training as TeamDetailsTraining);
</script>

<template>
  <div>
    <ParallaxHeader
      :background-image="teamPhoto || undefined"
      :title="teamName || ''"
      :is-loading="loading"
      :use-default-image="false"
    />
    <PageContentWrapper>
      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 lg:gap-14">
          <SectionContent
            headline="TEAM"
            class="md:col-span-5 lg:col-span-6"
          >
            <div class="h-[60vw] md:h-[40vw]">
              <SkeletonImage
                v-if="teamPhoto || loading"
                img-classes="rounded-lg"
                :src="teamPhoto!"
                :is-loading="loading"
              />
            </div>
          </SectionContent>
          <div class="md:col-span-3 lg:col-span-2 flex flex-col gap-4 md:gap-8 items-between">
            <SectionContent
              headline="LIGA"
            >
              <Skeleton
                v-if="loading"
                width="100%"
                height="2rem"
              />
              <p
                v-else
                class="text-lg lg:text-xl mb-4"
              >
                {{ result?.teamBy?.teamDetails?.leagueName || 'Aktuell kein Ligabetrieb' }}
              </p>
              <Button
                v-if="result?.teamBy?.teamDetails?.leagueId"
                severity="secondary"
                as="a"
                label="External"
                target="_blank"
                rel="noopener"
                :href="`https://www.basketball-bund.net/static/#/liga/${result?.teamBy?.teamDetails?.leagueId}/aktuell`"
              >
                Öffne Liga auf Basketballbund
              </Button>
            </SectionContent>
            <div
              v-if="trainers || loading"
              class="flex-1"
            >
              <SectionContent
                v-if="loading"
                headline="TRAINER"
              >
                <Skeleton
                  width="100%"
                  height="2rem"
                />
              </SectionContent>
              <template v-else>
                <TeamTrainer
                  v-for="trainer in trainers"
                  :key="trainer.id"
                  :trainer="trainer"
                  class="h-full"
                />
              </template>
            </div>
          </div>
        </div>

        <TeamTraining
          v-if="training"
          :training="training"
        />
      </div>
    </PageContentWrapper>
  </div>
</template>
