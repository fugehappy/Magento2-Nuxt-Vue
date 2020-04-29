import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
    render(): VNode {
        return (
            <div class="container">
                <nuxt-link class="button button--grey" to="/catalog">
                    Home page
                </nuxt-link>
            </div>
        );
    }
}
