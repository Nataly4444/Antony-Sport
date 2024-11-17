<template>
    <header class="header">
        <div class="header__container">
            <div class="header__container__height">
                <button @click="navigateTo('/')" class="header__container__height__menuMobile">
                    <Icon name="mdi-light:format-align-left" size="35" color="#ffffff" />
                </button>
                <Logo />
                <div class="header__container__height__menu">
                    <nav>
                        <ul>
                            <li>
                                HOME
                            </li>
                            <li>
                                SHOP
                            </li>
                            <li>
                                ABOUT US
                            </li>
                            <li>
                                FAQs
                            </li>
                            <li>
                                CONTACT US
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header__container__height__iconGroup">
                    <button @click="navigateTo('/')" class="w-full h-full">
                        <Icon name="mdi-light:magnify" size="35" color="#ffffff" />
                    </button>
                    <button @click="navigateTo('/')" class="w-full h-full">
                        <Icon name="mdi-light:account" size="35" color="#ffffff" />
                    </button>
                    <button class="w-full h-full">
                        <Icon class="mb-1" name="mdi-light:heart" size="32" color="#ffffff" />
                    </button>
                </div>
            </div>
        </div>
    </header>

</template>



<style lang="scss" scope>
.header {
    background-color: #fff;
    color: #000;

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
            }
        }
    }
}
</style>