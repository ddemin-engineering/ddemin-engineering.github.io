
import root from '__GENERATED__/root.svelte';
import { respond } from '/Database/School/Personal-Projects/MyWebsite002/portfolio-site/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Database/School/Personal-Projects/MyWebsite002/portfolio-site/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Database/School/Personal-Projects/MyWebsite002/portfolio-site/.svelte-kit/runtime/env.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\" rel=\"stylesheet\">\n\t\t<script>\n\t\t\t// On page load or when changing themes, best to add inline in `head` to avoid FOUC\n\t\t\tif (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n\t\t\tdocument.documentElement.classList.add('dark')\n\t\t\t} else {\n\t\t\tdocument.documentElement.classList.remove('dark')\n\t\t\t}\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<body class=\"dark:bg-gray-900 dark:text-gray-100\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/internal/immutable/',
			prerender: {
				default: true,
				enabled: true
			},
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "always"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
