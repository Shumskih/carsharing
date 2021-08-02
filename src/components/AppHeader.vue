<template>
  <header class="header" :class="{ 'header-inner': inner }">
    <div class="header__logo">
      <a href="/" class="main-accent">Need for drive</a>
    </div>
    <div class="header__location">
      <div class="point">
        <icon name="point" width="18" height="20" viewBox="0 0 18 20"/>
      </div>
      <div class="header__city">Ульяновск</div>
    </div>
  </header>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'AppHeader',
  props: {
    inner: {
      default: false,
      type: Boolean
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 30px
  margin-left: 128px
  margin-right: 64px

  @media (max-width: 600px)
    margin-top: 34px

  @media (max-width: $screen-md)
    margin-left: 128px
    margin-right: 36px

  &__logo a
    font-size: 40px

    @media (max-width: 600px)
      font-size: 30px

  &__location
    display: flex

  &__city
    font-size: 14px
    font-weight: 400
    color: $gray
    margin-left: 8px

  @media (max-width: 480px)
    width: 100%
    flex-direction: column
    align-items: flex-end
    margin-top: 15px
    margin-left: 0
    margin-right: 0
    padding-right: 16px

  &-inner
    align-self: center
    width: 100%
    max-width: 1376px
    padding-right: 64px
    padding-left: 64px
    margin-bottom: 23.5px

    & a
      font-size: 30px
      line-height: 35px
</style>
