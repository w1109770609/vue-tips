<template>
  <p class="toastItem" v-show="flag"><slot></slot></p>
</template>

<script>
export default {
  data() {
    return {
      flag:false,
      timeout:2000
    }
  },
  mounted(){
    this.flag = true
    setTimeout(() => {
      this.flag = false
    }, this.timeout);
  }
}
</script>

<style scoped>
</style>
