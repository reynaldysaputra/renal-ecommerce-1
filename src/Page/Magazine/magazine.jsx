import React, { Fragment } from 'react';
import { Avatar, Box, Grid, Heading, HStack, Text, Center, VStack, Image, Input, Textarea, Button } from '@chakra-ui/core';
import ContainerApp from '../../component/container_C/container';
import TextTransparent from '../../component/textOpacity/textOpacity';
import user from '../../img/03_Halaman-magazine/user.jpg';
import headingImg from '../../img/03_Halaman-magazine/header.jpeg';
import img1 from '../../img/03_Halaman-magazine/1.jpeg';
import img2 from '../../img/03_Halaman-magazine/2.jpeg';
import img3 from '../../img/03_Halaman-magazine/3.jpeg';
import Footer from '../../component/footer/footer';

function Magazine() {
    return(
        <Fragment>
            <ContainerApp fontFamily='poppins' color='fontColorFirst'>
                {/* ----- Content 1 ----- */}
                <Grid templateColumns={['100%','100%','60% 40%','60% 40%']} mt={['15%','15%','5','5%']}>
                    <Box py={['10%','10%','15%','10%']} pb={{base:'3%', md:'3%'}}>
                        <Heading fontSize='5xl' m='0px'>Make the most out of your space with these tips</Heading>
                        <TextTransparent mt={['8%','8%','5%','5%']}>Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!</TextTransparent>
                    </Box>
                    <Box py={['10%','10%','20%','10%']}>
                        <HStack>
                            <Avatar src={user}/>
                            <Center ml='15px !important'>
                                <Text>Rifkah Putri Hairadifah</Text>
                            </Center>
                        </HStack>
                    </Box>
                </Grid>
                <VStack h={['40vh','50vh','40vh','auto']} pr={[0,0,50,50]}>
                    <Image src={headingImg} boxSize='full' />
                </VStack>

                {/* ----- Content 2 ----- */}
                <Grid templateColumns={['100%','100%','60% 40%','60% 40%']} mt='5%' mb='10%'>
                    <VStack align='left'>
                        <Box>
                            <Heading>Grouping is the basic</Heading>
                            <TextTransparent>Do you like small accessories, but you are afraid that it will make your room look messy? If yes, it´s best to group. You can apply it everywhere. Place small groups on your dining table, side table, tv cabinet or in a closet. Don´t place small accessories separately everywhere, but put a candleholder, vase and small plant together as a group. This brings calm to your interior. This way, you can combine different styles and create unity.</TextTransparent>
                            <Image src={img1} boxSize='full' mt='5%' />
                        </Box>
                        <Box>
                            <Heading>Wall of frames</Heading>
                            <TextTransparent>What do you hang on your walls? It´s a difficult question for every interior. Also, in this case, think big! One frame on your wall won´t finish it. Therefore, make a wall of frames. Hang different frames together. First, think of a good lay-out. If you use different frames, make sure you keep the distance between the frames in mind. If one frame is bigger, give this one the space it needs. This way, you keep it fun and playful!</TextTransparent>
                            <Image src={img2} boxSize='full' mt='5%' />
                        </Box>
                        <Box>
                            <Heading>Living room</Heading>
                            <TextTransparent>What do you hang on your walls? It´s a difficult question for every interior. Also, in this case, think big! One frame on your wall won´t finish it. Therefore, make a wall of frames. Hang different frames together. First, think of a good lay-out. If you use different frames, make sure you keep the distance between the frames in mind. If one frame is bigger, give this one the space it needs. This way, you keep it fun and playful!</TextTransparent>
                            <Image src={img3} boxSize='full' mt='5%' />
                        </Box>
                    </VStack>
                    <VStack p={['5px','5px','10px','30px']} gridArea={['1/1/2/2', '1/1/2/2','auto','auto']} boxSizing='border-box'>
                        <Box w={['100%','100%','70%','70%']}>
                            <Input type='text' w='100%' border='0px' borderRadius='0' borderBottom='1px solid #E7E8ED' placeholder="Comment" _focus={{outline:'none'}} p='0px' />
                            <Textarea placeholder="Comment here" fontFamily='poppins' borderRadius='0' border='1px solid' borderColor='#E7E8ED !important' mt='7%' p='10px' boxSizing='border-box' />
                            <Button p='15px' bg='pinkColor' color='white' border='0px' borderRadius='0' mt='4%'>Comment</Button>
                        </Box>
                    </VStack>
                </Grid>

                {/* ----- Content 3 ----- */}
                <Footer/>
            </ContainerApp>
        </Fragment>
    )
}

export default Magazine;