import React, { Fragment } from 'react';
import {Text} from '@chakra-ui/core';

function TextTransparent({...props}) {
    return (
        <Fragment>
            <Text opacity='0.4' fontSize='xs' mt={5} {...props}>

            </Text>
        </Fragment>
    )
}

export default TextTransparent;