<template>
	<div class="top-footer">
		<div class="container top-footer--wrapper">
			<div class="footer__logo--wrapper">
				<div class="footer__logo--icon">
					<font-awesome-icon icon="fa-solid fa-tree" />
				</div>
				<div class="footer__logo--text">Forest</div>
			</div>
			<div class="footer__sections--wrapper">
				<div class="footer__section--wrapper">
					<h3>O nas</h3>
					<a href="#" rel="noopener noreferrer">Historia</a>
					<a href="#" rel="noopener noreferrer">Parki</a>
					<a href="#" rel="noopener noreferrer">Opinie</a>
				</div>
				<div class="footer__section--wrapper">
					<h3>Nasza firma</h3>
					<a href="#" rel="noopener noreferrer">Praca</a>
					<a href="#" rel="noopener noreferrer">Kadry</a>
					<a href="#" rel="noopener noreferrer">Zarząd</a>
				</div>
				<div class="footer__section--wrapper">
					<h3>Dokumenty</h3>
					<a href="#" rel="noopener noreferrer">Wnioski</a>
					<a href="#" rel="noopener noreferrer">Rezerwacje</a>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom-footer">
		<p>&copy;{{ currentYear }} Forest Group Company Ltd.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear(),
		};
	},
};
</script>

<style scoped>
.top-footer {
	background-color: rgb(240, 239, 239);
	border-bottom: 1px solid #bbb;
}
.top-footer--wrapper {
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
}

.footer__logo--wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 4rem;
	margin-bottom: 2rem;
}

.footer__logo--icon {
	color: #333;
	margin-right: 1rem;
}
.footer__sections--wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.footer__section--wrapper {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
}

h3 {
	padding-bottom: 1.5rem;
}

a {
	text-decoration: none;
	padding-bottom: 1rem;
	color: #333;
	cursor: pointer;
	transition: color 0.4s;
}

a:hover {
	color: #000;
}
.bottom-footer {
	padding: 1rem 0;
	text-align: center;
	background-color: rgb(240, 239, 239);
}

@media (min-width: 768px) {
	.top-footer--wrapper {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		padding: 4rem 0;
	}

	.footer__logo--wrapper {
		padding-left: 1.5rem;
	}

	.footer__sections--wrapper {
		justify-content: none;
		gap: 5rem;
		padding-right: 1.5rem;
	}

	.footer__section--wrapper {
		margin-bottom: 0;
	}

	a:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
	}
}
</style>
