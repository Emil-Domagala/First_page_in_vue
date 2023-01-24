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
	<section id="aboutUs">
		<div class="container">
			<h2 class="section-title">o nas</h2>
			<div class="aboutUs-wrapper">
				<img
					class="aboutUs-wrapper__img"
					src="../../assets/aboutUs.jpg"
					alt="Mała skalna wysepka z jednym krzaczkiem otoczona wodą z jeziora"
				/>
				<div class="aboutUs-wrapper__text">
					<h3>Niezapomniane przygody</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						www.MMCSchool.pl
					</p>
				</div>
			</div>
		</div>
		<div class="aboutUs-spacing-img">
			<div class="aboutUs-spacing-img__shadow"></div>
			<div class="aboutUs-spacing-img__text">
				<h2>Przygoda dla całej rodziny</h2>
			</div>
		</div>
	</section>
	<section id="offer">
		<h2 class="section-title">oferta</h2>
		<div class="container">
			<div class="offer-wrapper">
				<p class="offer__text">Wybierz jedną z naszych wspaniałych ofert!</p>
				<basic-card> </basic-card>
				<p>
					Sprawdż nasze pozostałe oferty
					<router-link to="/offer" class="special-link">tutaj.</router-link>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
import BasicCard from "../UI/BasicCard.vue";
export default {
	components: {
		BasicCard,
	},
};
</script>

<style scoped>

/* header */
.header-img {
	position: relative;
	width: 100vw;
	height: 330px;
	max-height: calc(100vh - 79px);
	background-image: url("../../assets/header_small.jpg");
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

/* AboutUs */

.aboutUs-wrapper {
	display: flex;
	flex-direction: column;
	margin-bottom: 5rem;
}

.aboutUs-wrapper__img {
	max-width: 100%;
	margin-bottom: 3rem;
	order: 2;
}

.aboutUs-wrapper__text h3 {
	margin-bottom: 1rem;
}
.aboutUs-wrapper__text p {
	margin-bottom: 2rem;
}

.aboutUs-spacing-img {
	position: relative;
	width: 100vw;
	min-height: 210px;
	height: 25vh;
	background-image: url("../../assets/aboutUs_spacing_small.jpg");
	background-size: cover;
	background-position: 50% 50%;
	z-index: 1;
}
.aboutUs-spacing-img__shadow {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
}
.aboutUs-spacing-img__text {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	color: #fff;
	z-index: 3;
}

.aboutUs-spacing-img__text h2 {
	display: block;
	font-size: 2rem;
	font-weight: 600;
	line-height: 120%;
	text-align: center;
	border: 1px solid #fff;
	padding: 2rem 2rem;
}

/* offer */
.offer-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.offer__text {
	margin-bottom: 4rem;
}



/* media */

@media (min-width: 768px) {
	/* header */
	.header-img {
		background-image: url("../../assets/header_big.jpg");
	}
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
		background-image: url(../../assets/aboutUs_spacing_big.jpg);
	}
	.aboutUs-spacing-img__text h2 {
		font-size: 3rem;
		padding: 2.5rem 10vw;
	}
}
</style>
