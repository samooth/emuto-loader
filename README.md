# emuto-loader

An [emuto](https://kantord.github.io/emuto/) loader for webpack.

## Setup

You need to install emuto and emuto-loader:

*Using yarn*

```
yarn add --dev emuto emuto-loader
```

*Using npm*

```
npm install --save-dev emuto emuto-loader
```

You need to modify your webpack config:
``` javascript
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.eq$/,
      loader: 'emuto-loader' // compiles emuto to JavaScript
    }]
  }
};
```

You'll now be able to import emuto scripts:

```javascript
// index.js
import GreetUser from './greeting.eq'

console.log(GreetUser({user: "John"}))
```
