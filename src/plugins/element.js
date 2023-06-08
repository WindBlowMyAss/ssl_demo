import Vue from 'vue'
// import { Button } from 'element-ui'
// import {Form, FormItem} from 'element-ui'
// import {Input} from 'element-ui'
// import { Message } from 'element-ui'

import {Button, Form, FormItem, Input, Message} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

//全局挂载
Vue.prototype.$message = Message
