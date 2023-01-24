<template>
	<div class="contact">
		<h2 class="section-title">Kontakt</h2>

		<div class="contact__wrapper">
			<form>
				<h3>Wyślij nam wiadomość!</h3>
				<div class="name-email__wrapper">
					<div class="input-form">
						<label for="name">Imię i Nazwisko</label>
						<input type="text" name="name" placeholder="Janusz Kowalski" />
					</div>
					<div class="input-form">
						<label for="email">Imię i Nazwisko</label>
						<input type="text" name="email" placeholder="example@mail.com" />
					</div>
				</div>
				<div class="input-form">
					<label for="subject">Tytuł</label>
					<input
						type="text"
						name="subject"
						placeholder="Powód wysłania wiadomośći"
					/>
				</div>
				<div class="input-form">
					<label for="message">Wiadomość</label>
					<textarea name="message" placeholder="Twoja wiadomość..."></textarea>
				</div>
				<button>Wyślij!</button>
			</form>
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=ul.%20Jasnog%C3%B3rskiej%202,%20Krak%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
			</div>
		</div>
		<div class="info">
			<div class="info__item">
				<div class="info__icon">
					<font-awesome-icon class="fa-solid" icon="fa-solid fa-map-pin" />
				</div>
				<div class="info__text">
					<p>Adress:</p>
					<p>Jasnogórska 2, 31-358 Kraków, Polska</p>
				</div>
			</div>
			<div class="info__item">
				<div class="info__icon">
					<font-awesome-icon class="fa-solid" icon="fa-solid fa-phone" />
				</div>
				<div class="info__text">
					<p>Numer Telefonu:</p>
					<p>+48 455 677 899</p>
				</div>
			</div>
			<div class="info__item">
				<div class="info__icon">
					<font-awesome-icon class="fa-solid" icon="fa-solid fa-envelope" />
				</div>
				<div class="info__text">
					<p>Adres e-mail:</p>
					<p>Forest@example.com</p>
				</div>
			</div>
			<div class="info__item">
				<div class="info__icon">
					<font-awesome-icon class="fa-solid" icon="fa-solid fa-globe" />
				</div>
				<div class="info__text">
					<p>Strona internetowa</p>
					<a href="www.google.com" class="special-link">www.google.com</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
	margin: 4rem 0 10rem;
}

.contact__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 4rem;
	background-color: #eee;
}
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #eee;
}

h3 {
	margin: 4rem 0 2rem;
}

.input-form {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
}

label {
	font-size: 1.2rem;

	margin-bottom: 0.5rem;
}

input {
	padding: 1rem;
}

textarea {
	min-height: 100px;
	resize: vertical;
	padding: 1rem;
	transition: min-height 0.4s;
}
textarea:focus {
	min-height: 200px;
}

input,
textarea {
	background-color: #fff;
	width: 80vw;
	border: none;
}

button {
	padding: 1rem 6rem;
	margin-bottom: 5rem;
	border: none;
	border-radius: 8px;
	font-size: 1.6rem;
	color: #fff;
	background-color: #3cb371;
}

button:hover {
	background-color: #2e8b57;
}

.mapouter {
	/* position: relative; */
	text-align: right;
	height: 300px;
	width: 80vw;
}
.gmap_canvas {
	overflow: hidden;
	background: none !important;
	height: 300px;
	width: 100%;
}

#gmap_canvas {
	width: 100%;
	height: 100%;
}

.info {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	margin-top: 3rem;
}

.info__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
}

.info__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-bottom: 3rem;
	background-color: #2e8b57;
}

.fa-solid {
	font-size: 3rem;
	color: #fff;
}

.info__text {
	text-align: center;
}

.special-link::before {
	background-color: #2e8b57;
}

@media (min-width: 768px) {
	.contact {
		width: 720px;
		margin: 4rem auto;
		padding: 0 1.5rem;
	}

	.contact__wrapper {
		flex-direction: row;
        /* align-items: none; */
		padding-bottom: 0;
	}

	form {
		align-items: flex-start;
		margin: 0 3rem;
		width: 50%;
	}
	h3 {
		width: 100%;
		text-align: center;
	}

	.input-form {
		width: 100%;
	}

	.name-email__wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 3rem;
	}
	.name-email__wrapper input {
		width: 100%;
	}

	input,
	textarea {
		background-color: #fff;
		width: auto;
		max-width: 500px;
		border: none;
	}

	.mapouter {
		text-align: right;
		height: 472px;
        /* height: 100%; */
		min-height: 100%;
		width: 50%;
		min-width: 250px;
		max-width: 450px;
	}
	.gmap_canvas {
		overflow: hidden;
		background: none !important;
		height: 100%;
		width: 100%;
	}

	#gmap_canvas {
		width: 100%;
		height: 100%;
	}
}

@media (min-width: 992px) {
	.contact {
		width: 960px;
	}
}
@media (min-width: 1200px) {
	.contact {
		width: 1140px;
	}
}
@media (min-width: 1400px) {
	.contact {
		width: 1320px;
	}
}
</style>
