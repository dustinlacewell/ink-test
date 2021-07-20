import React from 'react';

import { Box, Text, render } from "ink"

const Test = () => {
    return <Box>
        <Text>{'🖧'}</Text>
        <Text color="green">{'4'}</Text>
        <Text>.</Text>
    </Box>
}

render(<Test />)
