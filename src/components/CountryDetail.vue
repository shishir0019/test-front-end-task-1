<template>
  <div>
    <div class="header header--inline">
      <div class="header__item">
        <router-link class="btn" style="width: 200px;" to="/countries"> <img :src="logo.backArrow" alt="logo"> Back to countries list</router-link>
      </div>
      <div class="header">
        <h3>Detail of {{country.name}}</h3>
      </div>
    </div>
    <div class="country_detail">
      <h2 class="header">{{country.name}}</h2>
        <div class="country_detail__item"><div>Name</div><div>{{country.name}}</div></div>
        <div class="country_detail__item"><div>Native</div><div>{{country.native}}</div></div>
        <div class="country_detail__item"><div>Phone</div><div>{{country.phone}}</div></div>
        <div class="country_detail__item"><div>Continent</div><div>{{country.continent}}</div></div>
        <div class="country_detail__item"><div>Capital</div><div>{{country.capital}}</div></div>
        <div class="country_detail__item"><div>Currency</div><div>{{country.currency}}</div></div>
        <div class="country_detail__item"><div>Languages</div><div>{{country.languages}}</div></div>
        <div class="country_detail__item"><div>Emaoji</div><div>{{country.emoji}}</div></div>
        <div class="country_detail__item"><div>EmojiU</div><div>{{country.emojiU}}</div></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      require: true,
      type: Object,
    },
  },
  setup(){
    const backArrow = require("@/assets/icon/arrow_back.svg");
    const logo = { backArrow };

    return { logo };
  }
};
</script>
