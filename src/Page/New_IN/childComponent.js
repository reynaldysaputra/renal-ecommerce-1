import React, { Fragment } from 'react';
import {Box, VStack} from '@chakra-ui/core';

function Figure({size, ...props}) {
    return(
        <Fragment>
            <VStack w={size} h='max-content' position='relative' justify='flex-end' cursor='pointer' {...props}>
                
            </VStack>
        </Fragment>
    )
}

function Product({lengthStar, ...props}){
    return (
        <Fragment>
            <Box w='100%' h='max-content' p='15px' pt='5px' boxSizing='border-box' bg='white' textAlign='left !important' boxShadow='md' {...props}>

            </Box>
        </Fragment>
    )
} 

export {Figure, Product};
