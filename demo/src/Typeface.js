import React from 'react'
import {css} from 'emotion'
import Heading from './Heading'
import Box from './Box'
import Paragraph from './Paragraph'
import Text from './Text'
import Container from './Container'

const textStyle = css`
font-size: 36px;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Lato, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
line-height: 52px;
`

const Typeface = () => (
    <Container>
            <Heading>
            Typeface
          </Heading>
          <Paragraph>
              Sans
          </Paragraph>
          <Box>
            <Text weight={100} className={textStyle}>System Font - 100</Text>
            <Text weight={200} className={textStyle}>System Font - 200</Text>
            <Text weight={300} className={textStyle}>System Font - 300</Text>
            <Text weight={400} className={textStyle}>System Font - 400</Text>
            <Text weight={500} className={textStyle}>System Font - 500</Text>
            <Text weight={600} className={textStyle}>System Font - 600</Text>
            <Text weight={700} className={textStyle}>System Font - 700</Text>
            <Text weight={800} className={textStyle}>System Font - 800</Text>
            <Text weight={900} className={textStyle}>System Font - 900</Text>
          </Box>
    </Container>
)

export default Typeface