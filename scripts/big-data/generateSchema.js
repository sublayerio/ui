const models = [
    {
        id: 'People',
        plural: 'People',
        primaryField: 'name',
        views: [
            "allPeople",
            "peopleFromHonduras",
            "peopleFromSpain"
        ],
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

const model = models[0]

const views = [
    {
        id: 'allPeople',
        modelId: 'People',
        type: 'grid',
        name: `Alle ${model.plural}`,
        rowHeight: 'small',
        fields: model.fields.map(field => ({
            id: field.id,
            visible: true,
            width: 220
        })),
        filters: [],
        sorters: []
    },
    {
        id: 'peopleFromHonduras',
        modelId: 'People',
        type: 'grid',
        name: `${model.plural} from Honduras`,
        rowHeight: 'small',
        fields: model.fields.map((field, index) => ({
            id: field.id,
            visible: true,
            width: index === 0 ? 320 : 220
        })),
        filters: [],
        sorters: []
    },
    {
        id: 'peopleFromSpain',
        modelId: 'People',
        type: 'grid',
        name: `${model.plural} from Spain`,
        rowHeight: 'small',
        fields: model.fields.map((field, index) => ({
            id: field.id,
            visible: true,
            width: index === 0 ? 320 : 220
        })),
        filters: [],
        sorters: []
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
        ModelDatas: {},
        View: [],
        ViewDatas: {}
    }

    models.forEach(model => {

        state.Model.push(model.id)
        state.ModelDatas[model.id] = model
    })

    views.forEach(view => {

        state.View.push(view.id)
        state.ViewDatas[view.id] = view
    })

    await writeFile(__dirname + '/../../demo/src/assets/big-data/schema.json', JSON.stringify(state, null, 2))
}

main()