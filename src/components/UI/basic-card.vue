<template>
  <div class="card" :class="{ 'card-special': title === 'Standard' }">
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
    <button class="card__btn" @click="youChose">Wybierz</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    features: Array,
  },
  methods: {
    youChose() {
      console.log('You chose: ' + this.title);
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
  box-shadow: 0 1px 10px 0px #aaa;
  border-radius: 10px;
  transition: transform 0.4s;
}

/* .card:hover {
	transform: scale(1.1);
} */

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

.card__btn {
  bottom: 0;
  justify-self: flex-end;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  box-shadow: 0 1px 10px 0px #aaa;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  transition: background-color 0.4s;
  cursor: pointer;
}
.card__btn:hover {
  background-color: #ddd;
}

.card-special .card__btn {
  background-color: rgb(0, 221, 118);
}
.card-special .card__btn:hover {
  background-color: #00bb43;
}
</style>
