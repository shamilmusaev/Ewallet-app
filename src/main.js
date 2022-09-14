import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from "v-mask";


Vue.use(VueMask);


Vue.config.productionTip = false;

Vue.directive('uppercase', {
	update (el) {
		el.value = el.value.toUpperCase()
	},
})
new Vue({
    router,

	data: function() {
		return {
			activeCardIndex: 1,

			cards: [],

		}

	},


	
    render: h => h(App)
})

.$mount("#app");
