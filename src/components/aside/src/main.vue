<template>
  <aside class="el-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "ElAside",

  component: 'ElAside',

  props: {
    width: {
      type: String
    }
  }
}
</script>