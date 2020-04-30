require('dotenv').config()

export default {
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},
	mode: 'spa',
	head: {
		link: [
			{
				href: '/favicon.ico',
				rel: 'icon',
				type: 'image/x-icon'
			}
		],
		meta: [
			{
				charset: 'utf-8'
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport'
			},
			{
				content: process.env.npm_package_description || '',
				hid: 'description',
				name: 'description'
			}
		],
		title: process.env.name || ''
	},
	loading: {
		color: '#0C0'
	},
	manifest: {
		background_color: '#fff',
		description: 'Nuxt.js build with TypeScript and TSX support',
		display: 'standalone',
		icons: [
			{
				sizes: '32x32',
				src: 'favicon.ico',
				type: 'image/x-icon'
			},
			{
				sizes: '512x512',
				src: 'logo.png',
				type: 'image/png'
			}
		],
		name: 'Magento SSR Nuxt',
		short_name: 'Magento SSR Nuxt',
		start_url: '.'
	},
	proxy: [
		[
			'/graphql',
			{
				target: 'http://dev.vue-pwa.cn/graphql',
				changeOrigin: true,
				secure: false
			}
		]
	],
	stylelint: {
		configFile: './.stylelintrc.json',
		emitError: true,
		files: ['{assets,components,layouts,pages}/**/*.scss'],
		fix: true
	},
	build: {
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					exclude: /(node_modules)/,
					loader: 'eslint-loader',
					options: {
						fix: true
					},
					test: /\.(js|json|ts|tsx)$/
				})
			}
		}
	},
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/proxy',
		'@nuxtjs/axios',
		[
			'@nuxtjs/apollo',
			{
				clientConfigs: {
					default: '@/plugins/apollo/index'
				}
			}
		]
	],
	buildModules: [
		['@nuxtjs/dotenv', { filename: '.env' }],
		'@nuxt/typescript-build',
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module'
	],
	typescript: {
		typeCheck: {
			eslint: true,
			eslintOptions: {
				cache: false,
				extensions: ['js', 'json', 'ts', 'tsx'],
				fix: true,
				outputReport: true
			}
		}
	},
	router: {
		scrollBehavior(to, from, savedPosition) {
			console.log(from)
			if (to.hash) {
				return {
					selector: to.hash,
					offset: { x: 0, y: 10 }
				}
			}

			if (savedPosition) {
				return savedPosition
			}

			return { x: 0, y: 0 }
		}
	}
}
