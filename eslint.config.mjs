// Imports

import eslintPluginUnicorn from "eslint-plugin-unicorn";
import stylistic from "@stylistic/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Compat

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
});

// ESLint Config

export default defineConfig([
	...compat.extends("next/core-web-vitals", "next/typescript"),
	eslintPluginUnicorn.configs.recommended,

	// Stylistic Rules
	{
		plugins: { "@stylistic": stylistic },
		rules: {
			indent: [`warn`, `tab`],
		}
	},

	{
		rules: {
			"@next/next/no-img-element": ["off"],
			"unicorn/filename-case": ["off"],
		}
	}
]);
