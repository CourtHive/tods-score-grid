module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // Adds syntax support for optional chaining (.?)
    '@babel/plugin-proposal-optional-chaining',
    // Adds syntax support for default value using ?? operator
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }]
  ]
};
