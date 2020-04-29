// import { getStoreConfig } from '../graphql/getStoreConfig.gql'
import { ApolloActionTree } from './interface'

const actions: ApolloActionTree<any, any> = {
	// async getStoreConfig({ commit, dispatch, apollo, iosAlert }) {
	// 	try {
	// 		const res: any = await apollo.query({
	// 			query: getStoreConfig,
	// 		})
	// 		if (res.data) {
	// 			const globalConfig: any = res.data
	// 			commit('saveGlobalConfig', globalConfig)
	// 		}
	// 	} catch ({ graphQLErrors }) {
	// 		const message: string = graphQLErrors[0].message
	// 		iosAlert(message)
	// 			.then(() => {})
	// 			.catch((e: Error) => {})
	// 	}
	// }
}

export default actions
