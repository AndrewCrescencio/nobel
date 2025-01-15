<template>
	<div class="nobel-prize-card text-sm relative text-black">
		<button class="text-red-500 absolute top-3 right-3 rounded-full border border-red-500 w-6 h-6 p-0 text-xs line-height-0 grid place-items-center uppercase">
			<span class="text-red-500">x</span>
		</button>
		<p class="uppercase text-gray-500 text-xs">
			<strong class="font-bold">{{prize.awardYear}}</strong> Nobel Prize for
		</p>
		<p class="font-medium category-name text-sm">{{prize.category.en}}</p>
		<template v-if="formattedLaureateNames">
			<p class="uppercase text-gray-500 text-xs">Awarded to</p>
			<p class="font-medium laureate-names">{{ formattedLaureateNames }}</p>
		</template>
	</div>
</template>

<script setup lang="ts">
type NobelPrizeCategoryFullName = {
	en: string;
	no: string;
	se: string;
}

interface Laureate {
	fullName: {
		en: string;
	};
	knownName: {
		en: string;
	};
	orgName: {
		en: string;
	};
}

interface NobelPrize {
	awardYear: string;
	dateAwarded: string;
	category: {
		en: string;
	};
	categoryFullName: NobelPrizeCategoryFullName;
	laureates?: Laureate[];
}

interface Props {
	prize: NobelPrize;
}

const props = defineProps<Props>();

const formattedLaureateNames = computed(() => {
	const validLaureates = props.prize.laureates?.filter(l => {
		return l?.knownName?.en || l?.fullName?.en || l?.orgName?.en;
	}) ?? [];
	return validLaureates.map(l => {
		return l.knownName?.en || l.fullName?.en || l.orgName?.en;
	}).join(', ');
});

function removePrize() {

}
</script>

<style scoped lang="css">
/* Task 2.1: Looking at the screenshot provided, implement the styles for this card as closely as you can to the design */
/* You can use whatever html elements you see necessary as long as it does not interfere with the design */
/* The colors and font size/weight do not need to be exactly the same, try your best to match it */
/* If you are familiar with it, you can look into our tailwind configuration for hints */
.nobel-prize-card-original{
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	border: 2px solid #e5e7eb;
	border-radius: 0.375rem;
	padding: 12px;
	width: 100%;
	height: 100%;
}

/* Task 2.2: Repeat the same exercise for the tailwind version of the card */
/* You must fully implement the styles for both versions of the card */
.nobel-prize-card-tailwind{

}

.nobel-prize-card {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	border: 2px solid #e5e7eb;
	border-radius: 0.375rem;
	padding: 12px;
	width: 100%;
	height: 100%;
}

.category-name {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.laureate-names {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
</style>
