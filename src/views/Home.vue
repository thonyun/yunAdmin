<template>
  <div class="home">
    <!-- <SideMenu class="side-menu"></SideMenu> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/sideMenu.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    SideMenu
  },
});
</script>
<style lang="less" scoped>
.home {
  display: grid;
  grid-template-columns: auto 5fr;

  .side-menu {
    height: 100vh;
  }
}

</style>
