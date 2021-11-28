module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  features: {
    buildStoriesJson: true
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode']
};
