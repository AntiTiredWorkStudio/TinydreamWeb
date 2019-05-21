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
Vue.use(List)//list
import {Field} from 'vant'
Vue.use(Field)//field
import { Uploader } from 'vant';
Vue.use(Uploader);//upload
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);//checkbox
import { NumberKeyboard, PasswordInput } from 'vant';
Vue.use(NumberKeyboard).use(PasswordInput);//passwordinput
import { Step, Steps } from 'vant';
Vue.use(Step).use(Steps);
import { Area } from 'vant';
Vue.use(Area);//area
import { Picker } from 'vant';
Vue.use(Picker);//picker
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);


import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar';
Vue.component(ProgressBar.name, ProgressBar);//progress
import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
Vue.component(SendCode.name, SendCode);


Vue.config.productionTip = false
router.push('/')
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
