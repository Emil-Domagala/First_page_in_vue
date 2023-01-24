<template>
	<nav>
		<the-nav></the-nav>
	</nav>
	<main>
		<router-view></router-view>
	</main>
	<footer>
		<the-footer></the-footer>
	</footer>
</template>

<script>
import TheNav from "./components/TheNav/TheNav.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";

export default {
	components: {
		TheNav,
		TheFooter,
	},

	data() {
		return {
			mainePageOffers: [
				{
					title: "Demo",
					price: "$0",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja poza pakietem", status: false },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
				{
					title: "Standard",
					price: "$99",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja w pakiecie", status: true },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
				{
					title: "Premium",
					price: "$299",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja w pakiecie", status: true },
						feature4: { content: "Opcja w pakiecie", status: true },
						feature5: { content: "Opcja w pakiecie", status: true },
					},
				},
			],
			allOffers: [
				{
					title: "Demo",
					price: "$0",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja poza pakietem", status: false },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
				{
					title: "Standard",
					price: "$99",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja w pakiecie", status: true },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
				{
					title: "Premium",
					price: "$299",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja w pakiecie", status: true },
						feature4: { content: "Opcja w pakiecie", status: true },
						feature5: { content: "Opcja w pakiecie", status: true },
					},
				},
				{
					title: "Demo2",
					price: "$0",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja poza pakietem", status: false },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
				{
					title: "Demo3",
					price: "$0",
					features: {
						feature1: { content: "Opcja w pakiecie", status: true },
						feature2: { content: "Opcja w pakiecie", status: true },
						feature3: { content: "Opcja poza pakietem", status: false },
						feature4: { content: "Opcja poza pakietem", status: false },
						feature5: { content: "Opcja poza pakietem", status: false },
					},
				},
			],
		};
	},
	provide() {
		return {
			mainePageOffers: this.mainePageOffers,
		};
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 62.5%;
	scroll-behavior: smooth;
	scroll-padding: 8em;
}

body {
	font-size: 1.6rem;
	font-family: "Montserrat", sans-serif;
}


section {
	padding-bottom: 6rem;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 180%;
	margin: 0;
}

nav {
	position: sticky;
	top: 0;
	padding: 0;
	z-index: 100;
}

.whiteSpace {
	height: 200vh;
}

.container {
	width: 100vw;
	margin: 0 auto;
	padding: 0 1.5rem;
}

@media (min-width: 768px) {
	.container {
		width: 720px;
	}
}
@media (min-width: 992px) {
	.container {
		width: 960px;
	}
}
@media (min-width: 1200px) {
	.container {
		width: 1140px;
	}
}
@media (min-width: 1400px) {
	.container {
		width: 1320px;
	}
}
</style>
