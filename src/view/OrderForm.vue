<template>
  <section class="order-page">
    <app-header/>
    <div class="wrapper">
      <div class="tabs-wrapper">
        <div class="horizontal-line"></div>
        <ul class="tabs">
          <li class="tabs__item" v-for="(orderStep, index) in orderSteps" :key="index">
            <a :href="orderStep.href" @click.prevent="setActive(trimSharpFromHref(orderStep.href))" :class="{ active: isActive(trimSharpFromHref(orderStep.href)) }">{{ orderStep.name }}</a>
            <icon v-if="!isLastOrderStep(index)" class="tabs__item-arrow" name="order-tab-arrow" width="6" height="8" viewBox="0 0 6 8" />
          </li>
        </ul>
        <div class="horizontal-line"></div>
      </div>
      <section class="tabs__content-wrapper">
        <div class="tabs__items-content">
          <div class="tabs__item-content" :class="{ 'active': isActive('location') }" id="location">
            <div class="location__data">
              <div class="input-row">
                <label for="city">Город</label>
                <input type="search" id="city" placeholder="Начните вводить город">
              </div>
              <div class="input-row">
                <label for="pick-up-point">Пункт выдачи</label>
                <input type="search" id="pick-up-point" placeholder="Начните вводить пункт выдачи">
              </div>
            </div>
            <div class="location__map">
              <p>Выбрать на карте:</p>
              <img src="@/assets/img/map.jpg" alt="">
            </div>
          </div>
          <div class="tabs__item-content" :class="{ 'active': isActive('model') }" id="model">
            <div class="filter__model">
              <ul>
                <li v-for="(filter, index) in modelTypes" :key="index">
                  <input name="model-filter" type="radio" :id="filter.type" :checked="index === 0">
                  <label :for="filter.type">{{ filter.label }}</label>
                </li>
              </ul>
            </div>
            <div class="cars-list">
              <div :class="['cars-list__car', {' active' : index === 1}]" v-for="(car, index) in carsList" :key="index">
                <div class="car-data">
                  <div class="car-name">{{ car.name }}</div>
                  <span class="car-price">{{ car.priceMin }} - {{ car.priceMax }} ₽</span>
                </div>
                <img :src="require(`@/assets/img/${car.image}`)" alt="" class="car-img">
              </div>
            </div>
          </div>
          <div class="tabs__item-content" :class="{ 'active': isActive('additional') }" id="additional">
            <div class="filter filter__color">
              <div class="filter__title">Цвет</div>
              <ul>
                <li>
                  <input name="color-filter" type="radio" id="all-colors" checked>
                  <label for="all-colors">Любой</label>
                </li>
                <li v-for="(filter, index) in colors" :key="index">
                  <input name="color-filter" type="radio" :id="filter.type">
                  <label :for="filter.type">{{ filter.label }}</label>
                </li>
              </ul>
            </div>
            <div class="filter filter__date">
              <div class="filter__title">Дата аренды</div>
              <div class="filter__data">
                <div class="input-row">
                  <label>С</label>
                  <date-picker v-model="datePickerFrom" type="datetime" placeholder="Введите дату и время" id="date-from" format="DD.MM.YYYY HH:mm" />
                </div>
                <div class="input-row">
                  <label>По</label>
                  <date-picker v-model="datePickerTo" type="datetime" placeholder="Введите дату и время" id="date-from" format="DD.MM.YYYY HH:mm" />
                </div>
              </div>
            </div>
            <div class="filter filter__tariff">
              <div class="filter__title">Тариф</div>
              <ul>
                <li v-for="(tariff, index) in tariffs" :key="index">
                  <input name="tariff-filter" type="radio" :id="tariff.type" :checked="tariff.checked">
                  <label :for="tariff.type">{{ tariff.name }}, {{ tariff.price }}</label>
                </li>
              </ul>
            </div>
            <div class="filter filter__additional">
              <div class="filter__title">Доп услуги</div>
              <ul>
                <li v-for="(service, index) in additionalServices" :key="index">
                  <input name="tariff-filter" type="checkbox" :id="service.id">
                  <label :for="service.id">{{ service.name }}, {{ service.price }}</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="tabs__item-content" :class="{ 'active': isActive('total') }" id="total">
            <div class="total">
              <div class="total__car-info">
                <div class="total__car-manufacturer">Hyndai, i30 N</div>
                <div class="total__car-number">K 761 HA 73</div>
                <div class="total__car-fuel"><span>Топливо</span> 100%</div>
                <div class="total__car-date"><span>Доступна с</span> 12.06.2019 12:00</div>
              </div>
              <div class="total__car-img">
                <img src="@/assets/img/cars/i-30-n.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="order-wrapper">
          <div class="vertical-line"></div>
          <div class="order">
            <h3 class="order__title">Ваш заказ:</h3>
            <ul>
              <li>
                <p class="order__description">Пункт выдачи</p>
                <div class="border--dotted"></div>
                <p class="order__value">Ульяновск, Нариманова 42</p>
              </li>
            </ul>
            <div class="order__price"><span>Цена:</span> от 8 000 до 12 000 ₽</div>
            <div class="order__button">
              <a href="" class="btn btn-disabled" v-on:click.prevent v-if="isActive('location')">Выбрать модель</a>
              <a href="" class="btn btn-disabled" v-on:click.prevent v-if="isActive('model')">Дополнительно</a>
              <a href="" class="btn btn-disabled" v-on:click.prevent v-if="isActive('additional')">Итого</a>
              <a href="" class="btn btn-standard" v-on:click.prevent v-if="isActive('total')" @click="confirmNewOrder()">Заказать</a>
            </div>
          </div>
        </div>
      </section>
      <div class="confirm-order__wrapper" v-if="confirmOrder">
        <div class="confirm-order">
          <div>Подтвердить заказ</div>
          <div class="btn-group">
            <router-link :to="{ name: 'OrderConfirmed' }" class="btn btn-standard">Забронировать</router-link>
            <a href="#" v-on:click.prevent class="btn btn-crimson" @click="confirmNewOrder()">Вернуться</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import Icon from '@/components/Icon'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'Order',
  components: {
    AppHeader,
    Icon,
    DatePicker
  },
  data () {
    return {
      datePickerFrom: null,
      datePickerTo: null,
      confirmOrder: false,
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
          label: 'Все модели'
        },
        {
          type: 'economy',
          label: 'Эконом'
        },
        {
          type: 'premium',
          label: 'Премиум'
        }
      ],
      carsList: [
        {
          name: 'Elantra',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/elantra.jpg'
        },
        {
          name: 'i30 N',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/i-30-n.jpg'
        },
        {
          name: 'Crete',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/creta.jpg'
        },
        {
          name: 'Sonata',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/sonata.jpg'
        },
        {
          name: 'Elantra v.2',
          priceMin: '12 000',
          priceMax: '25 000',
          image: 'cars/elantra.jpg'
        },
        {
          name: 'i30 N v.2',
          priceMin: '10 000',
          priceMax: '32 000',
          image: 'cars/i-30-n.jpg'
        }
      ],
      colors: [
        {
          type: 'red',
          label: 'Красный'
        },
        {
          type: 'blue',
          label: 'Голубой'
        }
      ],
      tariffs: [
        {
          name: 'Поминутно',
          type: 'minute',
          price: '7₽/мин',
          checked: true
        },
        {
          name: 'На сутки',
          type: 'day',
          price: '1999₽/сутки',
          checked: false
        }
      ],
      additionalServices: [
        {
          name: 'Полный бак',
          id: 'full-petrol',
          price: '500р'
        },
        {
          name: 'Детское кресло',
          id: 'baby-chair',
          price: '200р'
        },
        {
          name: 'Правый руль',
          id: 'right-hand-drive',
          price: '1600р'
        }
      ]
    }
  },
  methods: {
    confirmNewOrder () {
      this.confirmOrder = !this.confirmOrder
    },
    closeConfirmOrder () {
      return true
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
input, .mx-input
  width: 224px
  padding: 3px 8px
  border: none
  border-bottom: 1px solid #999999
  outline: none

  &::placeholder
    color: $gray

  &:active
    outline: none

  &[type="search"]
    &::-webkit-search-cancel-button
      -webkit-appearance: none
      width: 8px
      height: 8px
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z' fill='%23121212'/%3E%3C/svg%3E")

label
  margin-right: 8px

.btn-disabled
  background-color: $gray-light

.mx-input
  box-shadow: none
  height: inherit
  width: 267px
  margin-bottom: 13px
  border-radius: 0

  &:hover, &:focus
    border-bottom: 1px solid #999999

.mx-icon-clear
  font-size: 14px
  right: -55px
  color: $black
  top: 15px

.mx-icon-calendar
  display: none

.order-page
  display: flex
  flex-direction: column
  height: 100%

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
  padding-left: 128px
  margin-bottom: 23.5px

  &__logo a
    font-size: 30px
    line-height: 35px

.tabs
  display: flex
  max-width: 1376px
  align-self: center
  margin: 8px auto 7px auto
  padding-left: 128px

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
    padding-left: 128px
    padding-right: 64px

  &__items-content
    width: 72%

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
      flex: 0.11

    & > input
      flex: 0.3

.horizontal-line
  border-top: 1px solid #eeeeee

.vertical-line
  height: 100%
  border-left: 1px solid #eeeeee

.border--dotted
  border-bottom: 1px dotted #eeeeee

.order
  padding-top: 32px
  padding-left: 32px

  &-wrapper
    position: relative
    width: calc(28% - 32px)

    & .vertical-line
      position: absolute

  &__title
    font-weight: 500
    font-size: 18px
    line-height: 21px
    margin-bottom: 26px
    text-align: right

  & ul
    padding-bottom: 32px

    & li
      display: flex
      align-items: flex-end

  &__description
    flex: 2

  & .border--dotted
    flex: 1

  &__value
    flex: 2
    margin-left: 11px
    text-align: right
    color: $gray

  &__price
    font-weight: 400
    font-size: 16px
    line-height: 16px
    margin-bottom: 47px

    & span
      font-weight: 500

.filter
  margin-bottom: 32px

  &__title
    margin-bottom: 16px

  &__model, &__color, &__tariff, &__additional
    margin-bottom: 48px

    & ul
      display: flex
      justify-content: flex-start
      margin: 0

      & li
        margin-right: 16px

        & input[type="radio"]
          display: none

          &+label
            display: flex
            align-items: center
            color: $gray

          &+label::before
            content: ''
            width: 12px
            height: 12px
            border: 1px solid $gray
            border-radius: 50%
            background-repeat: no-repeat
            background-position: center center
            background-size: 50% 50%
            margin-right: 8px

          &:checked+label::before
            border: 3px solid $main-accent

          &:checked+label
            color: $black

  &__tariff
      & ul
        display: flex
        flex-direction: column

        & li
          margin-bottom: 8px

  &__additional
    & ul
      display: flex
      justify-content: flex-start
      flex-direction: column
      margin: 0

      & li
        margin-bottom: 8px

        & input[type="checkbox"]
          display: none

          &+label
            position: relative
            display: flex
            align-items: center
            color: $gray
            margin-left: 20px

          &+label::before
            position: absolute
            content: ''
            left: -25px
            width: 24px
            height: 24px
            background-repeat: no-repeat
            background-position: center center
            background-size: 50% 50%
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='0.5' y='0.5' width='11' height='11' stroke='%23999999'/%3e%3c/svg%3e")
            margin-right: 8px

          &:checked+label::before
            position: absolute
            left: -26px
            width: 28px
            height: 28px
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='0.5' y='0.5' width='11' height='11' stroke='%230EC261'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.625 3.33333L2 5L6.875 10L15 1.66667L13.375 0L6.875 6.66667L3.625 3.33333Z' fill='%23121212'/%3e%3c/svg%3e")

          &:checked+label
            color: $black

  &__data
    & .input-row
        & > label
          flex: 0.02

        & > input
          flex: 0.3

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
      width: 256px
      height: 116px
      align-self: flex-end

.total
  display: flex
  justify-content: space-between
  align-items: center

  &__car
    &-info
      font-weight: 400
      font-size: 14px
      line-height: 16px

    &-manufacturer
      font-size: 18px
      line-height: 21px
      margin-bottom: 8px

    &-number
      display: inline-block
      border: 1px solid $gray
      border-radius: 4px
      padding: 4px 8px 2px
      margin-bottom: 8px

    &-fuel, &-date
      font-weight: 300
      margin-bottom: 8px

      & span
        font-weight: 700

  &__car-img
    width: 50%

    & img
      width: 256px
      height: 116px

.confirm-order
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  align-items: center
  flex-direction: column

  & div
    font-weight: 400
    font-size: 24px
    line-height: 28px
    color: $black
    margin-bottom: 32px

  & .btn-group
    display: flex
    justify-content: center

    & .btn-crimson
      border-radius: 4px

    & a
      margin-right: 16px

  &__wrapper
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    background: rgba(255, 255, 255, 0.9)
</style>
