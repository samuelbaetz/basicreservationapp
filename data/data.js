var faker = require('faker')

var data = [
    {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
    },
    {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
    },
    {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
    }
]


module.exports = data