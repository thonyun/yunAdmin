<template>
    <div>
        <svg class="svg-icon" aria-hidden="true">
            <use :xlink-href="`#icon-${props.name}`"></use>
        </svg>
    </div>
</template>
<script setup lang="ts">
    import { defineProps, computed } from 'vue'

type Props = {
        name: string
}
const props = withDefaults(defineProps<Props>(), {
        name: ''
    })

    // 图标zai
</script>
<style lang="less" scoped>
.svg-icon {
    width: 1rem;
    height: 1rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow:  hidden;
}
</style>