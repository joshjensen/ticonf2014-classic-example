var _ = require("application/vendor/underscore");

exports.windowFactory = function(_params) {
	var win = Ti.UI.createWindow(_.extend(_params, {}));

	var onWindowClose = function() {
		console.log("Window Closed");
		win = null;
		onWindowClose = null;
	};

	win.addEventListener("close", onWindowClose);
	return win;
};

exports.labelFactory = function(_params) {
	var label = Ti.UI.createLabel(_.extend(_params, {
		color: "#333",
		font: {
			fontSize:20,
			fontFamily: "Helvetica Neue"
		},
		textAlign: "center",
		width: "auto"
	}));

	return label;
};