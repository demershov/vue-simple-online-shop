import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    user,
    common
  }
})