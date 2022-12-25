import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { Head, Link } from '@inertiajs/inertia-vue'

Vue.use(VueMeta)
Vue.use(PortalVue)
Vue.component('InertiaHead', Head)
Vue.component('InertiaLink', Link)

export default Vue
