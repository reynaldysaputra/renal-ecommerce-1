import React, { Fragment } from 'react';
import {Button} from '@chakra-ui/core';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function ButtonIconRight({styleButton ,colorHover, borderButton, ...props}) {
    const hoverButton = {
        bg : 'transparent',
        color : colorHover,
        border : borderButton
    }

    return(
        <Fragment>
            <Button rightIcon={<ArrowForwardIcon />} layerStyle={styleButton} _hover={hoverButton} {...props}>

            </Button>

        </Fragment>
    )
}

export default ButtonIconRight;