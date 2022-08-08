export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "google",
        "prettier",
        "prettier/react",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
    }
}
