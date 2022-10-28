<template>
  <header class="header">
    <div class="header__box">
      <router-link to="/" class="home-link">Home</router-link>
      <router-link to="/films" class="home-link">Films</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 20px 0;
  background: #000;

  &__box {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.home-link {
  color: #fff;
  text-decoration: none;
}
</style>
