<template>
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
</template>

<style scoped>
ul {
	display: flex;
	flex-direction: row;
	height: 100%;
	list-style: none;
}

a {
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	color: #000;
	font-size: 2rem;
	transition: color 0.3s, background-color 0.3s;
}

a:hover,
.active {
	color: #fff;
	background-color: #000;
}

li {
	text-align: center;
	padding: 2rem;
	/* width: 11rem; */
	letter-spacing: 1px;
}
</style>
