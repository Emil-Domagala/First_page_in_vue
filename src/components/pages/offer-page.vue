<template>
	<section id="full-offer" class="full-offer">
		<div class="container">
			<h2 class="section-title">Pełna oferta</h2>
			<div class="full-offer__wrapper">
				<basic-card
					v-for="allOffer in allOffers"
					:key="allOffer.title"
					:title="allOffer.title"
					:price="allOffer.price"
					:features="allOffer.features"
				>
				</basic-card>
			</div>
		</div>
	</section>
</template>

<script>
import BasicCard from "../UI/basic-card.vue";
export default {
	components: {
		BasicCard,
	},
	inject: ["allOffers"],
};
</script>

<style scoped>

.container{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.full-offer {
	margin: 4rem 0 10rem;
}

.full-offer__wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 3rem;
	columns: 3rem;
	max-width: 1000px;
}
</style>
