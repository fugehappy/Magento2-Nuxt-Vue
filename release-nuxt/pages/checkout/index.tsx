import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Checkout extends Vue {
    render(): VNode {
        return <div class="container">Checkout Page</div>;
    }
}
