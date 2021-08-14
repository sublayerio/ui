const models = [
    {
        id: 'People',
        plural: 'People',
        primaryField: 'name',
        fields: [
            {
                id: 'image',
                type: 'text'
            },
            {
                id: 'title',
                type: 'text'
            },
            {
                id: 'name',
                type: 'text'
            },
            {
                id: 'email',
                type: 'text'
            },
            {
                id: 'phone',
                type: 'text'
            },
            {
                id: 'website',
                type: 'text'
            },
            {
                id: 'address',
                type: 'text'
            },
            {
                id: 'city',
                type: 'text'
            },
            {
                id: 'country',
                type: 'text'
            },
            {
                id: 'latitude',
                type: 'text'
            },
            {
                id: 'longitude',
                type: 'text'
            },
            {
                id: 'companyName',
                type: 'text'
            },
            {
                id: 'createdAt',
                type: 'text'
            },
            {
                id: 'id',
                type: 'id'
            },
        ]
    }
]

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

async function main() {

    let state = {
        Model: [],
        ModelDatas: {}
    }

    models.forEach(model => {

        state.Model.push(model.id)
        state.ModelDatas[model.id] = model
    })

    await writeFile(__dirname + '/../../demo/src/assets/big-data/schema.json', JSON.stringify(state, null, 2))
}

main()