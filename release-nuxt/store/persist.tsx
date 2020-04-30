// import { MutationPayload } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const persisted: any = createPersistedState({
	key: 'magento_pwa_vue',
	storage: window.localStorage,
	fetchBeforeUse: false,
	reducer: (state: any) => {
		return {
			storeConfig: state.storeConfig,
			categoryMemu: state.categoryMemu
		}
	}
	// subscriber: (store: any) => (handler) => {
	// 	const myHandler: Function = (mutation: MutationPayload, state: any) => {}
	// 	store.subscribe(myHandler)
	// },
	// filter: (mutation: any) => {
	// 	return true
	// },
})

export default persisted
