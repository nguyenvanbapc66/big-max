const fs = require('fs')

function readText(nameFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(nameFile, (err, data) => {
            let text = data.toString()
            resolve(text)
        })
    })
}

async function run() {
    const text1 = await readText('../buoi3/text1.txt')
    return [text1]
}

run().then(console.log)