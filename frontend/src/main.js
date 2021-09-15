import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
    methods: {
        isPhone() {
            return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent);
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')