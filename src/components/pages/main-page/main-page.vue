<template>
  <section-header></section-header>
  <section-about-us></section-about-us>
  <section-offer></section-offer>
</template>

<script>
import SectionHeader from './sections/section-header.vue';
import SectionAboutUs from './sections/section-about-us.vue';
import SectionOffer from './sections/section-offer.vue';

export default {
  components: {
    SectionHeader,
    SectionAboutUs,
    SectionOffer,
  },
};
</script>
