<template>
  <div>
    <aside class="menu">
      <div class="hamburger" @click="toggleMenu">
        <Icon name="hamburger" />
      </div>
      <div class="lang">
        <a href="#">Eng</a>
      </div>
    </aside>
    <aside class="hamburger-mobile" @click="toggleMenu">
      <Icon name="hamburger-mobile" width="34" height="34" viewBox="0 0 34 34"/>
    </aside>
    <template v-if="menuOpen">
      <div class="cover"></div>
      <div class="menu-open">
        <div class="menu-open__close-btn" @click="toggleMenu">
          <Icon name="close-menu" />
        </div>
        <ul class="menu-open__links-list">
          <li class="menu-open__link-item" v-for="menuItem in menuItems" :key="menuItem">
            <a href="#">{{ menuItem }}</a>
          </li>
        </ul>
        <div class="social">
          <a href="#">
            <Icon class="social__icon" name="telegram" />
          </a>
          <a href="#">
            <Icon class="social__icon" name="facebook" />
          </a>
          <a href="#">
            <Icon class="social__icon" name="instagram" />
          </a>
        </div>
        <div class="menu-open__lang">
          <a href="#">Eng</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Menu',
  components: {
    Icon
  },
  data () {
    return {
      menuOpen: false,
      menuItems: [
        'Парковка',
        'Страховка',
        'Бензин',
        'Обслуживание'
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
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
  background-color: $dark-blue

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
      left: 16px

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

  @media (min-width: 1726px)
    width: 55%

  @media (min-width: 1802px)
    width: 57%

  @media (min-width: 1887px)
    width: 60%

  @media (min-width: 1920px)
    width: 65%

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
