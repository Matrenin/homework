<template>
  <div class="edit-costs">
    <button class="btn__edit">
      <img src="../assets/threeDots.png" alt="three dots" height="20">
    </button>
    <div class="edit-costs__content">
      <div class="edit">Редактировать</div>
      <div class="delete">Удалить</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCosts'
}
</script>

<style scoped>
.btn__edit {
  width: 8px;
  height: 20px;
}

.edit-costs {
  position: relative;
}

.btn__edit {
  background: transparent;
  border: none;
  cursor: pointer;
}

.edit-costs__content {
  position: absolute;
  top: 30px;
  left: -120px;
  padding: 8px 16px;
  border: 1px solid black;
  z-index: 3;
  background: #fff;
}
</style>
