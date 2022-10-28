<template>
  <div class="allFilms">
    <h3>Выберите фильм на свой вкус</h3>
    <FilmComp
      :filmsList="filmsList"
    />
  </div>
</template>

<script>
import FilmComp from '../components/FilmsComp.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AllFilmsPage',
  components: {
    FilmComp
  },
  methods: {
    ...mapActions(['fetchFilms'])
  },
  computed: {
    ...mapGetters(['filmsList'])
  },
  created () {
    this.fetchFilms()
  }
}
</script>

<style lang="scss">
.allFilms {
  max-width: 1200px;
  width: 100%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;

  & h3 {
    text-align: center;
  }
}
</style>
