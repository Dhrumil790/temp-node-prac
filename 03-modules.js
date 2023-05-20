// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// const names = require('./04-names')
// const sayHi = require('./05-utils')
// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')


const names = require('./04-names')
console.log(names)

const sayHi = require('./05-utils')

const data = require('./06-alternative-flavor')
console.log(data)

sayHi('susan')
sayHi(names.persons.john)
sayHi(names.peter)


require('./07-mind-grenade')



 
// const john = 'john'
// const peter = 'peter'

// const sayHI = (name) => {
//     console.log(`Hello there ${name}`)

// }

// sayHI("Susan")