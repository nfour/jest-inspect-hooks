const Env = require('jest-environment-node');

module.exports = class NodeEnvironment extends Env {
  constructor (...args) {
    super(...args)
    this.global._console = console;
  }
}
