<template>
  <section id="offer">
    <h2 class="section-title">oferta</h2>
    <div class="container">
      <div class="offer-wrapper">
        <p class="offer__text">Wybierz jedną z naszych wspaniałych ofert!</p>
        <div class="cards">
          <basic-card
            v-for="mainePageOffer in mainePageOffers"
            :key="mainePageOffer.title"
            :title="mainePageOffer.title"
            :price="mainePageOffer.price"
            :features="mainePageOffer.features"
          >
          </basic-card>
        </div>
        <p>
          Sprawdż nasze pozostałe oferty
          <!-- <router-link to="/offer" class="special-link">tutaj.</router-link> -->
          <basicLink :toLink="'/offer'">tutaj.</basicLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import basicCard from '../../../UI/basic-card.vue';
import basicLink from '../../../UI/basic-link.vue';
export default {
  components: {
    basicCard,
    basicLink,
  },
  inject: ['mainePageOffers'],
};
</script>

<style scoped>
.offer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.offer__text {
  margin-bottom: 4rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
}

/* media */

@media (min-width: 768px) {
  /* aboutUs */
  .aboutUs-wrapper {
    flex-direction: row;
    align-items: flex-start;
  }

  .aboutUs-wrapper__img {
    max-width: 50%;
    margin-bottom: 0rem;
    order: 0;
    padding-right: 4rem;
  }

  .aboutUs-wrapper__text p {
    margin-bottom: 0rem;
  }
  .aboutUs-spacing-img {
    background-image: url(../../../assets/aboutUs_spacing_big.jpg);
  }
  .aboutUs-spacing-img__text h2 {
    font-size: 3rem;
    padding: 2.5rem 10vw;
  }

  .cards {
    flex-wrap: nowrap;
  }
}
</style>
