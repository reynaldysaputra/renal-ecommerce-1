import React, { Fragment } from 'react';
import { Box, Container, Grid, Image, Heading, InputRightElement, HStack, InputGroup, Input, SimpleGrid, useMediaQuery, Divider, Center, VStack} from '@chakra-ui/core';
import {SearchIcon, DragHandleIcon, ChatIcon} from '@chakra-ui/icons';
import headerImg from '../../img/04_Halaman-help/header.jpg';
import TextTransparent from '../../component/textOpacity/textOpacity';
import QuestionHelp from '../../component/questionHelp';
import Footer from '../../component/footer/footer';

function Help_page() {
    const [isTable] = useMediaQuery(['(min-width: 768px) and (max-width : 1024px)']);

    return(
        <Fragment>
            {/* --- Content 1 --- */}
            <Container maxW='xl' p='0' fontFamily='poppins' mt={['15%','15%',0,0]}>
                <Grid templateColumns={['100%','100%','100%','38% 62%']} h={['auto','auto','70vh','81vh']} position='relative' mt={['5%','5%','','']}>
                    <Image src={headerImg} boxSize='full' display={['none','none','block','block']}/>
                    {
                        isTable && 
                        <Box boxSize='full' pos='absolute' bg='rgba(0, 0, 0, 0.37)'/>
                    }
                    <HStack h={['','','auto','full']} w={['','','50%','auto']} bg='white' py={[0,0,10,0]} px={[5,5,10,20]} mt={['8%','8%','0','0']} position={['','','absolute','relative']} top={['','','25%','']} left={['','','20%','']}>
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

            <Container maxW='lg' fontFamily='poppins' boxSizing='border-box' mt={['15%','15%','5%','5%']}>  
                {/* --- Content 2 --- */}
                <SimpleGrid columns={[1,1,2,2]} spacing={10}>
                    <Box>
                        <Heading mt={0} fontSize='xl'>General Questions</Heading>
                        <Divider w={['20%','0','30%','20%']} border='2px' color='pinkColor' margin='0' mb='10px !important' />
                        <QuestionHelp/>
                    </Box>
                    <Box>
                        <Heading mt={0} fontSize='xl'>Optional Questions</Heading>
                        <Divider w={['20%','0','30%','20%']} border='2px' color='pinkColor' margin='0' mb='10px !important' />
                        <QuestionHelp/>
                    </Box>
                </SimpleGrid>

                {/* --- Content 2 --- */}
                <SimpleGrid columns={[1,1,2,2]} spacing={10} mt={[10,10,20,20]} mb={20}>
                    <Box p='20px' border='1px solid #D9D9D9' cursor='pointer' transition='.5s' _hover={{boxShadow : 'xl'}}>
                        <Center>
                            <VStack p='15px' bg='#FE7865' boxSizing='border-box' rounded='3xl'>
                                <DragHandleIcon boxSize='30px' color='white'/>
                            </VStack>
                            <Box w='60%' ml='7%'>
                                <Heading fontSize={['lg','lg','lg','xl']} m='0px'>Ask in the Forums</Heading>
                                <TextTransparent m='0px'>Join the conversation! We think you would love our community and it's a great place to find Furniture announcements or general help.</TextTransparent>
                            </Box>
                        </Center>
                    </Box>
                    <Box p='20px' border='1px solid #D9D9D9' cursor='pointer' transition='.5s' _hover={{boxShadow : 'xl'}}>
                        <Center>
                            <VStack p='15px' bg='#FE7865' boxSizing='border-box' rounded='3xl'>
                                <ChatIcon boxSize='30px' color='white'/>
                            </VStack>
                            <Box w='60%' ml='7%'>
                                <Heading fontSize={['lg','lg','lg','xl']} m='0px'>Visit out Blog</Heading>
                                <TextTransparent m='0px'>Join the conversation! We think you would love our community and it's a great place to find Furniture announcements or general help.</TextTransparent>
                            </Box>
                        </Center>
                    </Box>
                </SimpleGrid>

                {/* --- Content 4 --- */}
                <Footer/>
            </Container>
        </Fragment>
    )
}

export default Help_page;