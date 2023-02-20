<template>
  <section id="header">
    <div class="header-img">
      <div class="header-img__shadow"></div>
      <div class="header-img__text">
        <div class="container">
          <p>Forest Group</p>
          <h1>Najpiękniejszy park w Twojej okolicy!</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header-img {
  position: relative;
  width: 100vw;
  height: 330px;
  max-height: calc(100vh - 79px);
  background-image: url('../../../assets/header_small.jpg');
  background-size: cover;
  background-position: 50% 70%;
  z-index: 1;
}
.header-img__shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.header-img__text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 3;
}

.header-img__text p {
  font-size: 2rem;
  line-height: 120%;
}
.header-img__text h1 {
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 120%;
}

@media (min-width: 768px) {
  .header-img {
    background-image: url('../../../assets/header_big.jpg');
  }
}
</style>
