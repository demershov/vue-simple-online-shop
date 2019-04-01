<template>
  <v-container>
    <section class="product mt-3 elevation-10" v-if="!loading">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img :src='product.imageSrc' alt="" class="product-img">
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product-info">
            <h5 class="product-title display-1 mb-3 mt-3">
              {{product.title}}
            </h5>
            <p class="product-category title">
              <span class="product-title">
                Производитель:
              </span>{{ product.vendor.charAt(0).toUpperCase() + product.vendor.substr(1) }}
            </p>
            <p class="product-price title">
              <span class="product-title">Цена: </span>${{ product.price }}
            </p>
            <p class="product-color title">
              <span class="product-title">Цвет:</span>
              <span 
                :title="product.color"
                :style="{backgroundColor: product.color}"
                class="product-color-bg"
              >
              </span>
            </p>
            <p class="title">
              <span class="product-title">
                Материал:
              </span> {{ product.material.charAt(0).toUpperCase() + product.material.substr(1) }}
            </p>
            <div class="title mb-5">
              <p class="product-title mb-2">Описание:</p> {{ product.description }}
            </div>
            <v-spacer></v-spacer>
            <edit-product :product=product v-if="isOwner"></edit-product>
            <app-buy-dialog :product="product"></app-buy-dialog>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section v-else class="text-xs-center">
      <v-progress-circular
        :size="100"
        :width="4"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </section>
  </v-container>
</template>

<script>
import EditProduct from './EditProduct'
export default {
  props: {
    id: String,
  },
  components: {
    EditProduct
  },
  computed: {
    product() {
      const id = this.id
      return this.$store.getters.productById(id)
    },
    loading() {
      return this.$store.getters.loading
    },
    isOwner() {
      return this.product.ownerId === this.$store.getters.user.id
    }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #1c77ad;
  padding: 30px;
  margin-bottom: 100px;
}

.product-img {
  height: 100%;
  width: 550px;
}

.product-info {
  margin-left: 50px;
}

.product-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #1875d0;
  margin-bottom: 0;
}

.product-price {
  color: red;
}

.product-color-bg {
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #2b2b2b;
  border-radius: 10px;
}
</style>
