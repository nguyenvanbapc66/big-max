function resolveAfter3Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x), 3000)
    })
}

async function add1() {
    var a = await resolveAfter3Seconds(20)
    var b = await resolveAfter3Seconds(10)
    console.log('add1', a + b)
}

async function add2() {
    // var a = resolveAfter3Seconds(20)
    // var b = resolveAfter3Seconds(10)
    // return await a + await b
    let [a, b] = await Promise.all([resolveAfter3Seconds(40), resolveAfter3Seconds(30)])
    return a + b
}

add1().then(console.log)
add2().then(console.log)