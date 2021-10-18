<template>
  <router-link class="country" :to="`/countries/${country.code}`">
    <div class="country__item">{{country.name}}</div>
    <div class="country__item">{{country.currency}}</div>
    <div class="country__item">{{country.phone}}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: {
      require: true,
      type: Object,
    },
    header: {
      type: Boolean
    }
  },
};
</script>

<style scoped>

</style>