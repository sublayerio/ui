import React from 'react'
import {css} from 'emotion'
import Box from './Box'
import Heading from './Heading'
import Container from './Container'
import brand from './icons/brand'

const Text = ({children}) => (
    <div
        className={css`
        font-weight: 400;
        font-size: 1rem;
        line-height: 2rem;
        margin-bottom: 20px;
        `}
    >
        {children}
    </div>
)

const Example = () => (
    <Container>
        <Heading>
            Our Brand
        </Heading>
        <Text>
            with Dark Background
        </Text>
        <Box dark>
            {brand({
                width: 80,
                style: {
                    color: 'white'
                }
            })}
        </Box>
        <Text>
            with Light Background
        </Text>
        <Box>
            {brand({
                width: 80
            })}
        </Box>
    </Container>
)

export default Example