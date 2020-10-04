import clone from 'lodash/clone'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const hooks = {
    "button.onClick/example.button": async (e, { setLoading, label, setLabel }) => {

        console.log("button.click/example.button")

        setLoading(true)
        setLabel('Processing...')
        await sleep(5000)
        setLoading(false)
        setLabel(label)
    },
    "HasMany.onRequest": async params => {

        console.log('HasMany.onRequest', params)

        await sleep(2000)

        const { modelId, recordId, foreignModel, localField } = params
        const record = params.data[modelId + 'Datas'][recordId]

        const data = clone(params.data)

        data[foreignModel] = record[localField]

        return {
            data: {
                data
            }
        }
    },
    "HasOne.onRequest": async params => {

        console.log('HasOne.onRequest', params)

        await sleep(2000)

        const { modelId, recordId, foreignModel, localField } = params
        const record = params.data[modelId + 'Datas'][recordId]

        const data = clone(params.data)

        return {
            data: {
                recordId: record[localField],
                data
            }
        }
    },
    "Table.onRecordClick": async params => {

        alert(`Table.onRecordClick ${JSON.stringify(params)}`)
    },
    "relationship.onRecordClick": async params => {

        alert(`relationship.onRecordClick ${JSON.stringify(params)}`)
    }
}

export default hooks