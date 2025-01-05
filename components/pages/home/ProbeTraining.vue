<script setup lang='ts'>

</script>

<template>
  <ParallaxImage
    as="section"
    img-src="/img/banner.webp"
    :parallax-enabled="false"
    :backdrop-opacity="0.5"
  >
    <div class="py-12 md:py-24 text-center">
      <p class="text-4xl md:text-5xl mb-8 font-bold">
        Interesse geweckt?
      </p>

      <OnVisible trigger-classes="motion-preset-shake">
        <LinkButton
          to="/probetraining"
          class="text-base md:text-xl"
        >
          Probetraining vereinbaren
          <Icon
            name="ph:arrow-right"
            class="w-6 h-6 ml-2"
          />
        </LinkButton>
      </OnVisible>
    </div>
  </ParallaxImage>
</template>
