import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class Index extends Vue {
	@Action('getStoreConfig') getStoreConfig: any

	private mounted() {
		this.getStoreConfig()
	}

	protected render(): VNode {
		return (
			<div class="container">
				<nuxt-link class="button button--grey" to="/catalog">
					Home page
				</nuxt-link>
			</div>
		)
	}
}
