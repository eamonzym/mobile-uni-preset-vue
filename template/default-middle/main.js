import Vue from 'vue'
import App from '@/App'
import cuCustom from '@/static/colorui/components/cu-custom.vue'
import utils from '@/utils'
import storage from '@/utils/storage'
import config from '@/config'
import moment from 'moment'

// 引入cu-custom组件
Vue.component('cu-custom', cuCustom)

// 全局挂载方法
/** 时间组件中间件 */
Vue.prototype.$moment = moment()
/** 工具类中间件 */
Vue.prototype.$utils = utils
/** 存储中间件 */
Vue.prototype.$storage = storage
/** 全局挂载配置文件 */
Vue.prototype.$config = config

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
