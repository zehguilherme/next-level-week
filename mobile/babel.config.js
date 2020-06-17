/* eslint-disable func-names */
export default function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
}
