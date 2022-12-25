import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SelectApp from '../views/SelectApp.vue'
import ConfigureSettings from '../views/ConfigureSettings.vue'
import MigRation from '../views/MigRation.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/selectapp',
        name: 'SelectApp',
        component: SelectApp
    },
    {
        path: '/setting',
        name: 'ConfigureSettings',
        component: ConfigureSettings
    },
    {
        path: '/migration',
        name: 'MigRation',
        component: MigRation
    },

]

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes
})

export default router
