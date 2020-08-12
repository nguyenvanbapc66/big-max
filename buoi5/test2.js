function getData(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof input !== 'number') reject('Input is invalid')
            else resolve(input + Math.round(Math.random() * input))
        }, 1000)
    })
}

getData(10)
    .then(data => getData(data))
    .then(data => getData(data))
    .then(data => console.log('Done:', data))
    .catch(err => console.log(err + ''))