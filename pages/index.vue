<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>

        <v-text-field v-validate="{required: true, regex: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/}" v-model="vueData.email" :error-messages="errors.collect('ID')" data-vv-name="ID" prepend-icon="person" label="ID" autofocus/>

        <v-btn color="success" @click="showAlert">Hello world</v-btn>

        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
            >documentation</a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              title="chat"
            >discord</a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >issue board</a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
          >Nuxt Documentation</a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
          >Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      vueData: {
        email: null
      }
    }
  },
  methods: {
    showAlert () {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!')

      // Use Lodash
      console.log(window._.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))

      // Use Axios & Interceptor Test
      // https://dog.ceo/api/breeds/list/all
      this.$axios
        .get('https://dog.ceo/api/breeds/list/all2')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
