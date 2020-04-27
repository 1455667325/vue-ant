// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import Echarts from "vue-echarts/components/Echarts.vue"
Vue.use(Antd)
Vue.config.productionTip = false

import "echarts/lib/chart/bar"
import "echarts/lib/chart/pie"
import "echarts/lib/chart/line"
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import "echarts/lib/component/dataZoom"
import 'echarts/lib/component/title.js'

Vue.component("v-echart",Echarts);
import "echarts/lib/component/dataZoom"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
