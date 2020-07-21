import React from 'react'
import { css } from 'emotion'
import clone from 'lodash/clone'
import { Canvas, Heading, Box } from '@pndr/demo-utils'

import starwars_schema from '../assets/starwars/schema.json'
import starwars_data from '../assets/starwars/data.json'

import ModelDetailPage from '../../../src/model-detail-page'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const onRequest = async params => {
    console.log('onRequest', params)

    await wait(2000)

    const { modelId, recordId, foreignModel } = params
    const record = params.data[modelId + 'Datas'][recordId]

    const data = clone(params.data)

    data[foreignModel] = record.films

    return {
        data: {
            data
        }
    }
}

const noop = () => { }

const Example1 = () => {

    return (
        <Canvas>
            <Box>
                <ModelDetailPage
                    modelDetailPage={{
                        "id": "people",
                        "layout": [
                            {
                                "type": "Row",
                                "children": [
                                    {
                                        "type": "Col",
                                        "className": "col-md-8",
                                        "children": [
                                            {
                                                "type": "Tabs",
                                                "children": [
                                                    {
                                                        "type": "RecordDetailTable",
                                                        "title": "Basic info",
                                                        "fields": [
                                                            "name",
                                                            "height",
                                                            "mass",
                                                            "hair_color",
                                                            "skin_color",
                                                            "eye_color",
                                                            "birth_year",
                                                            "gender",
                                                            "homeworld",
                                                            "films",
                                                            "species",
                                                            "vehicles",
                                                            "starships",
                                                            "created",
                                                            "edited",
                                                        ]
                                                    },
                                                    {
                                                        "type": "RecordDetailTable",
                                                        "title": "Compact info",
                                                        "fields": [
                                                            "eye_color",
                                                            "birth_year"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "film",
                                type: "HasMany",
                                name: "Films",
                                foreignModel: "film"
                            }
                        ]
                    }}
                    modelId={'people'}
                    recordId={'http://swapi.dev/api/people/1/'}
                    schema={starwars_schema}
                    data={starwars_data}
                    onRequest={onRequest}
                    onPageRefresh={noop}
                />
            </Box>
        </Canvas>
    )
}

const RecordDemo = () => (
    <div
        className={css`padding: 0 16px; background-color: #fff;`}
    >
        <Example1 />
    </div>
)

export default RecordDemo