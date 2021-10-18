<template>
  <div class="header header--inline">
    <div class="header__item">
      <router-link class="btn" style="width: 150px;" to="/"> <img :src="logo.backArrow" alt="logo"> Back to home</router-link>
    </div>
    <div class="header">
      <h3>List of counties</h3>
    </div>
  </div>
  <div>
    <Loading v-if="isLoaded">Please wait loding country list...</Loading>
    <template v-else>
      <div class="country--header">
        <div class="country__item">Name</div>
        <div class="country__item">Currency</div>
        <div class="country__item">Aria Code</div>
      </div>
      <hr>
      <Country v-for="(country, index) in countries" :country="country" :key="`country-list-${index}`"/>
    </template>
  </div>
</template>
<script>
import { GetCountriesAPI } from "@/api";
import { ref, onMounted } from "vue";
import Loading from "@/components/Loading.vue";
import Country from "@/components/Country.vue";
export default {
  components: { Loading, Country },
  setup(props, context) {
    const backArrow = require("@/assets/icon/arrow_back.svg");
    const logo = { backArrow };
    const isLoaded = ref(false);
    const countries = ref([]);
    onMounted(() => {
      isLoaded.value = true;
      GetCountriesAPI().then((res) => {
        countries.value = res;
        isLoaded.value = false;
      });
    });
    return { logo, isLoaded, countries };
  },
};
</script>