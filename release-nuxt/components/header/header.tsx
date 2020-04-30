import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VLogo from './logo'

@Component({
	name: 'v-header',
	components: {
		VLogo
	}
})
export default class VHeader extends Vue {
	protected render(): VNode {
		return (
			<header class="header">
				<v-logo></v-logo>
			</header>
		)
	}
}
