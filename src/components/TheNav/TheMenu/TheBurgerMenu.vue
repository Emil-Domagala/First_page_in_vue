<template>
	<button class="burger-menu" @click="showMenu">
		<font-awesome-icon
			class="bars"
			:class="'bars' + showMenuClass"
			icon="fa-solid fa-bars"
		/>
		<font-awesome-icon
			class="x-mark"
			:class="'x-mark' + showMenuClass"
			icon="fa-solid fa-xmark"
		></font-awesome-icon>
	</button>
</template>

<script>
export default {
	data() {
		return {
			showMenuClass: null,
		};
	},
	emits: ["is-menu-active"],
	methods: {
		showMenu() {
			if (this.showMenuClass === null) {
				this.showMenuClass = "--active";

			} else if (this.showMenuClass === "--active") {
				this.showMenuClass = null;

			}
			this.$emit("is-menu-active", this.showMenuClass);
		},
	},
};
</script>

<style scoped>
button {
	padding: 1.5rem;
	font-size: 25px;
	border: none;
	background: none;
	overflow: hidden;
}

.bars {
	position: relative;
	left: 20px;
	bottom: 3px;
	transition: bottom 0.4s;
}
.bars--active {
	bottom: -50px;
}
.x-mark {
	position: relative;
	top: -50px;
	font-size: 31px;
	transition: top 0.4s;
}
.x-mark--active {
	top: 0px;
}
</style>
