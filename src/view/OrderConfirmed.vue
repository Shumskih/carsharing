<template>
  <section class="order-confirmed">
    <app-header inner/>
    <div class="wrapper">
      <div class="tabs-wrapper">
        <div class="horizontal-line"></div>
        <div class="order-number-wrapper">
          <div class="order-number">Заказ номер RU58491823</div>
        </div>
        <div class="horizontal-line"></div>
      </div>
      <section class="tabs__content-wrapper">
        <div class="tabs__items-content">
          <div class="tabs__item-content">
            <div class="total">
              <div class="total__car-info">
                <div class="total__title">Ваш заказ подтверждён</div>
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
              <li>
                <p class="order__description">Модель</p>
                <div class="border--dotted"></div>
                <p class="order__value">Hyndai, i30 N</p>
              </li>
              <li>
                <p class="order__description">Цвет</p>
                <div class="border--dotted"></div>
                <p class="order__value">Голубой</p>
              </li>
              <li>
                <p class="order__description">Длительность аренды</p>
                <div class="border--dotted"></div>
                <p class="order__value">1д 2ч</p>
              </li>
              <li>
                <p class="order__description">Тариф</p>
                <div class="border--dotted"></div>
                <p class="order__value">На сутки</p>
              </li>
              <li>
                <p class="order__description">Полный бак</p>
                <div class="border--dotted"></div>
                <p class="order__value">Да</p>
              </li>
            </ul>
            <div class="order__price"><span>Цена:</span> 16 000 ₽</div>
            <div class="order__button">
              <a href="" class="btn btn-crimson" v-on:click.prevent>Отменить</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  name: 'OrderConfirmed',
  components: {
    AppHeader
  }
}
</script>

<style lang="sass" scoped>
.order-confirmed
  display: flex
  flex-direction: column
  height: 100%

.wrapper
  height: 100%

.tabs
  display: flex
  max-width: 1376px
  align-self: center
  margin: 8px auto 7px auto
  padding-left: 128px

  &-wrapper
    display: flex
    flex-direction: column
    margin: 8px auto 7px auto

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
    height: calc(100% - 60px)
    max-width: 1376px
    margin: 0 auto
    padding-left: 96px
    padding-right: 32px

  &__items-content
    width: 72%

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
      margin-bottom: 16px

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

  &__title
    font-size: 24px
    line-height: 28px
    margin-bottom: 16px

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

.order-number
  margin-left: 96px

  &-wrapper
    width: 100%
    max-width: 1376px
    margin: 0 auto
</style>
