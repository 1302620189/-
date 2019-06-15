import Vue from 'vue'
import Router from 'vue-router'
import all from '@/components/all'; //所有项目
import create from '@/components/create'; //我创建的
import share from '@/components/share'; //我参与的
import end from '@/components/end'; //已归档
import addObject from '@/components/addObject'; //添加项目
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/all' //所有项目
    }, {
        path: '/all',
        component: all
    }, {
        path: '/create', //我创建的
        component: create
    }, {
        path: '/share', //我参与的
        component: share
    }, {
        path: '/end', //已归档的
        component: end
    }, {
        path: '/addObject', //添加项目
        component: addObject
    }]
})