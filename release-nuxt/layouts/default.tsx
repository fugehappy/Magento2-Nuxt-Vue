import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import { VHeader } from '@/components/header'

@Component({
	components: {
		VHeader
	}
})
export default class Default extends Vue {
	protected render(): VNode {
		return (
			<div id="root">
				<v-header></v-header>
				<nuxt keep-alive={true} />
			</div>
		)
	}
}
