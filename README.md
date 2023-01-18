# Ordermentum ESLint Config

Codin' it Ordermentum Style.

## Usage

### 1. Install the package

```sh
yarn add --dev @ordermentum/eslint-config-ordermentum
```

### 2. Install peer dependencies

Install peer dependencies by running:
```sh
yarn add --dev \
    @emotion/eslint-plugin@11.10             \
    @typescript-eslint/eslint-plugin@^5.48.2 \
    @typescript-eslint/parser@^5.48.2        \
    eslint-config-airbnb-base@^15.0.0        \
    eslint-config-airbnb@19.0.4              \
    eslint-config-prettier@^8.6.0            \
    eslint-plugin-import@^2.27.5             \
    eslint-plugin-jsx-a11y@6.7.1             \
    eslint-plugin-mocha@9.0.0                \
    eslint-plugin-prettier@4.2.1             \
    eslint-plugin-react-hooks@^4             \
    eslint-plugin-react@7.32.1               \
    eslint-plugin-unicorn@45.0.2             \
    prettier@^2.8.3                          \

```

### 3. Add to ESLint configuration
Add the following line to your `.eslintrc` file:
```json
"extends": ["@ordermentum/ordermentum"],
```
