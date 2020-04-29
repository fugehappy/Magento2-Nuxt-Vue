import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Result extends Vue {
	render(): VNode {
		return <div class="container">Result Page</div>
	}
}
