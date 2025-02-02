<script setup lang="ts">
import { Icon } from '#components';
import { useGetTeamBySlugNameQuery, type TeamDetailsTraining, type Trainer } from '~/types/graphql';

const route = useRoute();

const { result, loading } = useGetTeamBySlugNameQuery({
  slug: route.params.slug as string,
});

const teamPhoto = computed(() => result.value?.teamBy?.teamDetails?.teamPhoto?.node.mediaItemUrl);
const teamName = computed(() => result.value?.teamBy?.teamDetails?.teamName);

const trainers = computed(() => result.value?.teamBy?.teamDetails?.trainer?.nodes as Trainer[]);
const training = computed(() => result.value?.teamBy?.teamDetails?.training as TeamDetailsTraining);

const multipleTrainers = computed(() => trainers.value?.length > 1);
</script>

<template>
  <div>
    <ParallaxHeader
      :img-src="teamPhoto || undefined"
      :title="teamName || ''"
      :is-loading="loading"
      :use-default-image="false"
    />
    <PageContentWrapper>
      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 lg:gap-14">
          <SectionContent
            headline="TEAM"
            class=""
            :class="{ 'md:col-span-4 lg:col-span-5': multipleTrainers, 'md:col-span-5 lg:col-span-6': !multipleTrainers }"
          >
            <div class="h-[60vw] md:h-[40vw]">
              <SkeletonImage
                v-if="teamPhoto || loading"
                img-classes="rounded-lg"
                :img-src="teamPhoto!"
                :is-loading="loading"
              />
            </div>
          </SectionContent>
          <div
            class="flex flex-col gap-4 md:gap-8 items-between"
            :class="{ 'md:col-span-4 lg:col-span-3': multipleTrainers, 'md:col-span-3 lg:col-span-2': !multipleTrainers }"
          >
            <SectionContent
              headline="LIGA"
            >
              <UiSkeleton
                v-if="loading"
                class="w-full h-[2rem]"
              />
              <p
                v-else
                class="text-lg lg:text-xl mb-4"
              >
                {{ result?.teamBy?.teamDetails?.leagueName || 'Aktuell kein Ligabetrieb' }}
              </p>
              <LinkButton
                v-if="result?.teamBy?.teamDetails?.leagueId"
                :new-tab="true"
                rel="noopener"
                variant="surface"
                :to="`https://www.basketball-bund.net/static/#/liga/${result?.teamBy?.teamDetails?.leagueId}/aktuell`"
                class="block md:hidden"
                size="small"
              >
                <div class="flex items-center">
                  <Icon
                    class="w-5 h-5 mr-2"
                    name="ph:arrow-square-out"
                  />
                  <span>Öffne Liga auf Basketballbund</span>
                </div>
              </LinkButton>
              <LinkButton
                v-if="result?.teamBy?.teamDetails?.leagueId"
                :new-tab="true"
                rel="noopener"
                variant="surface"
                :to="`https://www.basketball-bund.net/static/#/liga/${result?.teamBy?.teamDetails?.leagueId}/aktuell`"
                class="hidden md:block"
              >
                <div class="flex items-center">
                  <Icon
                    class="w-6 h-6 mr-2"
                    name="ph:arrow-square-out"
                  />
                  <span>Öffne Liga auf Basketballbund</span>
                </div>
              </LinkButton>
            </SectionContent>
            <div
              v-if="trainers || loading"
              class="flex-1"
            >
              <SectionContent
                v-if="loading"
                headline="TRAINER"
              >
                <UiSkeleton
                  class="w-full h-[2rem]"
                />
              </SectionContent>
              <template v-else>
                <div class="flex gap-8">
                  <TeamTrainer
                    v-for="trainer in trainers"
                    :key="trainer.id"
                    :trainer="trainer"
                    :is-mul="trainers.length > 1"
                  />
                </div>
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
