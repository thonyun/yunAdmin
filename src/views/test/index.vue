<template>
  <div class="about">
    test
  </div>
</template>
<script setup>
import { onMounted, ref} from 'vue'

onMounted(() => {
  
})

function makeCounter(a) {
  let sum = a
  function f(b) {
    sum += b

    return f
  }

  f.toString = function () {
    return sum
  }

  return f
}
let s = makeCounter(1)(2)
console.log(s)
</script>
