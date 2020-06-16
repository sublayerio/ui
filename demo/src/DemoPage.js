import React from 'react'
import demos from './demos'

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

    return <Component {...props} />
}

export default DemoPage