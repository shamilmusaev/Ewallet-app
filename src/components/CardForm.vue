<template>

	<section>


		<creditCard :newCard="newCard"/>

		<form class="inputForm" v-on:submit.prevent="addCardForm">
			<label for="cardNumber">CARD NUMBER</label>
			<input type="text" 
				name="cardnumber"
				placeholder="XXXX XXXX XXXX XXXX"
				id="inputNumber"
				v-model="newCard.cardnumber" 
				maxlength="16"
				v-mask="'#### #### #### ####'"
				required
			>
			<label for="card-name">CARDHOLDER NAME</label>
			<input type="text" v-on:keypress="isLetter($event)" 
				name="cardholder"
				placeholder="Firstname Lastname"
                id="inputName"
				v-model="newCard.cardholder"
				required
				
			>
			<section class="card-input__validccv">

			<section class="card-input__valid">
			<label for="valid-thru">VALID UNTIL</label>
			<input type="text"
			class="dateText"
			id="inputName"
				name="valid"
				placeholder="MM/YY"
				v-model="newCard.valid"
				v-mask="'##/##'"
				required
			>
			</section>
			
			<section class="card-input__ccv-2">
			<label for="cvv">CVV</label>
			<input type="text"
			class="dateText"
				name="cvv"
				placeholder="XXX"
				id="inputName"
				v-model="newCard.cvv"
				maxlength="3"
			
				

			>
			</section>
			</section>

			<label for="vendor">VENDOR</label>
			<select id="vendor"
			name="vendor" 
			v-model="newCard.vendor"
			required  
			>
			<option value="Bitcoin-inc">Bitcoin Inc</option>
			<option value="Evil-corp">Evil Corp</option>
			<option value="Ninja-bank">Ninja Bank</option>
			<option value="Block-chain-INC">Blockchain Inc</option>
		
			</select>
		</form>
	
		<div class="add-card">
		<router-link class="router-link"  to="/" tag="button" v-bind="newCard" @click.native="addCard">ADD CARD</router-link>
		</div>
	</section>

</template>

<script>

import creditCard from "../components/Card.vue";

export default {
	components: {
    creditCard
},


data(){return{
    newCard: {
      id: "",
      cardnumber: "",
		cardholder: "",
		valid: "",
		vendor: "",
		cvv: ""

    }

}
},

methods: {
	addCard() {
		this.newCard.id = Date.now().toString()
		this.$root.$data.cards.push(this.newCard)
		this.$router.push("/")	
	},
	isLetter(e) {
		let char = String.fromCharCode(e.keyCode);
		if(/^[A-Za-z ]+$/.test(char)) return true;
		else e.preventDefault();
},

}
}
</script>

<style scoped>

.inputForm {
  height: 400px;
  width: 400px;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.router-link {
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
}

.card-input {
  height: 500px;
  display: flex;
  justify-content: center;
}




#vendor {
  height: 50px;
  border-radius: 6px;
  border: 1px solid black;
}

.vendor {
  margin-top: 10px;
}

.card-input__validccv {
  display: flex;
  justify-content: space-between;
  
}

#year {
  width: 190px;
  height: 45px;
  border-radius: 6px;
}

.dateText {
  width: 170px;
  height: 45px;
  border-radius: 6px;
}

#inputName,
#inputNumber {
  padding-left: 15px;
}

select,
option {
  padding-left: 10px;
}

label {
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
  padding-bottom: 3px;
}

input {
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
}

.addCard {
  margin-top: 15px;
  color: black;
  background-color: white;
  height: 70px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

button:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.Bitcoin {
  background: #feb444;
  /* background: url('~@/assets/vendor-bitcoin.svg' );
   background-repeat:no-repeat;
   background-size:30px 20px ;  */
}

.Blockchain {
  background: #8252e8;
  color: white;
  /* background: url('~@/assets/vendor-blockchain.svg' );
   background-repeat:no-repeat; */
}

.EvilCorp {
  background: #df2e4d;
  color: white;
}

.NinjaBank {
  background-color: #313131;
  color: white;
}

.default {
  background-color: silver;
}
</style>