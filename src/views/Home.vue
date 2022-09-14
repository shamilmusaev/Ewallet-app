<template>
<section class="container">
	<topHeader :topHeader="topHeader" />
	<topHeader :subHeader="subHeader" />
		<div class="home">
		<section v-if ="activeCard==null">
			
		</section>
		
		<section v-else>
			<creditCard :newCard="activeCard" />
			
	
		</section>
			
	</div>
	<CardStack />
	
	
	<button v-on:click="newCard">ADD A NEW CARD</button>
			<button  @click="removeCard(activeCard)">REMOVE CARD</button>
</section>

</template>


<script>
import topHeader from "../components/Top.vue";
import creditCard from "../components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
	name:"Home",
	components: {
	
		topHeader,
		creditCard,
		CardStack

	},

data() { 
	return {
	topHeader: "E-WALLET",
	subHeader: "ACTIVE CARD",

	
}
},

methods: {
		removeCard() {
		this.$root.cards.splice(this.$root.cards.indexOf(), 1)
		
    },	
	newCard() {
		this.$router.push("/AddCard");
	},


   },


computed: {
	activeCard: function(){
		if(this.$root.$data.cards.lenght!=0){
		return this.$root.$data.cards[this.$root.$data.activeCardIndex];
		}
		else{
		return null;
	}}
}

};


</script>


<style scoped>

.container {
height: 100%;
display: flex;
flex-direction: column;
}

button {
   
  text-decoration: none;
  color: black;
  background-color: white;
  height: 70px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid black;
  cursor: pointer;
  width: 400px;
  margin-top: 4px;
}

button:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.home {
margin-bottom: 2rem;
}

.cvv{
	margin-top: 10px;
	font-family: 'Courier New', Courier, monospace;

}
</style>