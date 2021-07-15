<template>
<aside class="menu">
  <div class="hamburger">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 8H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 24H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="lang">
    <a href="#">Eng</a>
  </div>
</aside>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="sass" scoped>
.menu
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  width: 64px
  height: 100vh
  background-color: #151B1F

.lang
  margin-bottom: 31px

  & a
    position: relative
    font-size: 13px
    font-weight: 700
    color: $main-accent

    &:hover, &:active
      border-radius: 100%
      border: 1px solid $gray-light
      padding: 12px

    &:hover
      color: $gray-light

    &:active
      color: $main-accent

.hamburger
  margin-top: 40px

  &:hover
    cursor: pointer

</style>
