import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.vue"],
    rules: {},
  }
);
