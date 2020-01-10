<template>
  <footer class="el-footer" :style="{ height }">
    
  </footer>
</template>

<script>
export default {
  name: "ElFooter",

  componentName: 'ElFooter',
  
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>