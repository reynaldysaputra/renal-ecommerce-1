import React, { Fragment } from 'react';
import ContainerApp from '../../component/container_C/container';
import signImg from '../../img/05_Halaman-login/talk.jpg';
import { Center, Grid, Image, Text, Heading, Box, Divider, Input , Button} from '@chakra-ui/core';
import TextTransparent from '../../component/textOpacity/textOpacity';
import Footer from '../../component/footer/footer';

function SignIn() {
    return(
        <Fragment>
            <ContainerApp maxW='100%' p={['','','','0px']} m='0px'>
                <Grid templateColumns={['100%','100%','60% 40%','60% 40%']} mb='5%' mt={['25%','10%','10%','']}>
                    <Image src={signImg} w='full' h={['','','50vh','100vh']} display={['none','none','block','block']} />
                    <Center justifyContent='left' pl={[0,0,'10%','10%']} boxSizing='border-box'> 
                        <Box>
                            <Text color='pinkColor' fontSize='xl' my='0px' textAlign='left'>Special Offer</Text>
                            <Heading my='5%' fontSize='5xl'>Join Us</Heading>
                            <Divider w={['20%','0','30%','70%']} border='2px' color='pinkColor' margin='0' mb='10px !important' mt='0px' />
                            <TextTransparent>Sign up for the newsletter and receive 10% off your first order.</TextTransparent>

                            <Input type='text' p='15px' boxSizing='border-box' placeholder='Name' borderRadius='0' mt='5%' boxSizing='border-box'  />
                            <Input type='email' p='15px' boxSizing='border-box' placeholder='renalfrontend@gmail.com' borderRadius='0' mt='3%' boxSizing='border-box' />
                            <Button type='submit' bg='fontColorFirst' color='white' display='block' w='full' borderRadius='0' mt='5%' boxSizing='border-box' >Sign up now</Button>
                        </Box>
                    </Center>
                </Grid>

                <Footer/>
            </ContainerApp>
        </Fragment>
    )
}

export default SignIn;