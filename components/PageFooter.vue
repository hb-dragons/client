<script setup lang="ts"></script>

<template>
  <footer class="bg-black px-6 py-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
    <div class="flex gap-6 col-span-2 md:col-span-1">
      <img
        src="/img/logo.svg"
        alt="HB Dragons Logo"
        class="w-32 lg:w-40 h-32 lg:h-40"
      >
      <div class="flex flex-col items-start justify-between">
        <div>
          <p class="text-base md:text-lg font-semibold mb-1 lg:mb-4">
            Hanover Basketball Dragons e.V.
          </p>
          <p class="text-sm md:text-base">
            Zum Buchengarten 3
          </p>
          <p class="text-sm md:text-base">
            30453 Hannover
          </p>
        </div>
        <SafeMail
          title="Click to send us an email"
          class="text-sm md:text-base"
          email="info[at]hbdragons2.de"
        />
      </div>
    </div>
    <div class="flex flex-col text-sm md:text-lg items-center text-center md:text-left">
      <div class="w-full md:w-auto">
        <GrayHeadline class="mb-4">
          KONTAKTIERE UNS
        </GrayHeadline>
        <p class="w-full">
          <NuxtLink to="/datenschutz">Datenschutzerklärung</NuxtLink>
        </p>
        <p class="w-full">
          <NuxtLink to="/kontakt">Kontakt</NuxtLink>
        </p>
        <p class="w-full">
          <NuxtLink to="/impressum">Impressum</NuxtLink>
        </p>
      </div>
    </div>

    <div class="flex flex-col text-sm md:text-lg items-center text-center md:text-left">
      <div class="w-full md:w-auto">
        <GrayHeadline class="mb-4">
          FOLGE UNS
        </GrayHeadline>
        <p class="w-full">
          <NuxtLink to="/datenschutz">Instagram</NuxtLink>
        </p>
        <p class="w-full">
          <NuxtLink to="/kontakt">Facebook</NuxtLink>
        </p>
        <p class="w-full">
          <NuxtLink to="/impressum">Impressum</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
