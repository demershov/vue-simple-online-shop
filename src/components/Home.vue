<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel
            delimiter-icon="stop"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
          >
            <v-carousel-item 
              v-for="(product, index) in promoProducts" 
              :key="index"
              :src="product.imageSrc"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex 
          xs12
          sm6
          md4
          v-for="(product, index) in products" 
          :key="index"
        >
          <v-card>
            <router-link 
              aria-label="product.title"
              :to="'/product/' + product.id"
            >
              <v-img height="350px"
                :src="product.imageSrc">
              </v-img>
            </router-link>

            <v-card-title primary-title>
              <div>
                <h3 class="card_heading heading">{{ product.title }}</h3>
                <div class="card_describe">
                  <p class="subheading">{{ product.description.substring(0, 50) }}...</p>
                  <p class="subheading card_price"><span class="title">Цена: </span>{{ product.price }}</p>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" round outline :to="'/product/' + product.id">Описание</v-btn>
              <app-buy-dialog :product="product"></app-buy-dialog>
              <!-- <v-btn dark color="light-blue darken-4" round>В корзину</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoProducts() {
      return this.$store.getters.promoProducts
    },
    products() {
      return this.$store.getters.products
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .card_heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }

  .card_price {
    color: #cc0f1b;
    font-size: 18px;
  }
</style>
