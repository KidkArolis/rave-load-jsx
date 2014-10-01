var React = require("./react");
var Button = require("./button.jsx");

exports.main = function() {
	React.renderComponent(Button({name:"John"}), document.body);
};
