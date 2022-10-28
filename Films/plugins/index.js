export default {
  install (Vue) {
    if (this.installed) return

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (payment) {
        this.EventBus.$emit('show', payment)
      },

      hide () {
        this.EventBus.$emit('hide')
      }
    }
  }
}
