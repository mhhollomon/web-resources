import path from 'path'

export default {
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        //silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        silenceDeprecations: ['color-functions', 'global-builtin', 'import']
      },
    }
  },
}