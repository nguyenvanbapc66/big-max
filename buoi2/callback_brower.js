// let btn = document.getElementById('clickRun')
// btn.onclick = function() {
//     console.log('clicked')
// }

// let resultTotal = 0
// for(let i = 0; i < 300000000; i++) {
//     resultTotal += i
// }

// console.log(resultTotal)
// console.log('Done')

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// queueMicrotask(() => {
//     console.log('queue')
// })

// Promise.resolve().then(() => {
//     console.log('promise 1')
// })

// Promise.resolve().then(() => {
//     console.log('promise 2')
// })

// console.log('sync 1')
// console.log('sync 2')

let person = {
    fullname: 'not set',
    setFullname: function(firstname, lastname) {
        this.fullname = firstname + ' ' + lastname
    }
}

function getFullname(firstname, lastname, cb, obj) {
    cb.apply(obj, [firstname, lastname])
}

getFullname('son tung', 'm-tp', person.setFullname, person)

console.log(person.fullname)