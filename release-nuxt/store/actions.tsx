import { ApolloActionTree } from './interface'
import getStoreConfig from '@/graphql/queries/getStoreConfig.gql'

const actions: ApolloActionTree<any, any> = {
	async getStoreConfig({ apollo }) {
		try {
			console.log(apollo)
			const res: any = await apollo.query({
				query: getStoreConfig
			})

			// if (res.data) {
			console.log(res)
			// const globalConfig: any = []
			// commit('saveGlobalConfig', globalConfig)
			// }
		} catch ({ graphQLErrors }) {
			const message: string = graphQLErrors
			console.log(message)
		}
	}
}

export default actions
