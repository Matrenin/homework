<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/notfound">Not Found</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
    <ModalWindowAddPayment
      v-if="showModal"
      :settings="modalSettings"
    />
  </div>
</template>

<script>
import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  margin: 0 10px;
}
</style>
