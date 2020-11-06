import React, {Fragment} from 'react';
import {Container} from '@chakra-ui/core';

function ContainerApp({...props}) {
    return(
        <Fragment>
            <Container mt='3%' maxW={{sm:'sm' ,lg:'lg', md:'lg', xl:'90%'}} pos='relative' fontFamily='poppins' boxSizing='border-box' {...props}>

            </Container>
        </Fragment>
    )
}

export default ContainerApp;