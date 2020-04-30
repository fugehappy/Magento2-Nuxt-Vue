import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
	render(): VNode {
		return <div class="logo">Logo</div>
	}
}
