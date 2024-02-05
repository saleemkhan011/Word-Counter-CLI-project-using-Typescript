import inquirer from "inquirer";
import chalk from "chalk";


let ans:{paragraph:string} = await inquirer.prompt({
    type:'input',
    name:'paragraph',
    message:chalk.blue.bold('Write paragraph to count words and characters:\n')
})

let freeWhiteSpace = ans.paragraph.replace(/\s/g,"")
let wordCounter = ans.paragraph.trim().split(' ')

console.log(`\nNumber of words = ${chalk.green(wordCounter.length)}\nNumber of Characters = ${chalk.green(freeWhiteSpace.length)}`)