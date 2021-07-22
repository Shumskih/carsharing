<template>
    <svg :width="width" :height="height" :viewBox="viewBox" >
      <use :href="require('@/assets/img/sprite.svg') + `#${name}`"></use>
    </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      default: '32',
      type: String
    },
    height: {
      default: '32',
      type: String
    },
    viewBox: {
      default: '0 0 32 32',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
