<template>
  <div class="home_root">
    <h2>To visite all country list click below button</h2>
    <router-link class="btn" to="/countries">See all countries List</router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log("inside home");
  },
};
</script>
