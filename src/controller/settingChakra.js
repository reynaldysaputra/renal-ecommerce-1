import {color, extendTheme} from '@chakra-ui/core';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {styleNavigation} from '../navigation/layerStyleNavigation';

const breakpoints = createBreakpoints({
    base : '640px',
    sm : '768px',
    lg : '1024px',
    xl : '1280px'
});

const myTheme = {
    color : {
        navbarColor : '#2C2E3F',
        fontColorFirst : '#2C2E3F'
    },

    breakpoints,
    
    styles : {
        global : () => ({
            // code in here ...
        })
    },

    layerStyles : {
        ...styleNavigation
    }
}

export const chakraTheme = extendTheme({
    ...myTheme
});

