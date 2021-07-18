<template>
  <div>
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
    <aside class="hamburger-mobile">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.56689 16H24.5669" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.56689 8H24.5669" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.56689 24H24.5669" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </aside>
  </div>
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

  @media (max-width: $screen-md)
    width: 65px

  @media (max-width: $screen-xs)
    display: none

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

  &-mobile
    &:hover
      cursor: pointer

    @media (min-width: $screen-lg), (max-width: $screen-lg)
      display: none

    @media (max-width: $screen-xs)
      display: block
      position: absolute
      top: 21px
      left: 22px
</style>
