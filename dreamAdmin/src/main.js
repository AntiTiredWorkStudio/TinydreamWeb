// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Row, Col, Button, CellGroup, NumberKeyboard, Uploader, DatetimePicker, Search, Popup, Collapse, CollapseItem, Icon, Dialog, Field, Checkbox, CheckboxGroup} from 'vant'
Vue.use(Row).use(Col).use(Button).use(Popup).use(Collapse).use(CollapseItem).use(Icon).use(Dialog).use(Field)
Vue.use(Checkbox).use(CheckboxGroup).use(Uploader).use(DatetimePicker).use(Search).use(CellGroup).use(NumberKeyboard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.push('/'+encodeURI('登录'))
