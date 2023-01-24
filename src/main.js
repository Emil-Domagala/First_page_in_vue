import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

//fontAwesome

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

//pages

import AboutUsPage from "./components/ThePages/AboutUsPage.vue";
import ContactPage from "./components/ThePages/ContactPage.vue";
import MainPage from "./components/ThePages/MainPage.vue";
import OfferPage from "./components/ThePages/OfferPage.vue";

// router

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			name: "home",
			path: "/home",
			component: MainPage,
		},
		{
			name: "contact",
			path: "/contact",
			component: ContactPage,
		},
		{
			name: "aboutUs",
			path: "/aboutUs",
			component: AboutUsPage,
		},
		{
			name: "offer",
			path: "/offer",
			component: OfferPage,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				top: 78,
				behavior: "smooth",
			};
		}
	},
});

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
