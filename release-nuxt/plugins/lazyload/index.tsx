import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

const Lazyload: any = VueLazyload

Vue.use(Lazyload.install, {
	preLoad: 1.3,
	error: '',
	loading: '',
	attempt: 1,
	listenEvents: ['scroll']
})
