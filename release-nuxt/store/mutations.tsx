import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
	updateLocale(state, value: string) {
		state.locale = value
	},
	saveGlobalConfig(state, config: any) {
		state.storeConfig = config.storeConfig
		state.countries = config.countries
		state.rootIds = config.storeConfig.root_category_id
	},
}

export default mutations
