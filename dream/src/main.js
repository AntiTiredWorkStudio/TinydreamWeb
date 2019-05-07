import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)//tabbar
import { Row, Col, Icon } from 'vant'
Vue.use(Row).use(Col).use(Icon)//layout Icon
import { Tabs,Tab } from 'vant'
Vue.use(Tabs).use(Tab)//tab
import {Button} from 'vant'
Vue.use(Button)//button
import {Popup} from 'vant'
Vue.use(Popup)//popup
import {Dialog} from 'vant'
Vue.use(Dialog)//dialog
import {Cell} from 'vant'
Vue.use(Cell)//cell
import { Actionsheet } from 'vant'
Vue.use(Actionsheet)//actionsheet
import {Toast} from 'vant'
Vue.use(Toast)//toast
import {List} from 'vant'
Vue.use(List).use(Cell)


import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar';
Vue.component(ProgressBar.name, ProgressBar);//progress
import {Step, StepItem} from 'vue-ydui/dist/lib.rem/step'
Vue.component(Step.name, Step);
Vue.component(StepItem.name, StepItem);//step

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
