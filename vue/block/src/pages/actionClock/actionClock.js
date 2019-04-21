// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar'
Vue.component(ProgressBar.name, ProgressBar);
import { Tabbar, TabbarItem, Toast, Col, Row, Button, Popup, Icon, Dialog } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Toast).use(Col).use(Row).use(Button).use(Popup).use(Icon).use(Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
