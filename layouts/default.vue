<template>
    <div class="h-screen">
        <Header />


        <div class="flex w-full max-w-[500px] mx-auto h-screen">
            <slot />
        </div>

        <footer>

        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scope>
footer {
    position: fixed;
    bottom: 0;
    display: flex;
    border-top: 1px solid black;
    height: 70px;
    width: 100%;
    z-index: 50;
    background-color: white;
    color: black;


    @media (prefers-color-scheme: dark) {
        background-color: black;
        color: white;
    }
}
</style>