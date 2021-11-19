module.exports = {
  stories: ['../documentation/intro.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  features: {
    buildStoriesJson: true
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode']
};
