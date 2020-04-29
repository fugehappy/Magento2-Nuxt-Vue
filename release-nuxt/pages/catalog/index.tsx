import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Catalog extends Vue {
	render(): VNode {
		return <div class="container">Catalog Page</div>
	}
}
