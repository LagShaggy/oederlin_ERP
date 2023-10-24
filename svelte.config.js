import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		alias: {
			// these are the aliases and paths to them
			$util: 'src/lib/util',
			$hooks: 'src/hooks',
			$src: 'src/',
			$icons: 'src/lib/Icons/',
			$lib: 'src/lib/'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
