import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Cart extends Vue {
	render(): VNode {
		return <div class="container">Cart Page</div>
	}
}
