<script setup lang='ts'>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useGetTeamsForProbetrainingQuery } from '~/types/graphql';

const date = ref();

const beginner = ref(['Ja', 'Nein']);
const selectedBeginner = ref('Ja');
const { result } = useGetTeamsForProbetrainingQuery();

const initialValues = ref({
  beginner: 'Ja',
});

const resolver = ref(zodResolver(
  z.object({
    beginner: z.preprocess(val => (val === null ? '' : val), z.string().min(1, { message: 'Wähle Ja oder Nein aus' })),
    date: z.date().refine(value => value.getFullYear() > 1900, {
      message: 'Bitte wähle ein gültiges Jahr aus!',
    }),
  }),
));

function onFormSubmit(data: { valid: boolean }, activateCallback: (value: number) => void) {
  if (data.valid) {
    activateCallback(3);
  }
};

const fittingTeams = computed(() => {
  if (!result.value?.teams?.nodes) {
    return [];
  }

  const birthYear = date.value?.getFullYear();
  let teams = result.value.teams.nodes;

  if (selectedBeginner.value === 'Ja') {
    teams = teams.filter(team => team.teamDetails?.isBeginnerFriendly === 'true');
  }

  const fittingTeams = [];

  for (const team of teams) {
    if (team?.teamDetails?.minYear && team.teamDetails.maxYear) {
      if (birthYear >= team.teamDetails.minYear && birthYear <= team.teamDetails.maxYear) {
        fittingTeams.push(team);
      }
    }
    if (team?.teamDetails?.minYear && !team.teamDetails.maxYear) {
      if (birthYear <= team.teamDetails.minYear) {
        fittingTeams.push(team);
      }
    }
  }
  return fittingTeams.toSorted((a, b) => a.teamDetails!.ranking! - b.teamDetails!.ranking!);
});

// Calculate the Training based on the year entered
</script>

<template>
  <div>
    <ParallaxHeader
      :use-default-image="true"
      title="Probetraining"
    />
    <section>
      <PageContentWrapper>
        <div class="flex justify-center">
          <Stepper
            value="1"
            class="w-full"
            linear
          >
            <StepList>
              <Step
                v-slot="{ active }"
                value="1"
                as-child
              >
                <div
                  class="flex flex-row flex-auto items-center gap-2"
                  :class="active ? 'text-primary-500' : 'text-surface-500'"
                >
                  <Icon
                    name="ph:info"
                    class="w-7 h-7 flselectedBeginnerex-shrink-0"
                  />
                  <Divider />
                </div>
              </Step>
              <Step
                v-slot="{ active }"
                :value="2"
                as-child
              >
                <div
                  class="flex flex-row flex-auto items-center gap-2 pl-2"
                  :class="active ? 'text-primary-500' : 'text-surface-500'"
                >
                  <Icon
                    name="ph:question-mark"
                    class="w-7 h-7 flex-shrink-0"
                  />
                  <Divider />
                </div>
              </Step>
              <Step
                v-slot="{ active }"
                :value="3"
                as-child
              >
                <div
                  class="flex flex-row pl-2"
                  :class="active ? 'text-primary-500' : 'text-surface-500'"
                >
                  <Icon
                    name="ph:calendar-check"
                    class="w-7 h-7 flex-shrink-0"
                  />
                </div>
              </Step>
            </StepList>
            <StepPanels>
              <StepPanel
                v-slot="{ activateCallback }"
                value="1"
                :pt="{
                  root: 'rounded-lg p-2 md:p-4',
                }"
              >
                <div class="flex flex-col text-center">
                  <p class="text-xl md:text-2xl font-semibold mb-4">
                    Lass uns herausfinden zu welchem Training du am besten passt!
                  </p>
                  <p class="text-base md:text-lg mb-2">
                    Wir werden dir einige Fragen zu deiner Person stellen, um das beste Probetraining für dich zu finden.
                  </p>
                  <p class="text-base md:text-lg font-semibold">
                    Keine deiner Antworten werden von uns verarbeitet oder gespeichert!
                  </p>
                </div>
                <div class="flex pt-6 justify-end">
                  <Button
                    @click="activateCallback(2)"
                  >
                    Los Geht's
                    <Icon
                      name="ph:arrow-right-bold"
                      class="w-5 h-5"
                    />
                  </Button>
                </div>
              </StepPanel>
              <StepPanel
                v-slot="{ activateCallback }"
                :value="2"
                :pt="{
                  root: 'rounded-lg p-4',
                }"
              >
                <Form
                  v-slot="$form"
                  :resolver="resolver"
                  :initial-values="initialValues"
                  @submit="onFormSubmit($event, activateCallback)"
                >
                  <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                    Beantworte bitte die folgenden Fragen:
                  </h2>
                  <div class="w-full md:px-[10%] lg:px-[25%] flex flex-col gap-4">
                    <div class="flex flex-col gap-1 ">
                      <p class="text-base md:text-lg lg:text-xl mb-3">
                        In welchem Jahr wurdest du gebohren?
                      </p>
                      <DatePicker
                        v-model="date"
                        class="w-full md:w-fit"
                        name="date"
                        view="year"
                        date-format="yy"
                      />
                      <Message
                        v-if="$form.date?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.date.error?.message }}
                      </Message>
                    </div>

                    <div class="flex flex-col gap-1">
                      <p class="text-base md:text-lg lg:text-xl  mb-3">
                        Bist du Anfänger?
                      </p>
                      <SelectButton
                        v-model="selectedBeginner"
                        name="beginner"
                        :options="beginner"
                      />
                      <Message
                        v-if="$form.beginner?.invalid"
                        severity="error"
                      >
                        {{ $form.beginner.error?.message }}
                      </Message>
                    </div>

                    <Button
                      type="submit"
                      severity="secondary"
                      label="Weiter zum Ergebnis"
                    />
                  </div>
                </Form>
              </StepPanel>

              <StepPanel
                v-slot="{ activateCallback }"
                :value="3"
                :pt="{
                  root: 'rounded-lg p-2 md:p-4',
                }"
              >
                <div class="flex flex-col ">
                  <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-5 lg:mb-6 xl:mb-7 text-center">
                    Dein Probetraining
                  </p>
                  <div v-if="fittingTeams.length > 0">
                    <p class="mb-4 text-center text-base md:text-lg lg:text-xl xl:text-2xl">
                      Folgendes Teams würdes gut zu dir passen!
                    </p>
                    <div
                      v-for="team in fittingTeams"
                      :key="team.slug!"
                    >
                      <Divider />
                      <div class="relative text-center mb-4">
                        <p class="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-2">
                          {{ team.teamDetails?.teamName }}
                        </p>
                        <LinkButton
                          :to="`/teams/${team.slug}`"
                          :new-tab="true"
                          size="small"
                          class="md:absolute md:top-0 md:right-0"
                        >
                          Zum Team
                          <Icon
                            name="ph:arrow-square-out-bold"
                            class="w-5 h-5"
                          />
                        </LinkButton>
                      </div>
                      <p>
                        <TeamTraining :training="team.teamDetails?.training" />
                      </p>
                    </div>
                    <Divider />
                    <p class="text-lg text-center font-semibold mt-8">
                      Komme einfach bei einem Training vorbei, das dir passt. Wir freuen uns auf dich!
                    </p>
                  </div>
                  <div v-else>
                    <p class="text-center text-xl md:text-2xl font-semibold">
                      Leider haben wir kein passendes Team für dich gefunden.
                    </p>
                    <p class="text-center text-lg mt-4">
                      Bitte schreibe uns eine Mail an kontakanfrage[at]hbdragons[2].de oder stöbere durch unsere <NuxtLink
                        class="text-primary underline"
                        to="/teams"
                      >Teams</NuxtLink>.
                    </p>
                  </div>
                </div>
                <div class="pt-6">
                  <Button
                    severity="secondary"
                    @click="activateCallback(2)"
                  >
                    <Icon
                      name="ph:arrow-left-bold"
                      class="w-5 h-5"
                    />
                    Zurück
                  </Button>
                </div>
              </StepPanel>
            </StepPanels>
          </Stepper>
        </div>
      </PageContentWrapper>
    </section>
  </div>
</template>
