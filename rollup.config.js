// rollup.config.js
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import babili from 'rollup-plugin-babili';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    babili(),
    json({
      preferConst: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],

};
