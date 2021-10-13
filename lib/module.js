const { resolve } = require("path")

function hotjarModule(moduleOptions) {
  const options = {
    ...this.options["hotjar"],
    ...this.options.hotjar,
    ...moduleOptions,
  }

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, "plugin.js"),
    fileName: "hotjar.js",
    options,
  })
}

module.exports = hotjarModule
module.exports.meta = require("../package.json")
