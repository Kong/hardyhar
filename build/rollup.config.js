import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import filesize from "rollup-plugin-filesize"
import uglify from "rollup-plugin-uglify"
import babel from "rollup-plugin-babel"

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/hardyhar.js',
    name: 'hardyhar',
    format: 'umd',
    exports: "named"
  },
  plugins: [
    globals(),
    filesize(),
    uglify(),
    builtins(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    commonjs(),
    resolve({
      browser: true,
      main: true,
      preferBuiltins: true
    })
  ]
};
