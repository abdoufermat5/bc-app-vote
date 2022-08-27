<template>
  <span
    class="title font-weight-light"
    style="line-height: 1.7 !important;"
  >
    <slot />
  </span>
</template>

<script>
  export default {
    name: 'BaseText',
  }
</script>
<style scoped>
.title{
  font-family: 'Courier New', Courier, monospace;
}
</style>
