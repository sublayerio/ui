import React from 'react'
import { Canvas, Heading, Box } from '@pndr/demo-utils'
import { TabList, Tab } from '../../../src/tabs'

export default class TabsDemo extends React.Component {

    render() {

        return (
            <Canvas>
                <Heading>
                    Default tabs
                </Heading>
                <Box>
                    <TabList>
                        <Tab
                            active={false}
                            onClick={() => null}
                        >
                            {"Tab 1"}
                        </Tab>
                        <Tab
                            active={false}
                            onClick={() => null}
                        >
                            {"Tab 2"}
                        </Tab>
                        <Tab
                            active={false}
                            onClick={() => null}
                        >
                            {"Tab 3"}
                        </Tab>
                        <Tab
                            active={true}
                            onClick={() => null}
                        >
                            {"Tab 4"}
                        </Tab>
                        <Tab
                            active={false}
                            onClick={() => null}
                        >
                            {"Tab 5"}
                        </Tab>
                    </TabList>
                </Box>
            </Canvas>
        )
    }
}