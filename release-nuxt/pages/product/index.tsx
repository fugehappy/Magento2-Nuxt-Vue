import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Product extends Vue {
	render(): VNode {
		return <div class="container">Product Page</div>
	}
}
