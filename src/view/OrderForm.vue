<template>
  <section class="order-page">
    <app-header inner/>
    <div class="wrapper">
      <div class="tabs-wrapper">
        <div class="horizontal-line"></div>
        <ul class="tabs">
          <li
            class="tabs__item"
            v-for="(orderStep, index) in orderSteps"
            :key="index"
          >
            <a
              :href="orderStep.href"
              @click.prevent="setActive(trimSharpFromHref(orderStep.href))"
              :class="{ active: isActive(trimSharpFromHref(orderStep.href)) }"
            >
              {{ orderStep.name }}
            </a>
            <icon
              v-if="!isLastOrderStep(index)"
              class="tabs__item-arrow"
              name="order-tab-arrow"
              width="6"
              height="8"
              viewBox="0 0 6 8"
            />
          </li>
        </ul>
        <div class="horizontal-line"></div>
      </div>
      <section class="tabs__content-wrapper">
        <div class="tabs__items-content">
          <div
            class="tabs__item-content"
            :class="{ 'active': isActive('location') }"
            id="location"
          >
            <div class="location__data">
              <div class="input-row">
                <label for="city">Город</label>
                <input
                  type="search"
                  id="city"
                  placeholder="Начните вводить город"
                >
              </div>
              <div class="input-row">
                <label for="pick-up-point">Пункт выдачи</label>
                <input
                  type="search"
                  id="pick-up-point"
                  placeholder="Начните вводить пункт выдачи"
                >
              </div>
            </div>
            <div class="location__map">
              <p>Выбрать на карте:</p>
              <img src="@/assets/img/map.jpg" alt="">
            </div>
          </div>
          <div
            class="tabs__item-content"
            :class="{ 'active': isActive('model') }"
            id="model"
          ></div>
          <div
            class="tabs__item-content"
            :class="{ 'active': isActive('additional') }"
            id="additional"
          ></div>
          <div
            class="tabs__item-content"
            :class="{ 'active': isActive('total') }"
            id="total"
          ></div>
        </div>
        <div class="order-wrapper">
          <div class="vertical-line"></div>
          <div class="order">
            <h3 class="order__title">Ваш заказ:</h3>
            <ul>
              <li>
                <span class="order__description">Пункт выдачи</span>
                <span class="order__value">Ульяновск, Нариманова 42</span>
              </li>
            </ul>
            <div class="order__price">
              <span>Цена:</span> от 8 000 до 12 000 ₽
            </div>
            <div class="order__button">
              <a
                href=""
                class="btn btn-disabled"
                v-on:click.prevent
                v-if="isActive('location')">
                Выбрать модель
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'Order',
  components: {
    AppHeader,
    DatePicker
  },
  data () {
    return {
      activeItem: 'location',
      orderSteps: [
        {
          href: '#location',
          name: 'Местоположение'
        },
        {
          href: '#model',
          name: 'Модель'
        },
        {
          href: '#additional',
          name: 'Дополнительно'
        },
        {
          href: '#total',
          name: 'Итого'
        }
      ]
    }
  },
  methods: {
    isLastOrderStep (index) {
      return (this.orderSteps.length - 1) === index
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    trimSharpFromHref (string) {
      return string.substr(1)
    }
  }
}
</script>

<style lang="sass">
*, *:after, *:before
  box-sizing: border-box

input
  width: 224px
  padding: 3px 8px
  border: none
  border-bottom: 1px solid #999999
  outline: none
  text-overflow: ellipsis

  &::placeholder
    color: $gray

  &:active
    outline: none

  &[type="search"]
    &::-webkit-search-cancel-button
      -webkit-appearance: none
      width: 8px
      height: 8px
      background-image: url('../assets/img/svg/clear-input.svg')

label
  margin-right: 8px

.btn
  @media (max-width: $screen-lg)
    padding: 15px 30px
    font-size: 15px
    line-height: 18px

.btn-disabled
  background-color: $gray-light

.order-page
  display: flex
  flex-direction: column
  height: 100%
  box-sizing: border-box

.top
  display: flex
  flex-direction: column

.wrapper
  height: 100%

.header
  align-self: center
  width: 100%
  max-width: 1376px
  padding-right: 64px
  padding-left: 64px
  margin-bottom: 23.5px

  &__logo a
    font-size: 30px
    line-height: 35px

.tabs
  display: flex
  flex-wrap: wrap
  max-width: 1376px
  align-self: center
  margin: 8px auto 7px auto
  padding-left: 96px

  @media (max-width: $screen-md)
    padding-left: 128px

  @media (max-width: $screen-xs)
    padding-left: 32px

  &__item
    display: flex
    align-items: center

    & a
      font-size: 14px
      line-height: 16px
      color: $gray

      &:hover, &:active
        color: $main-accent

      &.active
        color: $main-accent

    &-arrow
      margin-left: 16px
      margin-right: 16px

    &-content
      display: none
      padding-top: 32px

      &.active
        display: block

  &__content-wrapper
    display: flex
    justify-content: space-between
    font-weight: 300
    font-size: 14px
    line-height: 16px
    color: $black
    height: calc(100% - 35px)
    max-width: 1376px
    margin: 0 auto
    padding-left: 96px
    padding-right: 32px

    @media (max-width: $screen-md)
      flex-direction: column
      height: auto
      padding-left: 128px

    @media (max-width: $screen-xs)
      padding-left: 32px

  &__items-content
    width: 72%

    @media (max-width: $screen-md)
      width: 100%

.location
  &__data
    margin-bottom: 45px

    & .input-row:first-child
      margin-bottom: 13px

  &__map
    p
      margin-bottom: 16px

.input
  &-row
    display: flex
    justify-content: flex-start
    align-items: center

    & > label
      text-align: right
      flex: 1
      max-width: 100px

      @media (max-width: 364px)
        flex: 0.4

    & > input
      flex: 1
      max-width: 224px

      @media (max-width: $screen-xs)
        flex: 0.4

.horizontal-line
  border-top: 1px solid #eeeeee

.vertical-line
  height: 100%
  border-left: 1px solid #eeeeee

  @media (max-width: $screen-md)
    display: none

.border--dotted
  border-bottom: 1px dotted #eeeeee

.order
  padding-top: 32px
  padding-left: 32px

  @media (max-width: $screen-md)
    padding-left: 0
    padding-bottom: 50px

  &-wrapper
    position: relative
    width: calc(28% - 32px)

    @media (max-width: $screen-md)
      width: 100%
      max-width: 736px
      padding-top: 0
      padding-left: 0

    & .vertical-line
      position: absolute

  &__title
    font-weight: 500
    font-size: 18px
    line-height: 21px
    padding-bottom: 52px
    text-align: right

  & ul
    padding-bottom: 32px

    & li
      position: relative

      &:before
        content: ''
        position: absolute
        bottom: 2px
        width: 100%
        height: 0
        line-height: 0
        border-bottom: 1px dotted $gray

  &__description, &__value
    position: absolute
    background-color: #fff
    z-index: 2
    bottom: 0

    @media (max-width: $screen-lg)
      font-size: 12px
      line-height: 12px

  &__description
    display: inline
    padding-right: 11px

  &__value
    position: absolute
    max-width: 112px
    right: 0
    text-align: right

    @media (max-width: $screen-lg)
      max-width: 97px

  &__price
    font-weight: 400
    font-size: 16px
    line-height: 16px
    margin-bottom: 47px

    @media (max-width: $screen-lg)
      font-size: 14px
      line-height: 14px

    & span
      font-weight: 500
</style>
