<template>
	<header>
		<h1> {{topHeader}}</h1>
		<h2> {{subHeader}}</h2>
	</header>
</template>

<script>
export default {
	props: {
		topHeader: String,
		subHeader: String
	}
	
}
</script>

<style scoped>

header {
	display: flex;
	align-items: center;
	flex-direction: column;	
}

h1 {
	font-size: 30px
}

h2 {
	font-size: 15px;
}
</style>