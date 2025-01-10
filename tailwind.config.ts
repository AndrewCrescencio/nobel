import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import formsPlugin from '@tailwindcss/forms'
import scrollbarPlugin from 'tailwind-scrollbar'
import typographyPlugin from '@tailwindcss/typography'

export default {
	content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './assets/**/*.scss', './app.vue'],
	theme: {
		fontSize: {
			'xs': ['12px', '16px'],
			'sm': ['14px', '20px'],
			'base': ['16px', '24px'],
			'lg': ['18px', '26px'],
			'xl': ['20px', '28px'],
			'2xl': ['22px', '30px'],
			'3xl': ['28px', '34px'],
			'4xl': ['34px', '38px'],
			'5xl': '42px',
			'6xl': '50px',
			'7xl': '60px'
		},
		extend: {
			fontFamily: { sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans] },
			fontSize: { '2xs': ['10px', '13px'] },
			colors: {
				primary: {
					DEFAULT: '#F59737',
				},
				secondary: {
					DEFAULT: '#7BA5B3',
				},
				white: '#ffffff',
				gray: colors.stone,
				black: '#1c1c1c'
			},
			container: () => ({
				center: true,
				padding: {
					'DEFAULT': '1.2rem',
					'sm': '1.5rem',
					'md': '3rem',
					'lg': '3rem',
					'xl': '4rem',
					'2xl': '5rem'
				}
			})
		},
		screens: {
			'sm': '560px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		container: {
			screens: {
				'DEFAULT': '100%',
				'sm': '640px',
				'md': '768px',
				'lg': '1000px',
				'xl': '1250px',
				'2xl': '1500px'
			}
		}
	},
	plugins: [

	]
}
