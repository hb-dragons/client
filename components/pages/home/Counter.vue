<script setup lang='ts'>

</script>

<template>
  <div class="grid grid-cols-3 items-center justify-center text-center font-mono md:py-24 text-8xl">
    <div>
      <div class="relative w-fit mx-auto mb-3">
        <DragonsCountUp
          :end-val="100"
          :duration="3"
        />
        <div class="absolute -right-8 top-0 text-5xl">
          +
        </div>
      </div>
      <div class="text-2xl font-sans">
        Mitglieder
      </div>
    </div>

    <div>
      <div class="relative w-fit mx-auto mb-3">
        <DragonsCountUp
          :end-val="6"
          :duration="3"
        />
      </div>
      <div class="text-2xl font-sans">
        Mannschaften
      </div>
    </div>

    <div>
      <div class="relative w-fit mx-auto flex items-baseline mb-3">
        <DragonsCountUp
          :end-val="200"
          :duration="3"
        />
        <span class="text-7xl">%</span>
      </div>
      <div class="text-2xl font-sans">
        Basketball
      </div>
    </div>
  </div>
</template>
