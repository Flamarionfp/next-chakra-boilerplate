module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  addons: ['@storybook/addon-essentials'],

  framework: '@storybook/react',
};
