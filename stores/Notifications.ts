import { v4 as uuidv4 } from 'uuid'

interface State {
	notifications: Notification[]
}

export const useNotificationsStore = defineStore({
	id: 'notifications',
	state: (): State => ({
		notifications: []
	}),
	actions: {
		addNotification(
			title: string,
			body: string,
			timeout: number = 5000
		): void {
			const id = uuidv4()
			this.notifications.push({
				id,
				title,
				body
			})
			setTimeout(() => {
				this.notifications.shift()
			}, timeout)
		},
		clearAllNotifications(): void {
			this.notifications = []
		}
	},
	getters: {
		getNotifications(): Notification[] {
			return this.notifications
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useNotificationsStore, import.meta.hot))
}
