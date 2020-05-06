<template>
  <div>
    <el-radio v-model="radio" label="1"></el-radio>
    <el-radio v-model="radio" label="2"></el-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1'
      };
    },
    watch: {
      radio(newVal, oldVal) {
        // console.log(newVal)
      }
    },
  };
</script>


<style lang="scss">
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>