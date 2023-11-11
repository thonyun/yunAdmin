<template>
    <div class="navigation" ref="navigation">
        <div class="menuToggle" ref="menuToggle" @click="handToggleClass"></div>
        <ul class="itemList">
            <li :class="activeIndex == index ? 'active' : ''" v-for="(item, index) in menuList" :key="index"
                @click="onClickMenu(index, item)" :style="`--text: ${item.name}`">
                <i :class="`iconfont ${item.icon}`"></i>
                <text class="item-text" v-if="navActive">{{ item.name }}</text>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { onBeforeMount, nextTick, onMounted, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const navigation = ref()
let navActive = ref(false)
let activeIndex = ref() 
let menuList = reactive([
    {
        icon: 'icon-home',
        name: '杂项',
        path: '/about/index'
    },
    {
        icon: 'icon-ceshiliantong',
        name: '图表',
        path: '/echarts/index'
    },
    {
        icon: 'icon-codelibrary',
        name: '测试',
        path: '/test/index'
    },
    {
        icon: 'icon-dashboard',
        name: 'Three',
        path: '/three/index'
    }
])
onBeforeMount(() => {
    
})
onMounted(() => {
    setTimeout(() => {
        let value = menuList.findIndex((item) => {
            if (item.path == route.path) {
                return true
            }
        })

        activeIndex.value = value == undefined ? 0 : value
    }, 200)
})

/**
 * 点击切换状态
 */
function handToggleClass() {
    navActive.value = true
    navigation.value.classList.toggle('open')
}

function onClickMenu(index, data) {
    activeIndex.value = index
    router.push(data.path)
}
</script>
<style lang="less" scoped>
@import url(../assets/css/theme.less);

.navigation {
    // position: fixed;
    width: 5rem;
    inset: 1.25rem 0 1.25rem 1.25rem;
    background: @sideMenuBackColor;
    transition: .5s;

    &.open {
        width: 16rem;
        transition: .5s;

        .menuToggle {
            &::before {
                transform: translateY(0) rotate(45deg);
            }

            &::after {
                transform: translateY(0) rotate(-45deg);
                box-shadow: 0 0 0 @sideMenuBackColor;
            }
        }

        .itemList {

            li {
                // width: 100%;
                box-sizing: border-box;
                padding: 0 1rem;
            }

            i {

                margin-right: 0.75rem;
            }

            .item-text {
                transition: .5s;
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .menuToggle {
        width: 100%;
        height: 3.75rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &::before {
            content: '';
            position: absolute;
            width: 1.875rem;
            height: 0.125rem;
            background: @sideMenuHeadColor;
            position: absolute;
            left: calc(2.5rem - 0.9rem);
            transform: translateY(-0.5rem);
            transition: .5s;
        }

        &::after {
            content: '';
            position: absolute;
            width: 1.875rem;
            height: 0.125rem;
            background: @sideMenuHeadColor;
            position: absolute;
            left: calc(2.5rem - 0.9rem);
            transform: translateY(0.5rem);
            transition: .5s;
            box-shadow: 0 -0.5rem 0 @sideMenuHeadColor;
        }
    }

    .itemList {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        &>li {
            width: 100%;
            height: 52px;
            list-style: none;
            flex-shrink: 0;
            transition: .5s;
            padding: 0 1rem;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            i {
                width: 3rem;
                height: 3rem;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.75rem;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 3rem;
                    height: 3rem;
                    filter: blur(0.5rem);
                    background-color: black;
                    opacity: 0;
                    transition: .5s;
                }
            }

            .item-text {
                opacity: 0;
                visibility: hidden;
            }
        }

        .active {
            i {
                background-color: black;
                color: #fff;
                border-radius: 0.4rem;

                &::before {
                    z-index: 999;
                }

                &::after {
                    opacity: .5;
                }
            }
        }
    }
}</style>