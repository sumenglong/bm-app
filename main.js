import Vue from 'vue'
import App from './App'

import validate from './js_sdk/fshjie-formvalidate/ys-validate.js'

Vue.config.productionTip = false

Vue.prototype.$validate = validate

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
