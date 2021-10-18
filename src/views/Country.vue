<template>
    <Loading v-if="isLoaded">Please wait loding country data...</Loading>
    <template v-else>
      <CountryDetail v-if="country" :country="country" />
      <div v-else>Country not found</div>
    </template>
</template>

<script>
import { GetCountryByCodeAPI } from "@/api";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Loading from "@/components/Loading.vue";
import CountryDetail from "@/components/CountryDetail.vue";
export default {
  components: { CountryDetail, Loading },
  setup(props, context) {
    const route = useRoute();
    const country = ref(null);
    const isLoaded = ref(false);
    onMounted(() => {
      isLoaded.value = true;
      GetCountryByCodeAPI(route.params.code).then((res) => {
        country.value = res;
        isLoaded.value = false;
      });
    });

    return { country, isLoaded };
  },
};
</script>

<style>
</style>