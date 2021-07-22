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
    width: String,
    height: String,
    viewBox: String
  }
}
</script>

<style scoped>

</style>
