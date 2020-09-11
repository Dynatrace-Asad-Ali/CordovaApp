cordova.define("dynatrace-cordova-plugin.dynatraceMobile", function(require, exports, module) {
var exec = require('cordova/exec');
var emptyFunction = function () { };

module.exports = {

	endVisit: function (success, error) {
		success = success || emptyFunction;
		error = error || emptyFunction;

		exec(success, error, "DynatraceCordovaPlugin", "endVisit", []);
	}

}
});
