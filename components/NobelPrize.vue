<template>
	<div>
		<div>{{prize.awardYear}}</div>
		<div>{{prize.category.en}}</div>
	</div>
</template>

<script setup lang="ts">
defineProps(['prize'])

function removePrize() {

}
</script>

<style scoped lang="css">
/* Task 2.1: Looking at the screenshot provided, implement the styles for this card as closely as you can to the design */
/* You can use whatever html elements you see necessary as long as it does not interfere with the design */
/* The colors and font size/weight do not need to be exactly the same, try your best to match it */
/* If you are familiar with it, you can look into our tailwind configuration for hints */
.nobel-prize-card-original{

}

/* Task 2.2: Repeat the same exercise for the tailwind version of the card */
/* You must fully implement the styles for both versions of the card */
.nobel-prize-card-tailwind{

}
</style>
