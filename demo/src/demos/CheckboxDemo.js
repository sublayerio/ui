import React, { Component } from 'react'
import { Canvas, Heading, Paragraph, Box } from '@pndr/demo-utils'
import { injectGlobal } from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import Checkbox from '../../../src/checkbox'

class Example1 extends Component {

    state = {
        value: true
    }

    render() {
        return <div>
            <Heading>
                Checkbox that's Checkboxed on
            </Heading>
            <Box>
                <Checkbox
                    value={this.state.value}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <Heading>
                Checkbox that's Checkboxed off
            </Heading>
            <Box>
                <Checkbox
                    value={this.state.value}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <Heading>
                Checkbox that's Checkboxed off and disabled
            </Heading>
            <Box>
                <Checkbox
                    value={this.state.value}
                    disabled={true}
                    onChange={({ value }) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <Example1 />
                <Example2 />
                <Example3 />
            </Canvas>
        )
    }
}

export default Demo