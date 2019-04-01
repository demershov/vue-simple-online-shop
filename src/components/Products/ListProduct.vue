<template>
  <v-container>
    <v-layout row v-if="!loading && myProducts.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Мои продукты</h1>
        <v-card 
          class="elevation-10 mb-2"
          v-for="(product, index) in myProducts" 
          :key="index"
        >
          <v-layout>
            <v-flex xs4>
              <v-img
                :src="product.imageSrc"
                height="250px"
              >
              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text-primary">{{product.title}}</h2>
                <p> {{ product.description }} </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/product/' + product.id"
                >Открыть</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else-if="!loading && myProducts.length === 0">
        <v-flex xs12 class="text-xs-center">
          <h1 class="text-primary">У вас нет товаров</h1>
        </v-flex>
    </v-layout>
    <v-layout v-else>
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myProducts() {
      return this.$store.getters.myProducts
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>