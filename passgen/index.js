#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('A simple password generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to password.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')

    .parse()

const {length, save, numbers, symbols} = program.opts()

// Get generated password

const generatedPassword =  createPassword(length, numbers, symbols) 

// Save password to file
if(save) {
    savePassword(generatedPassword)
}

// Copy password to clipboard
clipboardy.writeSync(generatedPassword)
// generatedPassword is going to be set as a return value of createPassword

// console.log(numbers, symbols)
// output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password has been copied to your clipboard'))