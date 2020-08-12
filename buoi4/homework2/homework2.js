const fs = require('fs')

function readOneByOne(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            resolve(data.toString())
        })
    })
}

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

async function run() {
    let [text1, text2, text3] = await Promise.all([readOneByOne('text1.txt'), readOneByOne('text2.txt'), readOneByOne('text3.txt')])
    for(let i = 0; i < 10; i++) {
        let result = await sleep(2000).then(data => console.log(data))
    }
}

run()