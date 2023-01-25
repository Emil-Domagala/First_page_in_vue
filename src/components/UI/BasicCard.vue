<template>
	<div class="cards">
		<div class="card" v-for="mainePageOffer in mainePageOffers">
			<div class="card-content-wrapper">
				<p class="card__title">{{ mainePageOffer.title }}</p>
				<p class="card__price">{{ mainePageOffer.price }}</p>
				<div class="card__options--wrapper">
					<div
						class="card__option"
						:class="{ 'card__option--disactive': !feature.status }"
						v-for="feature in mainePageOffer.features"
					>
						<font-awesome-icon icon="fa-solid fa-check" v-if="feature.status" />
						<font-awesome-icon
							icon="fa-solid fa-minus"
							v-if="!feature.status"
						/>
						<p>{{ feature.content }}</p>
					</div>
				</div>
			</div>
			<button :name="mainePageOffer.title" class="card__btn" @click="youChose">
				Wybierz
			</button>
		</div>
	</div>
</template>

<script>
export default {
	inject: ["mainePageOffers"],
	methods: {
		youChose() {
			console.log("You chose: " + event.target.name);
		},
	},
};
</script>

<style scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
	justify-content: center;
	width: 100%;
	margin-bottom: 4rem;
}
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-width: 200px;
	max-width: 250px;
	padding: 1.5rem 2rem;
	box-shadow: 0 1px 10px 0px #aaa;
	border-radius: 10px;
	transition: transform 0.4s;
}

/* .card:hover {
	transform: scale(1.1);
} */

.card-content-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
}

.card__title {
	font-size: 2.4rem;
	font-weight: 400;
}

.card__price {
	font-size: 4rem;
	font-weight: 600;
}

.card__option {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
}

.card__option--disactive {
	color: #aaa;
}

.fa {
	font-size: 1.2rem;
}

.fa-check {
	color: rgb(0, 201, 0);
}

.card__btn {
	bottom: 0;
	justify-self: flex-end;
	font-size: 1.4rem;
	padding: 1rem 4rem;
	box-shadow: 0 1px 10px 0px #aaa;
	border: none;
	border-radius: 10px;
	background-color: #fff;
	transition: background-color 0.4s, color 0.4s;
	cursor: pointer;
}
.card__btn:hover {
	background-color: #ddd;
}

.card:nth-child(2) .card__btn {
	background-color: rgb(0, 221, 118);
}
.card:nth-child(2) .card__btn:hover {
	background-color: #2e8b57;
	color: #fff;
}

@media (min-width: 768px) {
	.cards {
		flex-wrap: nowrap;
	}
}
</style>
