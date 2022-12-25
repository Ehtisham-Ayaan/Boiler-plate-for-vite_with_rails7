import { defineConfig } from 'vite'

import { createVuePlugin as Vue2Plugin } from 'vite-plugin-vue2'
import RubyPlugin from 'vite-plugin-ruby'
import ReloadOnChange from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    ReloadOnChange(['config/routes.rb', 'app/views/**/*']),
    RubyPlugin(),
    Vue2Plugin()
  ],
})