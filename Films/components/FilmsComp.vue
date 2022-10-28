<template>
  <div class="films">
    <div class="film__item"
      v-for="(film, index) of filmsList"
      :key="index"
    >
    <router-link :to="{path: `/films/${film.id}`}" class="link__full-film">
      <p>Подробнее о фильме</p>
      <p class="film__rating">{{ film.rating }}</p>
      <p class="film__title">{{ film.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FilmsComp',
  props: {
    filmsList: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    titleFilm: false
  })
}
</script>

<style lang="scss">
.films {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & h3 {
    align-self: center;
  }
}

.film__item {
  margin-top: 30px;
  align-self: center;
  width: 600px;
  min-height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.film__rating {
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 15px;
  background: yellow;
}

.film__title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #E8EFEE;
  padding: 10px 0;
  text-align: center;
}

.link__full-film {
  text-decoration: none;
  color: #2c3e50;
}
</style>
