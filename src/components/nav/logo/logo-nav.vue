<template>
	<router-link :to="{ name: 'home', hash: '#header' }">
		<div class="navbar-logo">
			<div class="navbar-logo--icon">
				<font-awesome-icon icon="fa-solid fa-tree" />
			</div>
			<div class="navbar-logo--text">Forest</div>
		</div>
	</router-link>
</template>

<style scoped>
a {
	display: block;
	text-decoration: none;
}
.navbar-logo {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1.5rem;
	font-size: 2.5rem;
	color: #000;
}
.navbar-logo--icon {
	margin-right: 1rem;
	text-align: center;
}
.navbar-logo--text {
	font-weight: 200;
	font-size: 3rem;
}
</style>
