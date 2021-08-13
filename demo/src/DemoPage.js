import React from 'react'
import demos from './demos'
import Context from '../../src/context'

const getDeveloperMode = () => {

    try {
        return localStorage.developerMode === "true"
    } catch (e) {
        return false
    }
}

const DemoPage = props => {

    const { id } = props.match.params

    const demo = demos.find(demo => demo.id === id)

    if (!demo) {
        return (
            <div>
                demo not found
            </div>
        )
    }

    const Component = demo.component

    return (
        <Context.Provider value={{ developerMode: getDeveloperMode() }}>
            <Component {...props} />
        </Context.Provider>
    )
}

export default DemoPage