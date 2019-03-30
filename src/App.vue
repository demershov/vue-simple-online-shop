<template>
  <v-app>
    <the-nav-bar></the-nav-bar>
  </v-app>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheNavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
