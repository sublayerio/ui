import React, { useState } from 'react'
import { css } from 'emotion'
import example_schema from '../assets/field-types/schema.json'
import example_data from '../assets/field-types/data.json'
import example_hooks from '../assets/field-types/hooks'
import starwars_schema from '../assets/starwars/schema.json'
import starwars_data from '../assets/starwars/data.json'

import Table from '../../../src/table'

const noop = () => { }

const onRecordClick = params => alert('onRecordClick: ' + JSON.stringify(params))

const Example1 = () => {

    const [model, setModel] = useState('example')

    return (
        <div
            className={css`
            position: relative;
            width: 100%;
            height: 75vh;
            margin-bottom: 32px;
            `}
        >
            <div
                className={css`
                position: absolute;
                top: 0;
                height: 50px;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
            `}
            >
                <h3>Field example dataset</h3>
                <div className={css`margin-left: auto;`}>
                <select value={model} onChange={e => setModel(e.target.value)}>
                        <option value={'example'}>example</option>
                    </select>
                </div>
            </div>
            <div
                className={css`
                position: absolute;
                top: 50px;
                bottom: 0;
                left: 0;
                right: 0;
                border-radius: 10px;
                border: 1px solid #f2f2f2;
                overflow: hidden;
            `}
            >
                <Table
                    modelId={model}
                    schema={example_schema}
                    data={example_data}
                    hooks={example_hooks}
                    onPageRefresh={noop}
                />
            </div>
        </div>
    )
}

const Example2 = () => {

    const [model, setModel] = useState('people')

    return (
        <div
            className={css`
            position: relative;
            width: 100%;
            height: 75vh;
            margin-bottom: 32px;
            `}
        >
            <div
                className={css`
                position: absolute;
                top: 0;
                height: 50px;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
            `}
            >
                <h3>Starwars dataset</h3>
                <div className={css`margin-left: auto;`}>
                <select value={model} onChange={e => setModel(e.target.value)}>
                        <option value={'people'}>people</option>
                        <option value={'film'}>film</option>
                        <option value={'planet'}>planet</option>
                    </select>
                </div>
            </div>
            <div
                className={css`
                position: absolute;
                top: 50px;
                bottom: 0;
                left: 0;
                right: 0;
                border-radius: 10px;
                border: 1px solid #f2f2f2;
                overflow: hidden;
            `}
            >
                <Table
                    modelId={model}
                    schema={starwars_schema}
                    data={starwars_data}
                    hooks={example_hooks}
                    onPageRefresh={noop}
                />
            </div>
        </div>
    )
}

const TableDemo = () => (
    <div
        className={css`padding: 0 16px; background-color: #fff;`}
    >
        <Example1 />
        <Example2 />
    </div>
)

export default TableDemo