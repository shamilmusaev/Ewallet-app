<template>
	<section>
		<div class="card-stack">
			<div v-for="(card, index) of cardStack" :key="card.id" @click="onClick(index)"> 
			
			<creditCard :newCard="card"/>
			</div>
		</div>
	</section>


</template>

<script>
import creditCard from "../components/Card.vue";

export default {
  components: { creditCard },
    computed: {
        cardStack() {
            return this.$root.$data.cards
        }
    
    },

    methods: {
        activeCard(id) {
            this.$root.newCard(id)
        }
        ,onClick(index) {
            
            this.$root.$data.activeCardIndex = index;
        }
    }
}
</script>

<style scoped>
.card-stack {
position: sticky;
display: grid;
grid-auto-rows: 50px;
margin-bottom: 15rem;


}


</style>