import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    output: {
      file: 'index.js',
      name: 'Platform',
      format: 'umd'
    },
    plugins: [
      babel({
        presets: [['env', { modules: false }]]
      })
    ]
};