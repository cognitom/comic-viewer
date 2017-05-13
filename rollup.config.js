import riot from 'rollup-plugin-riot'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'

export default {
  entry: 'src/index.js',
  external: ['riot'],
  globals: {riot: 'riot'},
  plugins: [
    alias({
      'es6-event-emitter': 'node_modules/es6-event-emitter/src/emitter.js'
    }),
    riot(),
    babel({
      babelrc: false,
      presets: [['es2015', {modules: false}]],
      plugins: ['external-helpers']
    })
  ],
  context: 'window',
  targets: [
    {dest: 'dist/comic-viewer.js', format: 'iife'},
    {dest: 'dist/bundle.cjs.js', format: 'cjs'},
    {dest: 'dist/bundle.umd.js', format: 'umd'},
    {dest: 'dist/bundle.es.js', format: 'es'}
  ]
}
