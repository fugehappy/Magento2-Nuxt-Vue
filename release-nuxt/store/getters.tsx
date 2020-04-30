import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
	logo: (state) => {
		const config: any = state.storeConfig

		if (config) {
			return {
				url: `${config.base_media_url}logo/${config.header_logo_src}`,
				href: config.base_url,
				title: config.logo_alt
			}
		}
	}
}

export default getters
