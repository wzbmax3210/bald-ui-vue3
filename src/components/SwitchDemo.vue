<template>
  <div>
    <Switch v-model:value="bool"/>
<!-- 等同于这种写法，取代vue2.x的.sync   <Switch :value="y" @update:value="y = $event"/>-->
  </div>
</template>

<script lang="ts">
import Switch from '../libs/Switch.vue'
import {ref} from 'vue'
export default {
  name: 'SwitchDemo',
  components: { Switch },
  setup() {
    // ref创建内部数据
    const bool = ref(false)
    return { bool }
  }
}
</script>

<style lang="scss" scoped>

</style>
