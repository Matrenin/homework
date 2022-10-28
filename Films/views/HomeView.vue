<template>
  <div class="home">
    <h1>Онлайн кинотеатр</h1>
    <router-link to="/films" class="home-link">Список фильмов</router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  background: #011;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-link {
  padding: 12px 28px;
  background: #ccc;
  border-radius: 6px;
  color: #000;
  text-decoration: none;
}
</style>
