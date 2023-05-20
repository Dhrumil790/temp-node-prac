const os = require('os')

// Info about current user

const user = os.userInfo()
console.log(user)

const systemUptime = os.uptime()
console.log('The system uptime is '+systemUptime)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)


