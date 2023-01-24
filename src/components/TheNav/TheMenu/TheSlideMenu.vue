<template>
	<div class="slideMenu" :class="'slideMenu' + showMenuClass">
		<ul>
			<router-link :to="{ name: 'home', hash: '#header' }">
				<li>Home</li>
			</router-link>
			<router-link :to="{ name: 'home', hash: '#aboutUs' }">
				<li>O nas</li>
			</router-link>
			<router-link :to="{ name: 'home', hash: '#offer' }"
				><li>Oferta</li></router-link
			>
			<router-link to="contact">
				<li>Kontakt</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["showMenuClass"],
};
</script>

<style scoped>
.slideMenu {
	position: fixed;
	top: 79px;
	left: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 79px);
	width: 100vw;
	background-color: #fff;
	transition: left 0.4s;
}
.slideMenu--active {
	left: 0;
}
ul {
	list-style: none;
	margin-top: 35px;
}

li {
	padding: 1rem;
	letter-spacing: 1px;
	text-align: center;
	color: #000;
	font-size: 2rem;
}

a {
	text-decoration: none;
}
</style>
