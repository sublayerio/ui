const axios = require('axios')
const fs = require('fs')
const writeFile = (path, data) => new Promise((resolve, reject) => {

    fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err)
            return
        }
        resolve()
    })
})

const fetch = async (url, rows = []) => {

    const response = await axios.get(url)

    rows = [
        ...rows,
        ...response.data.results
    ]

    if (!response.data.next) {
        return rows
    }

    return fetch(response.data.next, rows)
}

async function main() {

    let state = {
        film: [],
        filmDatas: {},
        people: [],
        peopleDatas: {},
        planet: [],
        planetDatas: {}
    }

    const films = await fetch('https://swapi.dev/api/films')

    films.forEach((row, index) => {
        row.id = row.url
        state.film.push(row.id)
        state.filmDatas[row.id] = row
    })

    const people = await fetch('https://swapi.dev/api/people')

    people.forEach((row, index) => {
        row.id = row.url
        state.people.push(row.id)
        state.peopleDatas[row.id] = row
    })

    const planets = await fetch('https://swapi.dev/api/planets')

    planets.forEach((row, index) => {
        row.id = row.url
        state.planet.push(row.id)
        state.planetDatas[row.id] = row
    })

    await writeFile(__dirname + '/../../demo/src/assets/starwars/data.json', JSON.stringify(state, null, 2))
}

main()