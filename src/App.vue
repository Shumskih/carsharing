<template>
  <div id="app">
    <Menu />
    <div class="page">
      <section class="left">
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
        <router-view/>
        <footer class="footer">
          <div class="footer__copyright">© 2016-2019 «Need for drive»</div>
          <div class="footer__phone"><a href="tel: +74952342244">8 (495) 234-22-44</a></div>
        </footer>
      </section>
      <section class="slider">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="slide-1">
            <div class="slide-content">
              <h2 class="slide-content__title">
                Бесплатная парковка
              </h2>
              <p class="slide-content__description">
                Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
              </p>
              <a href="#" class="btn btn-slider-1">Подробнее</a>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="slide-content">
              <h2 class="slide-content__title">
                Страховка
              </h2>
              <p class="slide-content__description">
                Полная страховка страховка автомобиля
              </p>
              <a href="#" class="btn btn-slider-2">Подробнее</a>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="slide-content">
              <h2 class="slide-content__title">
                Бензин
              </h2>
              <p class="slide-content__description">
                Полный бак на любой заправке города за наш счёт
              </p>
              <a href="#" class="btn btn-slider-3">Подробнее</a>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="slide-content">
              <h2 class="slide-content__title">
                Обслуживание
              </h2>
              <p class="slide-content__description">
                Автомобиль проходит еженедельное ТО
              </p>
              <a href="#" class="btn btn-slider-4">Подробнее</a>
            </div>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 10L9 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="swiper-button-next swiper-button-white" slot="button-next">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 10L1 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </swiper>
      </section>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'App',
  components: {
    Menu,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    // this.$swiper.width('1000px')
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')

body
  position: relative

a
  text-decoration: none

ul
  list-style-type: none
  padding: 0

#app
  display: flex
  font-family: 'Roboto', sans-serif
  font-weight: 700
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.main-accent
  color: $main-accent

.display-block
  display: block

.btn
  padding: 15px 60px
  border-radius: 8px
  font-weight: 500
  font-size: 18px
  line-height: 21px
  color: $white

.btn-standard
  background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)
  background-blend-mode: darken

  &:hover
    background: linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)
    background-blend-mode: darken

.page
  display: flex
  justify-content: center
  width: 100%
  max-width: 1376px
  margin: 0 auto

.left
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 50%

  @media (max-width: 1221px)
    width: 77%

  @media (max-width: $screen-md)
    width: 100%

  @media (max-width: 480px)
    height: 100vh

.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 32px
  margin-left: 64px
  margin-right: 64px

  @media (max-width: $screen-md)
    margin-left: 31px
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
    margin-top: 16px
    margin-left: 0
    margin-right: 0
    padding-right: 16px

.footer
  display: flex
  justify-content: space-between
  font-size: 13px
  font-weight: 400
  line-height: 15px
  margin-left: 64px
  margin-right: 64px
  margin-bottom: 32px

  @media (max-width: $screen-md)
    margin-left: 31px
    margin-right: 36px

  &__copyright
    color: $gray

    @media (max-width: 480px)
      order: 1
      margin-top: 8px
      margin-right: 16px

  &__phone a
    color: $black

    @media (max-width: 480px)
      order: 0
      color: $main-accent
      margin-right: 16px

    &:hover, &:active
      color: $main-accent

      @media (max-width: 480px)
        &:hover
          color: $gray-light

        &:active
          color: #FFFFFF

  @media (max-width: 480px)
    flex-direction: column
    justify-content: space-around
    align-items: flex-end
    height: 72px
    background-color: $black
    margin: 0
    padding-top: 16px
    padding-bottom: 16px

.slider
  width: 50%

  @media (max-width: 1221px)
    width: 33%

  @media (max-width: $screen-sm)
    display: none

.swiper
  height: 100%
  width: 100%

  .swiper-slide
    position: relative
    display: flex
    justify-content: center
    align-items: center
    max-width: 100%
    height: 100%
    background-size: cover

    &.slide-1
      background-image: url('../src/assets/img/slides/slide-1.jpg')

    &.slide-2
      background-image: url('../src/assets/img/slides/slide-2.jpg')

    &.slide-3
      background-image: url('../src/assets/img/slides/slide-3.jpg')

    &.slide-4
      background-image: url('../src/assets/img/slides/slide-4.jpg')

    &::after
      position: absolute
      content: ""
      display: block
      width: 100%
      height: 100%
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)

.swiper-pagination
  margin-bottom: 32px

.swiper-pagination-bullet
  background-color: white
  opacity: 1

.swiper-pagination-bullet-active
  background-color: $main-accent

.swiper-button-prev, .swiper-button-next
  top: 0
  width: 64px
  height: 103%

.swiper-button-prev
  left: 0
  right: auto

.swiper-button-next
  right: 0

.swiper-button-prev:hover, .swiper-button-next:hover
  background-color: rgba(14, 194, 97, 0.2)

.slide-content
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 495px
  height: 100%
  margin-top: 420px
  color: white
  margin-left: 96px
  margin-right: 96px
  z-index: 1

  &__title
    font-weight: 500
    font-size: 40px
    line-height: 47px
    margin-bottom: 8px

  &__description
    font-weight: 300
    font-size: 24px
    line-height: 100%
    margin-bottom: 32px

  & .btn-slider-1, & .btn-slider-2, & .btn-slider-3, & .btn-slider-4
    border-radius: 4px

    &:hover
      opacity: 0.8

  & .btn-slider-1
    background: linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)

  & .btn-slider-2
    background: linear-gradient(90deg, #132949 0%, #0C7B67 100%)

  & .btn-slider-3
    background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%)

  & .btn-slider-4
    background: linear-gradient(90deg, #281349 0%, #720C7B 100%)
</style>
