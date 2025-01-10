<template>
	<div class="fixed right-8 top-4 z-[60] h-auto w-88">
		<div class="relative -mb-2 flex size-full flex-col">
			<TransitionGroup
				name="list"
				tag="div"
			>
				<template
					v-for="notification in getNotifications"
					:key="'notification-'+notification.id"
				>
					<div class="mb-2 flex h-auto w-full cursor-default gap-x-3.5 overflow-hidden rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
						<div class="flex w-full flex-col items-start justify-start gap-y-0.5">
							<div class="truncate text-sm font-medium text-gray-700">
								{{ notification.title }}
							</div>
							<div v-if="notification.body" class="text-xs font-normal text-gray-500">
								{{ notification.body }}
							</div>
						</div>
					</div>
				</template>
			</TransitionGroup>
		</div>
	</div>
</template>

<script setup lang="ts">
const notificationsStore = useNotificationsStore()
const { getNotifications } = storeToRefs(notificationsStore)

const notifications = ref([])
</script>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.list-leave-active {
	position: absolute;
}
</style>
