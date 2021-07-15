<template>
<main class="main">
  <section class="cover">
    <header class="header">
      <div class="header__logo">
        <a href="/" class="main-accent">Need for drive</a>
      </div>
      <div class="header__location">
        <div class="point">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="header__city">Ульяновск</div>
      </div>
    </header>
    <div class="cover-center">
      <h1 class="cover-center__title">Каршеринг <span class="main-accent display-block">Need for drive</span></h1>
      <div class="cover-center__description">Поминутная аренда авто твоего города</div>
      <a href="#" class="btn btn-standard">Забронировать</a>
    </div>
    <div class="cover-footer">
      <div class="cover-footer__copyright">© 2016-2019 «Need for drive»</div>
      <div class="cover-footer__phone"><a href="tel: +74952342244">8 (495) 234-22-44</a></div>
    </div>
  </section>
  <section class="slider">asdasdasdasd</section>
</main>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: row
  justify-content: center
  width: 100%

.cover
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 50%
  margin-left: 64px
  margin-right: 64px

  @media (max-width: 1141px)
    width: 60%

  &-center
    &__title
      font-size: 70px
      line-height: 70px
      color: $black

    &__description
      font-size: 26px
      font-weight: 300
      line-height: 31px
      color: $gray
      margin-top: 34px
      margin-bottom: 60px

  &-footer
    display: flex
    justify-content: space-between
    font-size: 13px
    margin-bottom: 32px
    font-weight: 400
    line-height: 15px

    &__copyright
      color: $gray

    &__phone a
      color: $black

      &:hover, &:active
        color: $main-accent

.slider
  width: 50%
  background-color: red

  @media (max-width: 1141px)
    width: 40%

.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 32px

  &__logo a
    font-size: 40px

  &__location
    display: flex

  &__city
    font-size: 14px
    font-weight: 400
    color: $gray
    margin-left: 8px
</style>
