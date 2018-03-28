import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import filesize from "rollup-plugin-filesize"
import uglify from "rollup-plugin-uglify"

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/hardyhar.js',
    name: 'HardyHAR',
    format: 'umd',
    exports: "named"
  },
  plugins: [
    globals(),
    filesize(),
    uglify(),
    builtins(),
    json(),
    commonjs(),
    resolve({
      browser: true,
      main: true,
      preferBuiltins: true
    })
  ]
};
