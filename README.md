# rave-load-jsx

Adds jsx file loading to rave.js based on the file extension.

By default, rave-load-jsx loads files with the `.jsx` extension and compiles the jsx syntax to JavaScript on the fly in the browser. It's only recommended to use this loader for development only. In production you should precompiled all of the jsx files. (How to coming soon).

## Usage

First install it into your rave project via:

```
npm install --save rave-load-jsx
```

For CommonJS/node-formatted modules (or AMD-wrapped CommonJS):

```js
var MyComponent = require('./my_component.jsx');
// ...
React.renderComponent(<MyComponent />, document.body);
```

For classic AMD modules:

```js
define(['./my_component.html'], function (MyComponent) {
  // ...
  React.renderComponent(<MyComponent />, document.body);
});
```


For ES6-formatted modules:

```js
import MyComponent from './my_component.jsx';
// ...
React.renderComponent(<MyComponent />, document.body);
```