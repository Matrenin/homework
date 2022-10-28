<template>
  <div class="about">
    <HeaderComp/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'

export default {
  name: 'AboutView',
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">

</style>
