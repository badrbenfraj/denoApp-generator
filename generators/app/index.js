"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay")

module.exports = class extends Generator {
  initializing() {
    this.log(yosay(`Welcome to ${chalk.yellow('Deno Generator')}`));
  }
  writing() {
    this.log("hello world!");
  }

  install() {
    // install denon
    this.spawnCommandSync(
      "deno",
      "install",
      "-q",
      "-A",
      "-f",
      "--unstable",
      "unstable https://deno.land/x/denon@2.4.4/denon.ts"
    );
    // install vscode extension
    // this.spawnCommand("code", ["--install-extension", "denoland.vscode-deno"]);
  }

  end() {
    this.log(yosay(`Bye bye ${chalk.yellow('Deno Generator')}`));
  }
};
