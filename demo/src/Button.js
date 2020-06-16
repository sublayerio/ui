import React from 'react'
import {css} from 'emotion'
import Button from '@cmds/button'
import Box from './Box'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Example = () => (
    <div>
        <Heading>
            Button
        </Heading>
        <Paragraph>
            Button — Default
        </Paragraph>
        <Box>
            <Button>
                Click here
            </Button>
        </Box>
        <Paragraph>
            Button — Highlighted
        </Paragraph>
        <Box>
            <Button highlighted>
                Click here
            </Button>
        </Box>
        <Paragraph>
            Button — Primary
        </Paragraph>
        <Box>
            <Button primary>
                Click here
            </Button>
        </Box>
    </div>
)

export default Example