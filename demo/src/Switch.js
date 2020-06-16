import React from 'react'
import Switch from '@cmds/switch'
import Box from './Box'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Example = () => (
    <div>
        <Heading>
            Switch
        </Heading>
        <Paragraph>
            Switch — Checked
        </Paragraph>
        <Box>
            <Switch
                value={true}
            />
        </Box>
        <Paragraph>
            Switch — Unchecked
        </Paragraph>
        <Box>
            <Switch
                value={false}
            />
        </Box>
    </div>
)

export default Example