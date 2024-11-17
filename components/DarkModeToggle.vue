<template>
    <ColorScheme placeholder="..." tag="span">
        <button class="w-full h-full" @click="toogleDarkMode">
            <Icon v-if="$colorMode.value === 'light'" class="mb-1" name="line-md:moon-to-sunny-outline-loop-transition"
                size="32" color="#ffffff" />
            <Icon v-else class="mb-1" name="line-md:moon-alt-loop" size="32" color="#ffffff" />
        </button>
    </ColorScheme>
</template>

<script setup>
const colorMode = useColorMode()

const toogleDarkMode = () => {
    if (colorMode.value === 'dark') {
        colorMode.preference = 'light';
    } else if (colorMode.value === 'light') {
        colorMode.preference = 'dark';
    }
    console.log(colorMode);
}

</script>
