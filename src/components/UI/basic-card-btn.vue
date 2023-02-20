<template>
  <button class="btn" :class='isVariable' @click="pickedOffer"><slot></slot></button>
</template>

<script>
export default {
    props:{
        isVariable: String
    },
  methods: {
    pickedOffer() {
     this.$emit('pickedOfferEmited')
    },
  },
};
</script>

<style scoped>
.btn {
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
.btn:hover {
  background-color: #ddd;
}

.btn-special {
  background-color: rgb(0, 221, 118);
}
.btn-special:hover {
  background-color: #00bb43;
}
</style>
