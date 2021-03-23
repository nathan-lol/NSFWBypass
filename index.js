const { Plugin } = require("powercord/entities");

module.exports = class NSFWBypass extends (Plugin) {
	startPlugin() { const nsfwbypass = require("./nsfwbypass.js"); }
	pluginWillUnload() { console.log("Restart Discord for it to unload"); }
};
