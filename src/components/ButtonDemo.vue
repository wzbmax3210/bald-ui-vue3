<template>
  <div>
    button demo
  </div>
  <h1>示例1</h1>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h1>示例2</h1>
  <div>
    <Button>没有属性</Button>
    <Button size="normal">普通</Button>
    <Button size="small">小小小</Button>
    <Button size="large">大大大</Button>
  </div>
  <div>
    <Button>没有属性</Button>
    <Button size="normal" theme="link">普通</Button>
    <Button size="small" theme="link">小小小</Button>
    <Button size="large" theme="link">大大大</Button>
  </div>
  <div>
    <Button>没有属性</Button>
    <Button size="normal" theme="text">普通</Button>
    <Button size="small" theme="text">小小小</Button>
    <Button size="large" theme="text">大大大</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>实例4</h1>
  <Button disabled>Disabled</Button>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../libs/Button.vue'
export default {
  name: 'ButtonDemo',
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(1)
    }

    return { onClick }
  }
}
</script>

<style lang="scss" scoped>

</style>
