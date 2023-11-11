<template>
  <div class="about">
    Three.js
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
