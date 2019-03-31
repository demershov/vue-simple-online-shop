<template>
  <v-container>
    <section class="product mt-3 elevation-10">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img src='https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg' alt="" class="product-img">
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product-info">
            <h5 class="product-title display-1 mb-3 mt-3">
              Lorem ipsum dolor sit amet.
            </h5>
            <p class="product-category title">
              <span class="product-title">
                Производитель:
              </span>Lorem
            </p>
            <p class="product-price title">
              <span class="product-title">Цена: </span>100$
            </p>
            <p class="product-color title">
              <span class="product-title">Цвет:</span>
              <span 
                :title="purple"
                :style="{backgroundColor: 'purple'}"
                class="product-color-bg"
              >
              </span>
            </p>
            <p class="title">
              <span class="product-title">
                Материал:
              </span>Lorem
            </p>
            <div class="title mb-5">
              <p class="product-title mb-2">Описание:</p> Lorem
            </div>
            <v-btn color="primary" class="headline">Редактировать</v-btn>
            <v-btn color="primary" class="headline">Купить</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
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
