// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },

	app: {
		head: {
			title: 'Nobel Prizes',
		}
	},

	modules: [
		// https://tailwindcss.nuxtjs.org/getting-started/setup
		'@nuxtjs/tailwindcss',
		// https://fonts.nuxt.com/
		'@nuxt/fonts',
		// https://pinia.vuejs.org/ssr/nuxt.html
		'@pinia/nuxt',
	],

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate']
	},

	// https://fonts.nuxt.com/
	fonts: {
		devtools: false,
		google: {
			base64: false,
			fontsPath: '/fonts',
			overwriting: true,
			families: {
				Montserrat: {
					wght: [100 + '..' + 900],
					ital: [100]
				}
			}
		}
	},

	// https://tailwindcss.nuxtjs.org/getting-started/setup
	tailwindcss: {
		cssPath: '~/assets/scss/main.scss', // Imports the SCSS globally
		configPath: 'tailwind.config.ts',
		viewer: true
	},

})
