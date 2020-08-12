const mtp = {
    name: 'Son tung',
    greeting: (cb) => {
        setTimeout(() => {
            this.name = 'Fake'
            console.log('Hello, I am ' + this.name)
            cb()
            console.log(this)
        }, 100)
    }
}
mtp.greeting(() => {
    console.log(mtp.name)
})