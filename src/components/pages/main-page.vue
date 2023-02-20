<template>
  <section-header></section-header>
  <section-about-us></section-about-us>
  <section-offer></section-offer>
</template>

<script>
import SectionHeader from './main-page-sections/section-header.vue';
import SectionAboutUs from './main-page-sections/section-about-us.vue';
import SectionOffer from './main-page-sections/section-offer.vue';

export default {
  components: {
    SectionHeader,
    SectionAboutUs,
    SectionOffer,
  },
};
</script>
