import React, { Fragment } from 'react';
import {Grid,Box} from '@chakra-ui/core';

function BoxTrending({textStyleAlign, paddingStyle , marginBottomStyle,...props}) {
    const textAlignReady = ['center','center','center','left'];
    const paddingRightReady = [0,0,0,10];
    const marginBottomReady = ['10%','10%','',''];
    
    return (
        <Fragment>
            <Box textAlign={textStyleAlign && textAlignReady} pr={paddingStyle && paddingRightReady} mb={marginBottomStyle && marginBottomReady} {...props}>  

            </Box>
        </Fragment>
    )
}

function TrendingContent({...props}) {
    return(
        <Fragment>
            <Grid templateColumns={['100%','100%','60% 40%','40% 30% 30%']} my={10} {...props}>
                
            </Grid>
        </Fragment>
    )
}

export {BoxTrending, TrendingContent};