<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-8">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field 
                prepend-icon="person" 
                name="email" 
                label="Почта" 
                type="text"
                v-model="email"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field 
                prepend-icon="lock" 
                name="password" 
                label="Пароль" 
                id="password" 
                type="password"
                v-model="password"
                :counter="8"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-text-field 
                prepend-icon="repeat" 
                name="confirm-password" 
                label="Повторите пароль" 
                id="password" 
                type="password"
                v-model="confirmPassword"
                :counter="8"
                :rules="confirmPasswordRules"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click="onSubmit"
              :disabled="!valid || loading"
              :loading="loading"
            >
            Создать
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'Логин обязателен.',
        v => /.+@.+/.test(v) || 'Попробуйте другую почту'
      ],
      passwordRules: [
        v => !!v || 'Пароль обязателен.',
        v => (v && v.length <= 8) || 'Длина пароля должна быть равной или меньше 8 символам.'
      ],
      confirmPasswordRules: [
        v => !!v || 'Подтверждение пароля обязателено.',
        v => v === this.password || 'Пароли должны совпадать.'
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>