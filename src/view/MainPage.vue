<template>
  <section class="main-page">
    <section class="left">
      <div class="left__top">
        <app-header/>
        <section class="cover">
          <div class="cover-center">
            <h1 class="cover-center__title">
              Каршеринг
              <span class="main-accent display-block">
                Need for drive
              </span>
            </h1>
            <div class="cover-center__description">Поминутная аренда авто твоего города</div>
            <router-link :to="{ name: 'OrderForm' }" class="btn btn-standard not-xs">Забронировать</router-link>
          </div>
          <div class="btn-big">
            <router-link :to="{ name: 'OrderForm' }">Забронировать</router-link>
          </div>
        </section>
      </div>
      <app-footer/>
    </section>
    <slider/>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Slider from '../components/Slider'

export default {
  name: 'MainPage',
  components: {
    AppHeader,
    AppFooter,
    Slider
  }
}
</script>

<style lang="sass" scoped>
.main-page
  display: flex
  height: 100%

.left
  display: flex
  flex-direction: column
  height: 100%

  &__top
    display: flex
    flex-direction: column
    justify-content: flex-start

.cover
  display: flex
  flex-direction: column
  justify-content: space-between
  margin-left: 128px
  margin-right: 64px
  margin-top: 123px

  @media (max-width: $screen-lg)
    margin-right: 36px

  @media (max-width: $screen-xs)
    width: 100%
    margin-left: 0
    margin-right: 0
    padding-left: 16px
    padding-right: 16px

  &-center
    &__title
      font-size: 70px
      line-height: 70px
      color: $black

      @media (max-width: 600px)
        font-size: 60px
        line-height: 60px

      @media (max-width: $screen-xs)
        font-size: 42px
        line-height: 42px
        margin-top: -64px

      @media (max-width: $screen-xss)
        font-size: 32px
        line-height: 32px
        margin-top: -64px

      & span
        margin-top: 6px

    &__description
      font-size: 26px
      font-weight: 300
      line-height: 31px
      color: $gray
      margin-top: 34px
      margin-bottom: 60px

      @media (max-width: 600px)
        font-size: 24px
        line-height: 26px

      @media (max-width: $screen-xss)
        font-size: 18px
        line-height: 21px
        margin-top: 16px
        margin-bottom: 0

.btn-big
  @media (min-width: $screen-xss)
    display: none

  @media (max-width: $screen-xss)
    display: block
    padding-top: 15px
    padding-bottom: 13px
    margin-top: 32px
    text-align: center
    background: $main-accent linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)
    background-blend-mode: darken

    &:hover
      background: linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)
      background-blend-mode: darken
      cursor: pointer

    & a
      color: $white

.not-xs
  @media (max-width: $screen-xss)
    display: none
</style>
