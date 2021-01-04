import Vue from 'Vue';
import App from './app.vue';

import './assets/style/global.styl';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: h => h(App), // h就是vue中的createApp参数
}).$mount(root);
