import Vue from 'vue';
import VueRouter from 'vue-router';
import tunk from "tunk";
import tunkVue from "tunk-vue";
import tunkDebug from "tunk-debug";
import tunkRequest from "tunk-request";
import routes from './src/route';
import App from './src/Main.vue';

tunk.config({
	debug: ['store','getState']
}).use([
	tunkVue,
	tunkDebug,
	tunkRequest({})
]);

Vue.use(VueRouter);
Vue.use(tunk);

var modules_ = require.context('./src', true, /\.js$/);
modules_.keys().forEach((item) => {
	modules_(item);
});


const router = new VueRouter({ routes });

new Vue({
	router,
	el: 'main',
	render: h => h(App)
  })

