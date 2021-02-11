const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'dados.txt')
const filePath2 = path.join(__dirname, 'dados-sync.txt')

console.log(__dirname)


function displayContent(err, fileContent){
    console.log(fileContent.toString())
}

console.log('Start...')
fs.readFile(filePath, displayContent)
console.log('End...')

console.log('Start Sync...')
const contentSync = fs.readFileSync(filePath2)
console.log(contentSync.toString())
console.log('End Sync...')
