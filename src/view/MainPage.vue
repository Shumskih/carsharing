<template>
<main class="main">
  <section class="cover">
    <div class="cover-center">
      <h1 class="cover-center__title">Каршеринг <span class="main-accent display-block">Need for drive</span></h1>
      <div class="cover-center__description">Поминутная аренда авто твоего города</div>
      <a href="#" class="btn btn-standard not-xs">Забронировать</a>
    </div>
  </section>
  <div class="btn-big">
    <a href="#">Забронировать</a>
  </div>
</main>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style lang="sass" scoped>
.main
  height: 100%
  margin-top: 112px

.cover
  display: flex
  flex-direction: column
  justify-content: space-between
  margin-left: 64px
  margin-right: 64px

  @media (max-width: $screen-lg)
    margin-left: 32px
    margin-right: 36px

  @media (max-width: 480px)
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

      @media (max-width: 480px)
        font-size: 42px
        line-height: 42px
        margin-top: -64px

      @media (max-width: $screen-xs)
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

      @media (max-width: $screen-xs)
        font-size: 18px
        line-height: 21px
        margin-top: 16px
        margin-bottom: 0

.btn-big
  @media (min-width: $screen-xs)
    display: none

  @media (max-width: $screen-xs)
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
  @media (max-width: $screen-xs)
    display: none
</style>
