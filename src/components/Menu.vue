<template>
  <div>
    <aside class="menu">
      <div class="hamburger" @click="menuOpen = true">
        <Icon name="hamburger" width="32" height="32" viewBox="0 0 32 32"/>
      </div>
      <div class="lang">
        <a href="#">Eng</a>
      </div>
    </aside>
    <aside class="hamburger-mobile" @click="menuOpen = true">
      <Icon name="hamburger-mobile" width="34" height="34" viewBox="0 0 34 34"/>
    </aside>
    <div class="cover" v-if="menuOpen"></div>
    <div class="menu-open" v-if="menuOpen">
      <div class="menu-open__close-btn" @click="menuOpen = false">
        <Icon name="close-menu" width="32" height="32" viewBox="0 0 32 32"/>
      </div>
      <ul class="menu-open__links-list">
        <li class="menu-open__link-item">
          <a href="#">Парковка</a>
        </li>
        <li class="menu-open__link-item">
          <a href="#">Страховка</a>
        </li>
        <li class="menu-open__link-item">
          <a href="#">Бензин</a>
        </li>
        <li class="menu-open__link-item">
          <a href="#">Обслуживание</a>
        </li>
      </ul>
      <div class="social">
        <a href="#">
          <Icon class="social__icon" name="telegram" width="32" height="32" viewBox="0 0 32 32"/>
        </a>
        <a href="#">
          <Icon class="social__icon" name="facebook" width="32" height="32" viewBox="0 0 32 32"/>
        </a>
        <a href="#">
          <Icon class="social__icon" name="instagram" width="32" height="32" viewBox="0 0 32 32"/>
        </a>
      </div>
      <div class="menu-open__lang">
        <a href="#">Eng</a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'Menu',
  components: {
    Icon
  },
  data () {
    return {
      menuOpen: false
    }
  }
}
</script>

<style lang="sass" scoped>
.menu
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  width: 64px
  height: $fullViewportHeight
  background-color: #151B1F

  @media (max-width: 1023px)
    width: 86px

  @media (max-width: 480px)
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

    @media (min-width: $screen-xs)
      display: none

    @media (max-width: 480px)
      display: block
      position: absolute
      top: 21px
      left: 14px

.menu-open
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 0
  left: 0
  height: $fullViewportHeight
  background-color: black
  z-index: 3

  @media (min-width: 0)
    width: 100%

  @media (min-width: $screen-md)
    width: 60%

  @media (min-width: $screen-lg)
    width: 53%

  @media (max-width: 480px)
    justify-content: flex-start

  &__close-btn
    position: absolute
    top: 0
    left: 0
    margin-top: 40px
    margin-left: 20px
    cursor: pointer

    @media (max-width: 480px)
      margin-top: 21px
      margin-left: 22px

  &__links-list
    display: flex
    flex-direction: column
    font-weight: 500
    font-size: 32px
    line-height: 37px
    margin-left: 128px

    @media (max-width: $screen-sm)
      font-size: 28px
      line-height: 33px

    @media (max-width: 480px)
      font-size: 22px
      line-height: 26px
      margin-top: 80px
      margin-left: 28px

  &__link-item
    margin-bottom: 15px

    & a
      color: white
      text-transform: uppercase

      &:hover
        color: $main-accent

  &__lang
    display: none

    @media (max-width: 480px)
      display: block
      position: absolute
      font-weight: 700
      left: 28px
      bottom: 28px

      & a
        position: relative
        font-size: 13px
        font-weight: 700
        color: $main-accent

        &:hover, &:active
          border-radius: 100%
          border: 1px solid $gray-light
          padding: 12px
          left: -13px
          bottom: 0

        &:hover
          color: $gray-light

        &:active
          color: $main-accent

.cover
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: $fullViewportHeight
  background-color: black
  opacity: 0.8
  z-index: 2

.social
  display: flex
  margin-left: 128px

  @media (max-width: 480px)
    margin-left: 28px

  & a
    margin-right: 24px

  &__icon
    fill: $white

  &__icon:hover
    fill: $main-accent
</style>
