cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "dynatrace-cordova-plugin.dynatraceMobile",
      "file": "plugins/dynatrace-cordova-plugin/other/DynatraceCordovaPlugin.js",
      "pluginId": "dynatrace-cordova-plugin",
      "clobbers": [
        "dynatraceMobile"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "dynatrace-cordova-plugin": "1.201.0"
  };
});