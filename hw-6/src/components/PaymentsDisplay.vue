<template>
  <div class="payments__table">
    <div class="payments__title">
      <h3 v-for="title in titleTable" :key="title"> {{ title }}</h3>
    </div>
    <div class="payments__list" v-for="(paymen, index) in paymentsList" :key="index">
      <p>{{ index + 1 }}</p>
      <p>{{ paymen.date }}</p>
      <p>{{ paymen.category }}</p>
      <p>{{ paymen.value }}</p>
      <!-- <EditCosts/> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
// import EditCosts from './EditCosts.vue'

export default {
  name: 'PlaymentsDisplay',
  components: {
    // EditCosts
  },
  methods: {
    ...mapActions(['addTitleTable']),
    ...mapMutations(['ADD_TITLE_TABLE'])
  },
  computed: {
    ...mapGetters(['titleTable', 'paymentsList'])
  },
  created () {
    this.addTitleTable()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.payments__table {
  max-width: 600px;
  width: 100%;
  margin: 40px 0;
}

.payments__title,
.payments__list {
  display: grid;
  grid-template-columns: 10% 35% 35% 15% 5%;
  padding: 16px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

.payments__title h3:nth-child(1) {
  justify-self: start;
}

.payments__list p:nth-child(1) {
  justify-self: start;
}

.paginations {
  padding: 8px 26px;
  border: 1px solid #ccc;
}

.paginations__box {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
}

.paginations__box button {
  border: none;
  background: transparent;
  margin: 0 6px;
}
</style>
