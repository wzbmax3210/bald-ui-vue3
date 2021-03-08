<template>
<div>
  <Topnav/>
  <div class="banner">
    <h1>bald UI</h1>
    <h2>by Vue3</h2>
    <p class="actions">
      <a href="https://github.com/wzbmax3210/bald-ui-vue3">Github</a>
      <router-link to="/doc">Start</router-link>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  name: 'Home',
  components: { Topnav }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
