<template>
  <div class="about">
    杂项
  </div>
</template>
<script setup>
import { onMounted, ref} from 'vue'

onMounted(() => {
  console.log(ref(0))
})
let state = ref(0) || 0

function addState() {
  state.value ++
}
</script>
<style lang="lcss" scoped >

</style>
