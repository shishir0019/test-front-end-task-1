<template>
  <div class="root">
    <div class="item">
      <img width="80" :src="logo.hourglassEmpty" alt="logo">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const hourglassEmpty = require("@/assets/icon/hourglass_empty.svg");
    const logo = { hourglassEmpty };

    return { logo };
  }
};
</script>

<style scoped>
.root {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000070;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  font-size: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>