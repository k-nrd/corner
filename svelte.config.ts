import type { Config } from '@sveltejs/kit'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

const config: Config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			}
		})
	],

	kit: {
		adapter: adapter()
	}
}

export default config
