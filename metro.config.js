// ApolloClient 3.5.4 workaround to detext .cjs modules

const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    'jsx',
    "cjs",
  ],
};