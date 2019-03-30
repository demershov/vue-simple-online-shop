<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-8">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Авторизация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field 
                prepend-icon="person" 
                name="login" 
                label="Логин" 
                type="text"
                v-model="login"
                :rules="loginRules"
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >
            Войти
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
      login: '',
      password: '',
      valid: false,
      loginRules: [
        v => !!v || 'Логин обязателен.',
        v => (v && v.length <= 6) || 'Длина логина должна быть меньше 6 символам.'
      ],
      passwordRules: [
        v => !!v || 'Пароль обязателен.',
        v => (v && v.length <= 8) || 'Длина пароля должна быть равной или меньше 8 символам.'
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password
        }
        console.log(user)
        
      }
    }
  },
}
</script>