// svelte.config.js
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
	// paths: {
	// 	base: '/ddemin-engineering.github.io',
	// },
	// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
	// For example, instead of '_app', use 'app_', 'internal', etc.
	appDir: 'internal',


	trailingSlash: 'always',
    adapter: adapter({
      // default options are shown
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
  
};