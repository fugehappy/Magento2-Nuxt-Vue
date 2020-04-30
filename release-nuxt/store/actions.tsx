import { ApolloActionTree } from './interface'
import getStoreConfig from '@/graphql/queries/getStoreConfig.gql'

const actions: ApolloActionTree<any, any> = {
	async getStoreConfig({ commit, iosAlert }) {
		try {
			const res: any = await this.app.apolloProvider.defaultClient.query({
				query: getStoreConfig,
			})

			if (res.data) {
				const globalConfig: any = res.data
				commit('saveGlobalConfig', globalConfig)
			}
		} catch ({ graphQLErrors }) {
			const message: string = graphQLErrors[0].message
			iosAlert(message)
				.then(() => {})
				.catch(() => {})
		}
	},
}

export default actions
