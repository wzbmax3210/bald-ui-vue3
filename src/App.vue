<template>
  <div>
    导航栏 | <router-link to="/">Home</router-link> | <router-link to="/xxx">HelloWorld</router-link>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script>
export default  {
  name: 'App'
}
</script>
