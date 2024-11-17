<template>
    <div class="h-screen">
        <Header />


        <div class="flex w-full max-w-[500px] mx-auto h-screen">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scope>
div {}
</style>