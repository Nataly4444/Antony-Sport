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
  margin-left: 250px;
  /* Создаем отступ слева для контента */
  transition: margin-left 0.3s ease;
}

/* Когда sidebar открыт, изменяем отступ для контента */
.sidebar--open~.wrapper {
  margin-left: 0;
}
</style>