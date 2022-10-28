<template>
  <div class="filmFull">
    <h3>Назваине: {{ film.title }}</h3>
    <p>Режиссер: {{ film.producer }}</p>
    <p>Рейтинг: {{ film.rating }}</p>
    <p>Жанр: {{ film.genre }}</p>
    <p>Год: {{ film.year }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilmPage',
  data: () => ({
    film: null
  }),
  computed: {
    ...mapGetters(['filmsList'])
  },
  created () {
    const film = this.filmsList.find(el => el.id === this.$route.params.id)
    this.film = film
  }
}
</script>

<style lang="scss">
.filmFull {
  max-width: 900px;
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;
}
</style>
