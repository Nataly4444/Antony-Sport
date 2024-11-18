<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>

      <div class="wrapper">
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

<style lang="scss" scope>
.wrapper {
  position: fixed;
  width: calc(100% + 1px);
  height: 100%;
}

</style>