<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Добавить новый продукт</h1>
        <v-form class="mb-3" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            name="title" 
            label="Название" 
            type="text"
            v-model="title"
            required
            :rules="[v => !!v ||  'Название обязательно!']"
          >
          </v-text-field>
          <v-text-field
            name="vendor" 
            label="Производитель" 
            type="text"
            v-model="vendor"
          >
          </v-text-field>
          <v-text-field
            name="color" 
            label="Цвет продукта" 
            type="text"
            v-model="color"
          >
          </v-text-field>
          <v-text-field
            name="material" 
            label="Материал продукта" 
            type="text"
            v-model="material"
          >
          </v-text-field>
          <v-text-field
            name="price" 
            label="Цена" 
            type="text"
            required
            v-model="price"
            :rules="[v => !!v ||  'Цена обязательна!']"
          >
          </v-text-field>
          <v-text-field
            name="description" 
            label="Описание" 
            type="text"
            multi-line
            v-model="description"
          >
          </v-text-field>
        </v-form>
        <v-layout class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Загрузить
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="" alt="" height="200px">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              color="primary"
              label="Промоакция"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              class="success"
              @click="createProduct"
            >Сохранить</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    createProduct() {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo
        }
        this.$store.dispatch('createProduct', product)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  },
}
</script>