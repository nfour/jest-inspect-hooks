const Env = require('jest-environment-jsdom');

module.exports = class JsdomEnvironment extends Env {
  constructor (...args) {
    super(...args)
    this.global._console = console;
  }
}
