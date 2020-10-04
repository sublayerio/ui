import React from 'react'
import { css } from 'emotion'
import { Canvas, Heading, Box } from '@pndr/demo-utils'

import starwars_schema from '../assets/starwars/schema.json'
import starwars_data from '../assets/starwars/data.json'
import field_types_schema from '../assets/field-types/schema.json'
import field_types_data from '../assets/field-types/data.json'
import field_types_hooks from '../assets/field-types/hooks'

import ModelDetailPage from '../../../src/model-detail-page'

const noop = () => { }

const Example1 = () => {

    return (
        <Canvas>
            <Box>
                <ModelDetailPage
                    modelDetailPage={{
                        "id": "example",
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
                                                        "title": "Basic info"
                                                    },
                                                    {
                                                        "type": "RecordDetailTable",
                                                        "title": "Compact info"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // {
                            //     id: "film",
                            //     type: "HasMany",
                            //     name: "Films",
                            //     foreignModel: "film"
                            // },
                            {
                                type: "HasOneExample"
                            }
                        ]
                    }}
                    components={{
                        CustomComponent: () => (
                            <div>
                                <h2>Custom Component</h2>
                                this is a custom component, you can provide this component with custom components to be rendered
                            </div>
                        )
                    }}
                    modelId={'example'}
                    recordId={'1'}
                    schema={field_types_schema}
                    data={field_types_data}
                    hooks={field_types_hooks}
                    onPageRefresh={noop}
                />
            </Box>
        </Canvas>
    )
}

const Example2 = () => {

    return (
        <Canvas>
            <Box>
                <ModelDetailPage
                    modelDetailPage={{
                        "id": "planet",
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
                                                        "title": "Basic info"
                                                    },
                                                    {
                                                        "type": "RecordDetailTable",
                                                        "title": "Compact info",
                                                        "fields": [
                                                            "rotation_period"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "Tabs",
                                "children": [
                                    {
                                        id: "planetResidents",
                                        type: "PlanetResidents",
                                        title: "Residents",
                                    },
                                    {
                                        id: "planetFilms",
                                        type: "PlanetFilms",
                                        title: "Films",
                                    },
                                    // {
                                    //     id: "planetFilms",
                                    //     type: "PlanetFilms",
                                    //     name: "Films",
                                    // }
                                ]
                            },
                            {
                                type: 'CustomComponent'
                            }
                        ]
                    }}
                    components={{
                        CustomComponent: () => (
                            <div>
                                <h2>Custom Component</h2>
                                this is a custom component, you can provide this component with custom components to be rendered
                            </div>
                        )
                    }}
                    modelId={'planet'}
                    recordId={'http://swapi.dev/api/planets/1/'}
                    schema={starwars_schema}
                    data={starwars_data}
                    hooks={field_types_hooks}
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
        <Example2 />
    </div>
)

export default RecordDemo