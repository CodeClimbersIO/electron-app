import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, mergeConfig } from 'vite'
import {
  getBuildConfig,
  getBuildDefine,
  external,
  pluginHotRestart,
} from './vite.base.config'

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'build'>
  const { forgeConfigSelf } = forgeEnv
  const define = getBuildDefine(forgeEnv)
  console.log(forgeConfigSelf)
  console.log(define)
  const entry = forgeConfigSelf.entry! as string
  const config: UserConfig = {
    build: {
      lib: {
        entry,
        fileName: () => '[name].js',
        formats: ['cjs'],
      },
      rollupOptions: {
        external,
        input: ['src/api/server.ts', 'src/api/*.ts'],
      },
    },
    plugins: [pluginHotRestart('restart')],
    define,
    resolve: {
      // Load the Node.js entry.
      mainFields: ['module', 'jsnext:main', 'jsnext'],
    },
  }

  return mergeConfig(getBuildConfig(forgeEnv), config)
})
