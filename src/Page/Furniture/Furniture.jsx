import React, { Fragment } from 'react';
import { Grid, Box, Flex, Image, Center, Text, Heading, Divider, HStack, Avatar, Spacer, Button } from '@chakra-ui/core';
import ImgHeader from '../../img/02_Halaman-furniture/header1.jpg';
import ImgHeader2 from '../../img/02_Halaman-furniture/header2.jpg';
import ImgHeader3 from '../../img/02_Halaman-furniture/header3.jpg';
import ContainerApp from '../../component/container_C/container';
import ButtonIconRight from '../../component/buttonIconRightHover/button';
import { TrendingContent, BoxTrending } from '../../component/contentTrending/trendingContent';
import TextTransparent from '../../component/textOpacity/textOpacity';
import EnjoyRoom from '../../img/02_Halaman-furniture/enjoyRoom.jpg';
import bagus from '../../img/02_Halaman-furniture/bagus.jpg'
import one from '../../img/02_Halaman-furniture/1.png';
import { objectProduct } from './objectProductFurniture';
import Footer from '../../component/footer/footer';

function Furniture() {
    return(
        <Fragment>
            <ContainerApp>
                {/* Content 1 */}
                <Grid gridTemplateColumns={['100%','100%','55% 45%','40% 30% 30%']} mt={['21%',0,0,0]} h={['auto','auto','95vh','90vh']}>
                    <Center>
                        <Image src={ImgHeader} alt='Header Image' w='full'/>
                    </Center>
                    <Center>
                        <Box w='full' textAlign='left !important'>
                            <Heading color='pinkColor' fontWeight='black' fontSize='xl' my={0}>158 $</Heading>
                            <Heading my={0} fontSize='5xl' lineHeight='100%' color='fontColorFirst'>Bjorg chair. white plastic</Heading>
                            <Text opacity='0.4' fontSize='xs' mt={5}>Armchair in polypropylene. Seat and legs in solid natural beech wood.</Text>
                            <ButtonIconRight bg='salmon' styleButton='ButtonContainer' colorHover='fontColorFirst' borderButton='1px solid black' mt={5}>ADD TO CART</ButtonIconRight>
                        </Box>
                    </Center>
                    <Flex w={['','','150%','100%']} h={['','','auto','']} direction={['column','column','row','column']} align='center' justify='center' mt={['10%',0,0,0]}>
                        <Box w={['70%','','100%','60%']} h={['50%','50%','70%','30%']}>
                            <Image src={ImgHeader2} alt='Header Image' boxSize='full'/>
                        </Box>
                        <Box w={['70%','','100%','60%']} h={['50%','50%','70%','30%']} boxShadow='xl'>
                            <Image src={ImgHeader3} alt='Header Image' boxSize='full'/>
                        </Box>
                    </Flex>
                </Grid>

                {/* Content 2 */}
                <TrendingContent>
                    <BoxTrending textStyleAlign paddingStyle marginBottomStyle>   
                        <Text fontWeight={{base:'medium'}}>Trending</Text>
                        <Heading>Latest News</Heading>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='pinkColor' margin={['auto','0','auto','0']} />
                        <TextTransparent>All trend spaces have a common denominator: chairs that are icons. </TextTransparent>
                        <TextTransparent>And this chair has everything to become that, an icon of design. </TextTransparent>
                        <TextTransparent>Its legs and seat are made of solid beech wood ad its backrest, with rounded shapes, is made of polypropylene.</TextTransparent>
                        <TextTransparent>Its design favors comfort while adding great aesthetic value to any interior design.</TextTransparent>
                    </BoxTrending>
                    <Image src={EnjoyRoom} w='full' />
                    <BoxTrending p={5}>
                        <Text fontSize='3xl' fontWeight='medium' lineHeight='2rem'>5 ideas for choosing the perfect</Text>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='pinkColor' margin={['auto','0','auto','0']} />
                        <TextTransparent>Choosing the right mattress is not so simple. We all sleep in a different way and we all want our mattress to adapt perfectly to our body.</TextTransparent>
                        <HStack mt={5} spacing={5}>
                            <Avatar src={bagus} name='Bagus Majid'/>
                            <Text m={0} fontSize='md'>Bagus Pratama Majid</Text>
                        </HStack>
                    </BoxTrending>
                </TrendingContent>

                {/* Content 3 */}
                <Grid templateColumns={['100%','100%','45% 45%','45% 45%']} gap={[5,5,8,10]} justifyContent='center' my='10%'>
                    {objectProduct.map((item, index) => {
                      return <HStack spacing={7} key={index} mb={['5%','5%','','']}>
                                    <Box w='45%' pos='relative'>
                                        <Center w='full' h='50%' bg={item.bg} pos='absolute' top='0' zIndex='-1' />
                                        <Image src={item.pathImg} w='full' />
                                    </Box>
                                    <Box w='45%' alignSelf='flex-start'>
                                        <Flex w='full' mb={0}>
                                            <Heading fontSize={['0.8rem','15px','0.8rem','md']}  m={0}>{item.name}</Heading>
                                            <Spacer/>
                                            <Heading fontSize={['0.7rem','15px','sm','sm']} m={0}>230 $</Heading>
                                        </Flex>
                                        <TextTransparent m={0}>Within 10 days</TextTransparent>
                                        <TextTransparent opacity='.7'>Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.</TextTransparent>
                                        <Button fontSize='sm' h='25px' cursor='pointer' border='1.5px solid' color='white' bg='fontColorFirst' _hover={{bg:'transparent', color:'fontColorFirst'}}>BUY NOW</Button>
                                    </Box>
                                </HStack>  
                    })}
                </Grid>

                {/* Content 4 */}
                <Footer/>
            </ContainerApp>
        </Fragment>
    )
}

export default Furniture;