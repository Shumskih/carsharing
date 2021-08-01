<template>
    <footer class="footer" v-if="showFooter">
      <div class="footer__copyright">© 2016-2019 «Need for drive»</div>
      <div class="footer__phone"><a href="tel: +74952342244">8 (495) 234-22-44</a></div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    showFooter: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="sass">
.footer
  display: flex
  justify-content: space-between
  font-size: 13px
  font-weight: 400
  line-height: 15px
  margin-left: 128px
  margin-right: 64px
  margin-bottom: 32px

  @media (max-width: $screen-md)
    margin-left: 128px
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
</style>
