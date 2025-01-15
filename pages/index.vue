<template>
	<div class="w-full h-auto flex flex-col max-w-screen-xl mx-auto gap-y-8 pt-12 px-12">
		<div class="w-full">
			<h1 class="text-4xl font-bold text-primary">Nobel Prizes</h1>
		</div>
		<div class="w-full flex justify-start gap-x-4 items-center">
			<div @click="sortByDateAwarded" class="button">
				Sort by date awarded
			</div>
			<div @click="refreshData" class="button">
				Refresh Data
			</div>
			<div class="ml-auto">
				<input 
					type="text" 
					:value="searchQuery"
					@input="searchByCategoryName"
					placeholder="Search by Category" 
					class="search-input"
				/>
			</div>
		</div>
		<div class="w-full h-auto mb-12">
			<div class="nobel-prizes-container">
				<template v-for="prize in filteredNobelPrizes">
					<NobelPrize 
						:prize="prize" 
						@remove="removePrize"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

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

type NobelPrize  = {
	awardYear: string;
	dateAwarded: string;
	category: {
		en: string;
	};
	categoryFullName: NobelPrizeCategoryFullName;
	laureates?: Laureate[];
}

const { addNotification } = useNotificationsStore()

const nobelPrizes = ref<NobelPrize[]>([])

const searchQuery = ref<string>("")

const filteredNobelPrizes = computed(() => {
	const query = searchQuery.value.trim().toLowerCase()
	if (!query) return nobelPrizes.value
	
	return nobelPrizes.value.filter(prize => 
		prize.categoryFullName?.en?.toLowerCase().includes(query)
	)
})

async function getData() {
	const url = "https://api.nobelprize.org/2.1/nobelPrizes?limit=20&sort=desc&nobelPrizeYear=2024&yearTo=2020&format=json&csvLang=en"
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`)
		}

		const data = await response.json()
		nobelPrizes.value = data.nobelPrizes
	} catch (error: any) {
		console.error(error.message);
	}
}

function sortByDateAwarded() {
	// Task 1.1: Implement sorting by date the prize was awarded, most recently awarded prize first
	// Please use only this function to achieve this effect

	// Andrew's NOTE: idk why but seems like the prize.awardYear is not the same as the dateAwarded
	// so i'm using the dateAwarded to sort the prizes

	nobelPrizes.value.sort((a, b) => {
		if (!a.dateAwarded) return 1;
		if (!b.dateAwarded) return -1;

		const dateA = new Date(a.dateAwarded);
		const dateB = new Date(b.dateAwarded);

		return dateB.getTime() - dateA.getTime();
	});
}

const searchByCategoryName = useDebounceFn((event: Event) => {
	// Task 1.2: Allow using the input field to search for prizes by category name
	// You can make changes to this function or anywhere else you see appropriate within this file
    const input = event.target as HTMLInputElement
    searchQuery.value = input.value
}, 300)

function removePrize(prizeToRemove: NobelPrize) {
	// Task 3.2: Write here the necessary code to remove a prize from the list
	nobelPrizes.value = nobelPrizes.value.filter(prize => 
		prize.dateAwarded !== prizeToRemove.dateAwarded
	);
	addNotification("Prize removed", `The prize for ${prizeToRemove.categoryFullName.en} has been removed`, 5000)
}

function refreshData() {
	getData()
	// Task 3.3: Use the notifications store to add a notification that the data has been refreshed
	// The store already exists and does not need any change, use its methods to trigger a notification with any message you like
	addNotification("Data refreshed", "The data has been refreshed", 5000)
}

onMounted(() => {
	getData();
});

</script>

<style scoped lang="scss">
.nobel-prizes-container{
	width: 100%;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	grid-template-rows: auto;
	gap: 1rem;
	justify-items: start;
	align-items: start;
}
</style>
