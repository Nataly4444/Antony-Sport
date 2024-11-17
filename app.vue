<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>

      <div class="fixed w-[calc(100%+1px)] h-full">
        <NuxtPage />
      </div>

    </NuxtLayout>

  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',

})
</script>
