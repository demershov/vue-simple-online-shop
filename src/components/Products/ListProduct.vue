<template>
  <v-container>
    <v-layout row wrap>
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
  </v-container>
</template>

<script>
export default {
  computed: {
    myProducts() {
      return this.$store.getters.myProducts
    }
  }
}
</script>