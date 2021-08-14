const fs = require('fs/promises')
const times = require('lodash/times')
const faker = require('faker')
const uuid = require('uuid')

async function main() {

    let state = {
        People: [],
        PeopleDatas: {}
    }

    const people = times(10000).map(i => {

        return {
            id: uuid.v4(),
            image: faker.image.avatar(),
            title: faker.name.jobTitle(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            website: faker.internet.url(),
            address: faker.address.streetAddress(),
            city: faker.address.cityName(),
            country: faker.address.country(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            companyName: faker.company.companyName(),
            createdAt: faker.date.past(),
        }
    })

    people.forEach((row, index) => {
        state.People.push(row.id)
        state.PeopleDatas[row.id] = row
    })

    await fs.writeFile(__dirname + '/../../demo/src/assets/big-data/data.json', JSON.stringify(state, null, 2))
}

main()