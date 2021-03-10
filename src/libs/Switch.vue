<template>
  <button @click="toggle" class="bald-switch" :class="{ 'bald-checked': value }" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Switch',
  props: {
    value: Boolean,
    disabled: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      // 作用和vue2.x的this.$emit相同
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .bald-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h / 2;
    position: relative;
    cursor: pointer;

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &.bald-checked {
      background: #1890ff;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:focus {
      outline: none;
    }
    &:active {
      > span {
        width: $h2 + 4px;
      }
    }
    &.bald-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>
