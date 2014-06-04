/** @license MIT License (c) copyright 2014 original authors */
/** @author Karolis Narkevicius */

var jsxTransformer = require('./JSXTransformer');

var defaultExtensions = [ 'jsx' ];

exports.create = create;

function create (context) {
  // override extensions if supplied by dev
  var extensions = 'loadJsx' in context
    ? context.loadJsx
    : defaultExtensions;

  return {
    load: [
      {
        extensions: extensions,
        hooks: {
          instantiate: function (file) {
            // console.log(jsxTransformer.transform(file.source).code);
            return jsxTransformer.transform(file.source).code;
          }
        }
      }
    ]
  };

}
