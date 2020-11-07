import React, { Fragment } from 'react';
import ContainerApp from '../../component/container_C/container';
import { Box, Container, Grid, Image, Heading, InputRightElement, HStack, InputGroup, Input, Icon, useMediaQuery } from '@chakra-ui/core';
import {SearchIcon} from '@chakra-ui/icons';
import headerImg from '../../img/04_Halaman-help/header.jpg';
import TextTransparent from '../../component/textOpacity/textOpacity';

function Help_page() {
    const [isTable] = useMediaQuery(['(min-width: 768px) and (max-width : 1024px)']);

    return(
        <Fragment>
            {console.log(isTable)}
            <Container maxW='xl' p='0' fontFamily='poppins'>
                <Grid templateColumns={['100%','100%','100%','38% 62%']} h={['auto','auto','70vh','81vh']} position='relative' mt={['5%','5%','','']}>
                    <Image src={headerImg} boxSize='full' display={['none','none','block','block']}/>
                    {
                        isTable && 
                        <Box boxSize='full' pos='absolute' bg='rgba(0, 0, 0, 0.37)'></Box>
                    }
                    <HStack h={['','','auto','full']} w={['','','50%','auto']} bg='white' py={10} px={[5,5,10,20]} mt={['8%','8%','0','0']} position={['','','absolute','relative']} top={['','','25%','']} left={['','','20%','']}>
                        <Box textAlign='left' w={['100%','100%','full','70%']}>
                            <Heading color='pinkColor' fontWeight='black' my={0}>Help center</Heading>
                            <Heading fontSize='4em' lineHeight='1em' m='0' color='fontColorFirst' fontSize={['5xl','md','5xl','6xl']}>How can We help You</Heading>
                            <TextTransparent>Our help center can instantly give you answers to many frequently asked questions.</TextTransparent>
                            <InputGroup borderColor='pinkColor' boxShadow='xl' mt={10}>
                                <Input type='text' border='2px solid' placeholder='WHAT CAN WE HELP YOU WITH?' fontSize={['0.6rem','0.6rem','xs','xs']}/>
                                <InputRightElement children={<SearchIcon color='pinkColor'/>} />
                            </InputGroup>
                        </Box>
                    </HStack>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Help_page;