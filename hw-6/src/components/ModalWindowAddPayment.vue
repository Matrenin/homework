<template>
  <div class="wrapper">
    <div class="content">
      <div>{{ title }}</div>
      <AddPaymentForm
        v-if="settings.content === 'addPaymentForm'"
        @add-payment="addPayment"
      />
      <AuthComp v-if="settings.content === 'authComp'"/>
      <button class="modal-close" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import AuthComp from './AuthComp.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  components: {
    AddPaymentForm,
    AuthComp
  },
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT']),
    addPayment (data) {
      this.ADD_PAYMENT(data)
    },
    closeModal () {
      this.$modal.hide()
    }
  },
  computed: {
    title () {
      return this.settings?.title || 'Modal window'
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  padding: 18px;
  background: #fff;
  border-radius: 8px;
}
</style>
