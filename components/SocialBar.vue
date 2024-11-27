<template>
    <div class="social">
        <NuxtLink to="https://api.whatsapp.com/send?phone=79774248180" class="link" target="_blank">
            <Icon name="hugeicons:whatsapp" size="30" color="var(--color-text)" />
        </NuxtLink>
        <NuxtLink to="https://tlgg.ru/@ToniKuchin" class="link" target="_blank">
            <Icon name="hugeicons:telegram" size="30" color="var(--color-text)" />
        </NuxtLink>
        <NuxtLink to="http://vk.com/a.kuchin91" class="link" target="_blank">
            <Icon name="hugeicons:vk-square" size="30" color="var(--color-text)" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/proteinman99/profilecard/?igsh=MWFiYmM2MWkzNXdkdA==" class="link"
            target="_blank">
            <Icon name="hugeicons:instagram" size="30" color="var(--color-text)" />
        </NuxtLink>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.social {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 1px;
    top: 50%;
    background-color: var(--color-background);
    color: var(--color-text);
    height: auto;
    width: 40px;
    border-radius: 20px;
    padding: 10px 4px;
    box-shadow: 0px 0px 20px var(--color-text);
    z-index: 50;
}

.link {
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    cursor: pointer !important;

    &:hover {
        transition: transform 0.3s ease;
        transform: scale(1.25);
    }
}
</style>