<template>
	<section class="contact" id="contact">
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
			<div class="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8978424941183!2d19.892849199999997!3d50.088199499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a2d7f0d587f%3A0x15f4e7c36adff6d2!2sJasnog%C3%B3rska%202%2C%2031-358%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1674679360212!5m2!1spl!2spl"
					width="100%"
					height="100%"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
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
	</section>
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
	transition: background-color 0.4s;
	cursor: pointer;
}

button:hover {
	background-color: #2e8b57;
}

.map {
	text-align: right;
	height: 300px;
	width: 80vw;
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
	margin-bottom: 2rem;
	width: 200px;
}

.info__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-bottom: 1.5rem;
	background-color: #2e8b57;
}

.fa-solid {
	font-size: 3rem;
	color: #fff;
}

.info__text {
	text-align: center;
}

.special-link {
	transition: color 0.4s;
}

.special-link:hover {
	color: #fff;
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

	.map {
		height: 472px;
		/* height: 100%; */

		width: 50%;
		min-width: 250px;
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
