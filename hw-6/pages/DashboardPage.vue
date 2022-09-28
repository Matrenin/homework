<template>
  <div class="my__costs">
    <header>
      <div class="header">
        <p class="title__costs">My personal costs: {{ totalCosts }}</p>
      </div>
    </header>
    <main>
      <button class="btn__show-modal" @click="addPaymentModal">Add Payment Modal</button>
      <button class="btn__show-modal" @click="authModal">Add Auth Modal</button>
      <PaymentsDisplay/>
    </main>
  </div>
</template>

<script>
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue'
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DashboardPage',
  data: () => ({
    showModal: false,
    modalSetting: {}
  }),
  components: {
    PaymentsDisplay
    // ModalWindowAddPayment
  },
  methods: {
    ...mapActions(['fetchData']),
    addPaymentModal () {
      this.$modal.show({
        title: 'Add new payment',
        content: 'addPaymentForm'
      })
    },
    authModal () {
      this.$modal.show({
        title: 'Autorization',
        content: 'authComp'
      })
    }
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCosts'])
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
header {
  margin: 20px 0;
}

.my__costs {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 90px;
}

.title__costs {
  text-align: start;
  margin: 20px 0px;
}

.btn__show-modal {
  display: flex;
  justify-content: start;
}
</style>
