<template>
    <div>
        <!-- Кнопка для открытия/закрытия Sidebar -->
        <button class="sidebar-toggle" @click="toggleSidebar" v-if="!isOpen">
            <Icon name="mdi-light:format-align-left" size="35" color="#ffffff" />
        </button>
        <!-- Боковая панель -->
        <div :class="['sidebar', { 'sidebar--open': isOpen }]" @click.self="closeSidebar">
            <div class="sidebar__btn">
                <Icon class="sidebar__btn__back" name="mdi-light:chevron-double-left" size="40" color="#ffffff"
                    @click.self="closeSidebar" />
            </div>
            <nav class="sidebar-content">
                <ul>
                    <li>
                        <NuxtLink to="/">
                            HOME
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">
                            SHOP
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/aboutus">
                            ABOUT US
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            FAQs
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contacts">
                            CONTACT US
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
const isOpen = ref(false);

// Функция для переключения состояния Sidebar
const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};

// Функция для закрытия Sidebar при клике за его пределами
const closeSidebar = () => {
    isOpen.value = false;
};
</script>

<style lang="scss" scope>
/* Стили для кнопки открытия меню */
.sidebar-toggle {
    /* position: fixed; */
    top: 20px;
    left: 20px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
}

/* Основные стили для боковой панели */
.sidebar {
    position: fixed;
    top: 0;
    left: -250px;
    /* Изначально скрыта за пределами экрана */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    border-right: 2px solid var(--color-text);
    transition: transform 0.3s ease;
    z-index: 999;

    &__btn {
        height: 70px;
        display: flex;
        justify-content: end;
        align-items: center;
        border-bottom: 2px solid var(--color-text);

        &__back {
            margin-right: 4px;
        }
    }

    nav {
        tab-size: center;

        ul {
            flex-wrap: wrap;
            display: flex;
            flex-direction: column;
            list-style: none;
            justify-content: center;

            li {
                padding: 20px 60px;
                border-bottom: 1px solid var(--color-text);
                display: flex;
                justify-content: center;
                cursor: pointer;

                &:hover {
                    background-color: var(--color-text);
                    color: var(--color-background);
                }
            }
        }
    }
}

.sidebar--open {
    transform: translateX(250px);
    /* Панель выезжает */
}
</style>
