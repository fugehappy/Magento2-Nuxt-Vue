import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import plugins from './plugins'
// import persisted from './persist'

Vue.use(Vuex)

const options: any = {
	state,
	getters,
	actions,
	mutations,
	modules: {},
	plugins: [plugins],
}
const store: any = () => new Vuex.Store(options)

export default store
