import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss'
const path = require('path')

export default {
  input: path.resolve(__dirname, './src/packages/index.js'),
  output: {
    file: './lib/spike-react.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    scss(),
    babel()
  ],
  externals: ['react']
};
