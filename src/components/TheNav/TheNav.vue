<template>
	<div class="navbar">
		<div class="container">
			<the-logo-nav></the-logo-nav>
			<the-burger-menu
				v-if="menuDisplay === 'burger'"
				@is-menu-active="isMenuActiveNav"
			></the-burger-menu>
			<the-deskop-menu v-else-if="menuDisplay === 'deskop'"></the-deskop-menu>
		</div>
	</div>
	<the-slide-menu
		v-if="menuDisplay === 'burger'"
		:show-menu-class="showMenuClassA"
	></the-slide-menu>
</template>

<script>
import TheLogoNav from "./TheLogo/TheLogoNav.vue";
import TheBurgerMenu from "./TheMenu/TheBurgerMenu.vue";
import TheDeskopMenu from "./TheMenu/TheDeskopMenu.vue";
import TheSlideMenu from "./TheMenu/TheSlideMenu.vue";
export default {
	components: {
		TheBurgerMenu,
		TheDeskopMenu,
		TheLogoNav,
		TheSlideMenu,
	},
	data() {
		return {
			menuDisplay: "deskop",
			showMenuClassA: "",
		};
	},

	mounted() {
		this.onResize();
		this.$nextTick(() => {
			window.addEventListener("resize", this.onResize);
		});
	},

	beforeDestroy() {
		window.removeEventListener("resize", this.onResize);
	},
	methods: {
		onResize() {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 768) {
				this.menuDisplay = "burger";
			} else if (windowWidth > 768) {
				this.menuDisplay = "deskop";
			}
		},
		isMenuActiveNav(showMenuClass) {
			this.showMenuClassA = showMenuClass;
		},
	},
};
</script>

<style scoped>
.navbar {
	height: 100%;
	width: 100vw;
	background-color: #fff;
	border-bottom: 1px solid #bbb;
}
.container {
	display: flex;
	height: 78px;
	padding: 0;
	justify-content: space-between;
	align-items: center;
}
</style>
