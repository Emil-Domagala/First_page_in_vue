<template>
  <button class="card__btn" @click="pickedOffer"><slot></slot></button>
</template>

<script>
export default {
  methods: {
    pickedOffer() {
     this.$emit('pickedOfferEmited')
    },
  },
};
</script>

<style scoped>
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
