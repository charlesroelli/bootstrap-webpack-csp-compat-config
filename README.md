# bootstrap-webpack-csp-compat-config
A sample config of webpack 5 and bootstrap 5 compatible with strict CSP.

## Summary

Bootstrap 5.1 needs a tweak to work with a strict CSP, as it includes inline
SVGs in its CSS.  This sample configuration repo uses Webpack asset modules
to extract these SVGs to their own files.  These can then be served as any
other static files.

## Live example

https://charlesroelli.github.io/bootstrap-webpack-csp-compat-config/

## Usage

```
yarn && yarn build
```
