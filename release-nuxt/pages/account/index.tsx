import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Account extends Vue {
    render(): VNode {
        return <div class="container">Account Page</div>;
    }
}
