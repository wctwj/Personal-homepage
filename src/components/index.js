import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/bread-crumb'
export default {
    install: function (Vue) {
        Vue.component('layout-aside',layoutAside)
        Vue.component('layout-header', layoutHeader)
        Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
    }
}