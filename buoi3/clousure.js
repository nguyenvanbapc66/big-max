function a(x) {
    x++
    return function b() {
        console.log(++x)
    }
}

// same
a(1)()
a(1)()
a(1)()

//diffirent
let x = a(1)
x()
x()
x()