import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'

const watching = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/app.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    copy({targets: [{src: 'public/index.html', dest: 'build/'}]}),
    resolve(), babel({babelHelpers: 'bundled'}), scss()]
    .concat(watching
      ? [
        serve({
          contentBase: 'build',
          port: 1001,
          verbose: true
        }),
        livereload()
      ] : [])
};
