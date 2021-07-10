const fs = require('fs')
//  fs is nodejs builtin module for using the file system 
const path = require('path') //to deal with the path
const os = require('os') //module to deal with operating system properties
const chalk = require('chalk') //to have an output that says its been saved to a file  

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to password.txt'))
            })
        })
    }) //EOL: end of line
}

module.exports = savePassword