module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "@hh.ru/eslint-config",
    ],
    "overrides": [
        {
            "files": "*.{ts,tsx}",
            "extends": "@hh.ru/eslint-config/typescript",
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "@hh.ru/import-rules/hh-import-order": 0
    },
    "resolutions": {

    }
}
