<template>
    <div class="layout">
        <Header />
        <SocialBar/>

        <div class="slotContainer">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scope>
.layout {
    position: relative;
    height: 100vh;
}

.slotContainer{
    display: flex;
    width: 100%;
    height: 100vh;

}
</style>