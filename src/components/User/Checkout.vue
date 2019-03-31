<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-secondary mb-3">Заказы</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-tile
            avatar
            v-for="(order, index) in orders" 
            :key="index"
          >
            <v-list-tile-action>
              <v-checkbox
              color="success"
              :input-value="order.done"
              @change="markDone(order)"
              >
            </v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn 
                class="primary"
                :to="'/product/' + order.productId"
              >Открыть
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 'test',
          name: 'Konstantin',
          phone: '22-22-22',
          productId: '1',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone(order) {
      order.done = true
    }
  },
}
</script>