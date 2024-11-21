<template>
    <div class="menu">
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/" class="link">
                        HOME
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/shop" class="link">
                        SHOP
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/aboutus" class="link">
                        ABOUT US
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="link">
                        FAQs
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contacts" class="link">
                        CONTACT US
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.menu {
    display: flex;
    width: 100%;
    max-width: 100%;
    flex: 1 0 0%;
    justify-content: center;

    @media (max-width: 760px) {
        display: none;
    }

    nav {
        tab-size: center;

        ul {
            gap: 20px;
            flex-wrap: wrap;
            display: inline-flex;
            list-style: none;
            justify-content: center;

            li {}
        }
    }
}
</style>