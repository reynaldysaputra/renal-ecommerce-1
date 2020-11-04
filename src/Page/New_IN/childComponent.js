import React, { Fragment } from 'react';
import {VStack} from '@chakra-ui/core';

function Figure({size, ...props}) {
    return(
        <Fragment>
            <VStack w={size} h='max-content' position='relative' justify='flex-end' cursor='pointer' {...props}>
                
            </VStack>
        </Fragment>
    )
}

export {Figure};