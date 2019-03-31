<template>
  <v-app>
    <the-nav-bar></the-nav-bar>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        :value="true"
        color="error"
        @input="closeError"
      >
        {{ error }}
        <v-btn
          dark
          flat
          @click.native="closeError"
        >
          Закрыть
        </v-btn>
      </v-snackbar>
    </template>
    
  </v-app>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheNavBar
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  }
}
</script>
