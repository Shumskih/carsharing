<template>
  <section class="slider" v-if="showSlider">
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
        <icon name="arrow-left" width="10" height="20" viewBox="0 0 10 20"/>
      </div>
      <div class="swiper-button-next swiper-button-white" slot="button-next">
        <icon name="arrow-right" width="10" height="20" viewBox="0 0 10 20"/>
      </div>
    </swiper>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    showSlider: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        speed: 700,
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
  }
}
</script>

<style lang="sass">
.slider
  display: none
  max-width: 811px

  @media (min-width: $screen-md)
    display: block
    width: 43%

  @media (min-width: $screen-lg)
    width: 50%

  @media (min-width: $screen-xl)
    width: 37%

.swiper
  height: 100%

  .swiper-slide
    position: relative
    display: flex
    justify-content: center
    width: 100%
    height: 100%

    &.slide-1, &.slide-2, &.slide-3, &.slide-4
      background-size: contain

      @media (min-width: $screen-md)
        background-size: cover
        background-repeat: no-repeat

    &.slide-1
      background-image: url('../../src/assets/img/slides/slide-1.jpg')

    &.slide-2
      background-image: url('../../src/assets/img/slides/slide-2.jpg')

    &.slide-3
      background-image: url('../../src/assets/img/slides/slide-3.jpg')

    &.slide-4
      background-image: url('../../src/assets/img/slides/slide-4.jpg')

    &::after
      position: absolute
      content: ""
      display: block
      width: 100%
      height: 100%
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)

  &-pagination
    margin-bottom: 32px

  &-pagination-bullet
    background-color: white
    opacity: 1

  &-pagination-bullet-active
    background-color: $main-accent

  &-button-prev, &-button-next
    top: 0
    width: 64px
    height: 103%

  &-button-prev
    left: 0
    right: auto

  &-button-next
    right: 0

  &-button-prev:hover, &-button-next:hover
    background-color: rgba(14, 194, 97, 0.2)

.slide-content
  display: flex
  flex-direction: column
  align-items: flex-start
  color: white
  margin-top: 210px
  margin-left: 96px
  margin-right: 96px
  z-index: 1

  &__title
    font-weight: 500
    margin-bottom: 8px

    @media (min-width: $screen-lg)
      font-size: 40px
      line-height: 47px

    @media (max-width: 1439px)
      font-size: 32px
      line-height: 37px

  &__description
    font-weight: 300
    font-size: 24px
    line-height: 100%
    margin-bottom: 32px

    @media (max-width: $screen-lg)
      font-size: 24px
      line-height: 24px

    @media (max-width: 1439px)
      font-size: 22px
      line-height: 22px

  & .btn-slider-1, & .btn-slider-2, & .btn-slider-3, & .btn-slider-4
    border-radius: 4px

    &:hover
      filter: brightness(90%)

    &:active
      filter: brightness(80%)

  & .btn-slider-1
    background: linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)

  & .btn-slider-2
    background: linear-gradient(90deg, #132949 0%, #0C7B67 100%)

  & .btn-slider-3
    background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%)

  & .btn-slider-4
    background: linear-gradient(90deg, #281349 0%, #720C7B 100%)

@import "../../node_modules/swiper/css/swiper.css"
</style>
