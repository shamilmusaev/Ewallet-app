<template>
	<div class="wrapper">
	

		<section v-if="newCard==null"></section>
		<section v-else class="creditCard" :class="newCard.vendor">

	
			<img v-if="this.newCard.chip === 'Ninja-bank'" class="card-chip" src="../assets/chip-light.svg" alt="chip">
			<img v-else src="../assets/chip-dark.svg" class="card-chip" alt="chip">

			<div class="logo">
			<img v-if="this.newCard.vendor === 'Bitcoin-inc'" class="vendor-logo" src="../assets/vendor-bitcoin.svg" alt="logo" />
			<img v-else-if="this.newCard.vendor === 'Block-chain-INC'" class="vendor-logo" src="../assets/vendor-blockchain.svg" alt="logo" />
			<img v-else-if="this.newCard.vendor === 'Evil-corp'" class="vendor-logo" src="../assets/vendor-evil.svg" alt="logo" />
			<img v-else-if="this.newCard.vendor === 'Ninja-bank'" class="vendor-logo" src="../assets/vendor-ninja.svg" alt="logo" />
			</div>


			<section class="card-chip">{{newCard.chip}}</section>
			<section class="card-name"><p>CARDHOLDER NAME</p></section>	
			<section class="card-vendor">{{newCard.logo}}</section>
			<section class="Number"><p class="input-color">{{newCard.cardnumber}}</p></section>
			<section class="full-name"><p class="input-color">{{newCard.cardholder}}</p></section>
			<section class="valid-thru"><p>VALID UNTIL</p></section>

			<section class="valid-date"><p class="input-color">{{newCard.valid}}</p></section>

		</section>

	</div>

	


</template>


<script>
export default {
	props: {
		newCard: Object
	}
}
</script>




<style scoped>

.wrapper {
	display: flex;
	justify-content: center;
}
.creditCard {

	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
	width: 400px;
    height: 240px;
	background-color:lightgrey;
	border-radius: 14px;
	border: 1px solid gray;


}


.Number{
	margin-top: 10px;
	margin-left: 100px;
	grid-column: 1/4;
	grid-row: 3;
	font-size: 20px;
}

span.stretch {

  display: inline-block;
  -webkit-transform: scale(2, 1);
  -moz-transform: scale(2, 1);
  -o-transform: scale(2, 1);
  transform: scale(2, 1);
}

.card-name {
	margin-top: 3rem;
	grid-column: 1/3;
	grid-row: 3/4; 
}

.full-name {
	grid-column: 1/3;
	grid-row: 4;

}

.valid-thru {

	margin-top: 3rem;
	grid-column: 4;
	grid-row: 3/4;
	padding-right: 20px;
	
}


.valid-date {

grid-column: 4;
grid-row: 4;
}

.card-chip {

padding: 10px 20px;
grid-column: 1;
grid-row:1/3;
}

.logo {
grid-column: 4;
grid-row: 1/2;
margin-top: 30px;
}


.input-color{
	font-size: 16px;
	color: black;
	text-shadow: 1px 1px 1px rgb(255, 255, 255);


	
}

p {
	
	font-size: 13px;
	color:rgb(243, 243, 243);
	text-shadow: 2px 1px 2px rgb(53, 51, 51);

}


.Bitcoin-inc {
	background-color:rgb(237, 189, 100);
	
}

.Block-chain-INC {

	background-color: rgb(83, 70, 201);
}

.Evil-corp{
	background-color: rgb(209, 33, 33);
}

.Ninja-bank {
	background-color: rgb(31, 29, 29);
}


</style>