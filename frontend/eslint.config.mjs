// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/html-self-closing": "off",
  },
});
// Your custom configs here
