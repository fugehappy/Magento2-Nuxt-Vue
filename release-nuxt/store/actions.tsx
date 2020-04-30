import { ApolloActionTree } from './interface'
import getStoreConfig from '@/graphql/queries/getStoreConfig.gql'

const actions: ApolloActionTree<any, any> = {
	async getStoreConfig({ commit, apollo }) {
		try {
			const res: any = await apollo.query({
				query: getStoreConfig
			})

			if (res.data) {
				const globalConfig: any = res.data
				commit('saveGlobalConfig', globalConfig)
			}
		} catch ({ graphQLErrors }) {
			const message: string = graphQLErrors
			console.log(message)
		}
	}
}

export default actions
