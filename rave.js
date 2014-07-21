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
          locate: locate,
          translate: function (file) {
            var pragma = '/** @jsx React.DOM */';
            return jsxTransformer.transform(pragma + file.source).code;
          }
        }
      }
    ]
  };

}

function locate (load) {
	var metadata = load.metadata;
	metadata.dontAddExt = true;
	return false;
}
