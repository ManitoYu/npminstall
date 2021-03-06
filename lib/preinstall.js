'use strict';

const chalk = require('chalk');
const runScript = require('./utils').runScript;

module.exports = preinstall;

// @see https://docs.npmjs.com/misc/scripts
function* preinstall(pkg, root, displayName, options) {
  const scripts = pkg.scripts || {};
  if (scripts.preinstall) {
    options.console.log(
      '%s %s %s %j',
      chalk.yellow('scripts.preinstall'),
      chalk.gray(displayName),
      chalk.yellow(options.ignoreScripts ? ' ignore' : ''),
      scripts.preinstall
    );
    if (!options.ignoreScripts) {
      yield runScript(root, scripts.preinstall, options);
    }
  }
}
