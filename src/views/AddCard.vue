<template>
	<section class="container">
	<topHeader :topHeader="topHeader" />
	<topHeader :subHeader="subHeader" />
	<addCardForm />
	



</section>
</template>

<script>
import topHeader from "../components/Top.vue";

import addCardForm from "../components/CardForm.vue"

export default {
	components: {
		topHeader,
		addCardForm
	},

data() { 
	return {
	topHeader: "ADD A NEW BANK CARD",
	subHeader: "NEW CARD"
}
}
}

</script>

<style scoped>

</style>