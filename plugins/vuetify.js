import Vue from 'vue'
import VeeValidate from 'vee-validate'
import ko from 'vee-validate/dist/locale/ko'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar
} from 'vuetify/lib'
window._ = require('lodash')

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar
  }
})

Vue.use(VeeValidate, {
  locale: 'ko',
  dictionary: {
    ko
  }
})

Vue.use(VueSweetalert2)
