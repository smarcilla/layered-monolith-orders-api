// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
    // Ignorar artefactos
    { ignores: ["dist/**", "coverage/**"] },

    // Reglas base JS
    js.configs.recommended,

    // Reglas TS con CHEQUEO DE TIPOS
    ...tseslint.configs.recommendedTypeChecked,

    // Capa TS del proyecto: apuntamos al proyecto de lint
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: { project: "./tsconfig.eslint.json" }
        },
        plugins: { import: importPlugin },
        rules: {
            // Orden de imports
            "import/order": ["warn", { alphabetize: { order: "asc" } }],

            // (opcional, activado) Evitar any en fronteras de capas altas
            "@typescript-eslint/no-explicit-any": "warn"
        }
    },

    // Globals de Jest únicamente en tests
    {
        files: ["src/**/*.test.ts"],
        languageOptions: {
            globals: { ...globals.node, ...globals.jest }
        }
    },

    // Compatibilidad con Prettier
    prettier
];
