<template>
  <router-link :to="toLink" class="special-link"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    toLink: String,
  },
};
</script>

<style scoped>
.special-link {
  position: relative;
  text-decoration: none;
  color: #000;
  z-index: 2;
}

.special-link::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -2px;
  width: calc(100% + 4px);
  height: 3px;
  background-color: rgb(0, 221, 118);
  transition: height 0.4s;
  z-index: -1;
}

.special-link:hover::before {
  height: calc(100% + 8px);
}
</style>
