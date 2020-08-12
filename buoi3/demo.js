const fs = require('fs')

function readText(nameFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(nameFile, (err, data) => {
            let text = data.toString()
            resolve(text)
        })
    })
}
const text1 = readText('text1.txt')
const text2 = readText('text2.txt')
const text3 = readText('text3.txt')

Promise.all([text1, text2, text3]).then(data => console.log(data))