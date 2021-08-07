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
          >
            <div class="filter__model">
              <ul>
                <li v-for="(filter, index) in modelTypes" :key="index">
                  <input
                    name="model-filter"
                    type="radio"
                    :id="filter.type"
                    :checked="filter.checked"
                  >
                  <label :for="filter.type">
                    {{ filter.label }}
                  </label>
                </li>
              </ul>
            </div>
            <div class="cars-list">
              <div
                :class="['cars-list__car', {' active' : car.checked}]"
                v-for="(car, index) in carsList"
                :key="index"
                @click="setCheckedCar(index)"
              >
                <div class="car-data">
                  <div class="car-name">
                    {{ car.name }}
                  </div>
                  <span class="car-price">
                    {{ car.priceMin }} - {{ car.priceMax }} ₽
                  </span>
                </div>
                  <img
                    :src="require(`@/assets/img/${car.image}`)"
                    alt=""
                    class="car-img"
                  >
              </div>
            </div>
          </div>
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
        <div class="order-wrapper" :class="{ modal: this.modal }">
          <div class="vertical-line"></div>
          <div class="order">
            <h3 class="order__title">
              Ваш заказ:
            </h3>
            <ul>
              <li>
                <span class="order__description">
                  Пункт выдачи
                </span>
                <span class="order__value">
                  Ульяновск, Нариманова 42
                </span>
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
              <a
                href=""
                class="btn btn-disabled"
                v-on:click.prevent
                v-if="isActive('model')">
                Дополнительно
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      class="shopping-basket"
      @click="toggleModal"
      :class="{ close: this.close }"
    ></div>
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
      modal: false,
      close: false,
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
      ],
      modelTypes: [
        {
          type: 'all-models',
          label: 'Все модели',
          checked: true
        },
        {
          type: 'economy',
          label: 'Эконом',
          checked: false
        },
        {
          type: 'premium',
          label: 'Премиум',
          checked: false
        }
      ],
      carsList: [
        {
          name: 'Elantra',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/elantra.jpg',
          checked: false
        },
        {
          name: 'i30 N',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/i-30-n.jpg',
          checked: true
        },
        {
          name: 'Crete',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/creta.jpg',
          checked: false
        },
        {
          name: 'Sonata',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/sonata.jpg',
          checked: false
        },
        {
          name: 'Elantra v.2',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/elantra.jpg',
          checked: false
        },
        {
          name: 'i30 N v.2',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/i-30-n.jpg',
          checked: false
        }
      ]
    }
  },
  methods: {
    setCheckedCar (index) {
      for (let key in this.carsList) {
        if (this.carsList[key].checked) {
          this.carsList[key].checked = false
        }
      }

      this.carsList[index].checked = true
    },
    toggleModal () {
      this.modal = !this.modal
      this.close = !this.close
    },
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
    position: relative
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
    width: calc(28% - 32px)

    @media (max-width: $screen-md)
      display: none
      position: fixed
      top: 0
      right: 0
      width: 320px
      max-width: 320px
      height: 100%
      padding-top: 0
      padding-left: 20px
      padding-right: 20px
      background: rgba(255, 255, 255, 0.9)
      overflow-y: auto
      z-index: 2

    & .vertical-line
      position: absolute

      @media (max-width: $screen-md)
        display: block
        position: fixed
        top: 0
        right: 320px

  &__title
    font-weight: 500
    font-size: 18px
    line-height: 21px
    padding-bottom: 16px
    text-align: right

  & ul
    padding-bottom: 32px

    & li
      position: relative
      height: 35px

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

.filter
  margin-bottom: 32px

  &__title
    margin-bottom: 16px

  &__model
    margin-bottom: 48px

    & ul
      display: flex
      flex-wrap: wrap
      justify-content: flex-start
      margin: 0

      & li
        margin-right: 16px
        margin-bottom: 10px

        & input[type="radio"]
          display: none

          & + label
            display: flex
            align-items: center
            color: $gray

          & + label::before
            content: ''
            width: 12px
            height: 12px
            border: 1px solid $gray
            border-radius: 50%
            background-repeat: no-repeat
            background-position: center center
            background-size: 50% 50%
            margin-right: 8px

          &:checked + label::before
            border: 3px solid $main-accent

          &:checked + label
            color: $black

.cars-list
  display: flex
  flex-wrap: wrap

  &__car
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 368px
    height: 224px
    border: 1px solid $gray-light
    padding: 16px
    cursor: pointer

    @media (max-width: 1170px)
      width: 316px
      height: 193px

    @media (max-width: 808px)
      width: 295px
      height: 180px

    @media (max-width: $screen-sm)
      width: 368px
      height: 224px

    @media (max-width: $screen-xs)
      width: 316px
      height: 193px

    &:hover
      border: 1px solid $gray

    &.active
      border: 1px solid $main-accent
      cursor: default

    & .car-name
      font-size: 18px
      line-height: 21px
      font-weight: 500
      text-transform: uppercase

    & .car-price
      font-size: 14px
      line-height: 16px
      color: $gray

    & .car-img
      height: auto
      width: 100%
      max-width: 256px
      align-self: flex-end

.shopping-basket
  @media (max-width: $screen-md)
    display: block
    position: fixed
    width: 40px
    height: 40px
    right: 40px
    bottom: 40px
    background-image: url('../assets/img/svg/basket.svg')
    background-repeat: no-repeat
    cursor: pointer
    z-index: 2

  &.close
    top: 34px
    right: 274px
    width: 20px
    height: 20px
    background-image: url('../assets/img/svg/close.svg')

    @media (max-width: $screen-xss)
      top: 27px
      right: 279px

.modal
  display: block
</style>
