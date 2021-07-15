<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')

a
  text-decoration: none

#app
  display: flex
  font-family: 'Roboto', sans-serif
  font-weight: 700
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  height: 100vh

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

</style>
