'use strict';
const path = require('path')
const fs = require('fs')

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const TARGET_CONFIG = process.env.CONFIG_ENV

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
  });

/**
 * Get available configurations and parse through for target configuration
 *
 * @return {array} containing tsconfig.json of the target configuration
 */
const getAvailableConfigs = async () => {
    let configArray = [];
    await new Promise((resolve,reject) => {
        fs.readdir(path.join(__dirname, "../config"), 
          { withFileTypes: true },
          (err, files) => {
              if (err) reject(err)
              files.map(async (file) => {
                  if (  path.extname(file.name) == ".json" 
                        && file.name.includes(TARGET_CONFIG)) {
                    let json = require(path.join(__dirname, "../config", file.name))
                    configArray.push(json)
                  } 
              })
              resolve()
          }
    )})
    return configArray[0]
}

/**
 * Get available configurations, compile, and test. Allows for user defined configurations
 *
 * @return {array} containing tsconfig.json of the target configuration
 */
const getAvailableConfigsAndTest = async () => {
    let configArray = [];
    await new Promise((resolve,reject) => {
        fs.readdir(path.join(__dirname, "../config"), 
          { withFileTypes: true },
          async (err, files) => {
              if (err) reject(err)
              for (let i=0; i<files.length; i++ ) {
                  let file = files[i]
                  if (  path.extname(file.name) == ".json" ) {
                    let json = require(path.join(__dirname, "../config", file.name))

                    // Save the configuration file at the root directory 
                    fs.writeFileSync(path.join(__dirname, '..', 'tsconfig.test.json'), JSON.stringify(json));

                    // Save the configuration file at the root directory 
                    fs.writeFileSync(path.join(__dirname, '..', 'tsconfig.json'), JSON.stringify(json));

                    console.log(`tsconfig.json set for ${file.name} configuration. Ready to be compiled and tested`)
                    let shPath = path.join(__dirname, "compile.sh")
                    let output = await sh(shPath)
                    console.log(output)
                  } 
              }
              resolve()
          }
    )})
    return configArray[0]
}

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */

 const { exec } = require('child_process');

 async function sh(cmd) {
    console.log("running shell")
    return new Promise(function (resolve, reject) {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
            console.log({ stdout, stderr })
          resolve({ stdout, stderr });
        }
      });
    });
  }

/**
 * Get target configuration and inject to the root directory before compiling or testing
 *
 * @return {string} result
 */
const test = async () => {
    const testConfigs = await getAvailableConfigs()
    // Set configuration that will be used for this test
    let modConfig = testConfigs
    // Make modification to the configuration file


    // Save the configuration file at the root directory 
    fs.writeFileSync(path.join(__dirname, '..', 'tsconfig.test.json'), JSON.stringify(modConfig));

    // Save the configuration file at the root directory 
    fs.writeFileSync(path.join(__dirname, '..', 'tsconfig.json'), JSON.stringify(modConfig));

    return console.log(`tsconfig.json set for ${TARGET_CONFIG} configuration. Ready to be compiled and tested`)
}


if (TARGET_CONFIG != "all") test()
if (TARGET_CONFIG == "all") getAvailableConfigsAndTest()




