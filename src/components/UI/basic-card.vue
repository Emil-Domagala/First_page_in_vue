<template>
  <div class="card">
    <div class="card-content-wrapper">
      <p class="card__title">{{ title }}</p>
      <p class="card__price">${{ price }}</p>
      <div class="card__options--wrapper">
        <div
          class="card__option"
          :class="{ 'card__option--disactive': !feature.status }"
          v-for="feature in features"
        >
          <font-awesome-icon icon="fa-solid fa-check" v-if="feature.status" />
          <font-awesome-icon icon="fa-solid fa-minus" v-if="!feature.status" />
          <p>{{ feature.content }}</p>
        </div>
      </div>
    </div>
    <basic-card-btn
      @picked-offer-emited="consoleLogPickedOffer"
      :isVariable="variableBtn"
      >Wybierz!</basic-card-btn
    >
  </div>
</template>

<script>
import basicCardBtn from './basic-card-btn.vue';

export default {
  components: {
    basicCardBtn,
  },
  props: {
    title: String,
    price: Number,
    features: Array,
  },
  methods: {
    consoleLogPickedOffer() {
      console.log('You chosed: ' + this.title);
    },
  },
  computed: {
    variableBtn() {
      if (this.title === 'Standard') {
        return 'btn-special';
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  padding: 2rem 3rem;
  background-color: #fff;
  box-shadow: 0 1px 10px 0px #aaa;
  border-radius: 10px;
}

.card-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.card__title {
  font-size: 2.4rem;
  font-weight: 400;
}

.card__price {
  font-size: 4rem;
  font-weight: 600;
}

.card__option {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.card__option--disactive {
  color: #aaa;
}

.fa {
  font-size: 1.2rem;
}

.fa-check {
  color: rgb(0, 201, 0);
}
</style>
