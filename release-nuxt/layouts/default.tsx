import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Default extends Vue {
    protected render(): VNode {
        return (
            <div id="root">
                <nuxt />
            </div>
        );
    }
}
