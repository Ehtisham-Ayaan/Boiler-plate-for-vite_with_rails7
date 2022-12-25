import { createInertiaApp } from '@inertiajs/inertia-vue'
import type { CreateInertiaAppProps } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import router from "./router";

import Router from 'vue-router'
import VueRouterBackButton from 'vue-router-back-button'

Vue.use(Router)
Vue.use(VueRouterBackButton, { router })

import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import './assets/scss/main.scss'


Vue.config.productionTip = false

import { resolveView } from './views'

export function createApp (options: Omit<CreateInertiaAppProps, 'resolve' | 'setup'>) {
  return createInertiaApp({
    resolve: resolveView,
    setup ({ plugin, app, props, el }) {
      Vue.use(plugin)

      const vueApp = new Vue({
        render: h => h(app, props),
        metaInfo: {
          titleTemplate (title) {
            return title ? `${title} - PingCRM on Vite Ruby` : 'PingCRM on Vite Ruby'
          },
        },
        router: router,
      })

      if (el)
        vueApp.$mount('#app')

      return vueApp
    },
    ...options,
  })
}
