module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "amd": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};
