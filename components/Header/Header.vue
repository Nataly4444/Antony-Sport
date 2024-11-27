<template>
    <header class="header">
        <div class="header__container">
            <div class="header__container__height">
                <MenuMobile class="header__sidebar" />
                <Logo />
                <Menu />


                <div class="header__container__height__iconGroup">
                    <!-- <button @click="navigateTo('/')" class="w-full h-full">
                        <Icon name"mdi-light:magnify" size="35" color="#ffffff" />
                    </button>
                    <button @click="navigateTo('/')" class="w-full h-full">
                        <Icon name="mdi-light:account" size="35" color="#ffffff" />
                    </button>
                    <button class="w-full h-full">
                        <Icon class="mb-1" name="mdi-light:heart" size="32" color="#ffffff" />
                    </button> -->
                    <DarkModeToggle />

                    <!-- <button class="w-full h-full">
                        <Icon class="mb-1" name="material-symbols-light:sunny-outline" size="32" color="#ffffff" />
                    </button> -->


                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scope>
.header {
    background-color: var(--color-background);
    color: var(--color-text);

    &__sidebar {
        display: none;

        @media (max-width: 760px) {
            display: flex;
        }
    }

    &__container {
        padding: 0 10px;
        margin: 0 auto;

        &__height {
            display: flex;
            flex-wrap: wrap;
            min-height: 60px;
            align-items: center;
            justify-content: center;

            @media (max-width: 760px) {
                justify-content: space-between;
            }

            &__menuMobile {
                display: none;

                @media (max-width: 760px) {
                    display: block;
                }
            }

            &__menu {
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

            &__iconGroup {
                flex: 0 0 auto;
                width: auto;
                text-align: end;
                display: flex;

                button {

                    span {
                        color: var(--color-text);
                    }
                }
            }
        }
    }
}
</style>