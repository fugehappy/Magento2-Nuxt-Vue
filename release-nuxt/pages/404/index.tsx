import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NotFind extends Vue {
	render(): VNode {
		return <div class="container">Not Find</div>
	}
}
