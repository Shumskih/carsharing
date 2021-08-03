<template>
  <div id="app">
    <Menu />
    <main class="main">
      <router-view
        @showFooter="runShowFooter($event)"
        @showSlider="runShowSlider($event)"
      />
    </main>
    </div>
</template>

<script>
import Icon from '@/components/Icon'
import Menu from '@/components/Menu'
import Slider from '@/components/Slider'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    Icon,
    Menu,
    Slider,
    AppHeader,
    AppFooter
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
  },
  methods: {
    runShowFooter (event) {
      this.showFooter = event
    },
    runShowSlider (event) {
      this.showSlider = event
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')
html, body
  height: 100%

body
  position: relative

a
  text-decoration: none

ul
  list-style-type: none
  padding: 0

#app
  font-family: 'Roboto', sans-serif
  font-weight: 700
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100%

.main
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%

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
  background-blend-mode: darken

  &:hover
    filter: brightness(90%)

.btn-standard
  background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)

.btn-crimson
  background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%)

.position-fixed
  position: fixed

.page
  display: flex
  justify-content: center
  width: 94%

  @media (max-width: 1023px)
    width: 100%

  @media (min-width: $screen-lg)
    justify-content: space-between
    width: 96%
    margin: 0

.left
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 100%

  @media (min-width: $screen-md)
    width: 57%

  @media (min-width: $screen-lg)
    width: 63%

  @media (max-width: $screen-xs)
    height: $fullViewportHeight
</style>
