import React, { Fragment, useState, useEffect } from 'react';
import {Grid, Box, Image, Text, VStack,Center, Heading, Button, SimpleGrid, Divider, useMediaQuery,HStack, Flex, Spacer, Avatar, useDisclosure, Drawer, DrawerContent, DrawerOverlay, DrawerBody, Skeleton, SkeletonText} from '@chakra-ui/core'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Figure, Product} from './childComponent';
import {dataProduct} from './objectProduct';
import {BsStarFill} from 'react-icons/bs';
import {LinkProduct} from './objectLinkProduct';
import chairs from '../../img/01_Halaman-newIn/header.png';
import BarangBekas from '../../img/01_Halaman-newIn/RouteBarangBekas/barangBekas.jpg';
import Kursi_Bangku from '../../img/01_Halaman-newIn/RouteKursi&Bangku/bangku.jpg';
import LampuBelajar from '../../img/01_Halaman-newIn/RouteLampuBelajar/lampuBelajar.png';
import Meja from '../../img/01_Halaman-newIn/RouteMeja/tabel.png';
import Sofa from '../../img/01_Halaman-newIn/RouteSofa/sofa.png';
import Tanaman from '../../img/01_Halaman-newIn/RouteTanaman/aksesoris tanaman.png';
import RuangKeluarga from '../../img/01_Halaman-newIn/realRoom.jpeg';
import Me from '../../img/01_Halaman-newIn/me.jpg';
import Footer from '../../component/footer/footer';
import ContainerApp from '../../component/container_C/container';
import TextTransparent from '../../component/textOpacity/textOpacity';
import ButtonIconRight from '../../component/buttonIconRightHover/button';
import {TrendingContent,BoxTrending} from '../../component/contentTrending/trendingContent';

function NewIn() {
    const [data, setData] = useState(null);
    const [time, setTime] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDesktop_Laptop_Tablet, isTablet , isMobile] = useMediaQuery([
        '(min-width: 1024px)', '(min-width: 768px) and (max-width : 1024px)', '(min-width: 200px) and (max-width:767px)'
    ])
    
    const handleDataProduct = (attr) => {
        let dataFigure = (attr.target.className.split(' ')[1] == 'figure') ? attr.target.dataset.product : attr.target.parentElement.dataset.product;
        setData(dataProduct.filter(item => item.name == dataFigure)[0]);
        setTime(1);

        setTimeout(() => {
            setTime(0);
        }, Math.floor(Math.random() * 3000 + 1000))
    }

    return(
        <Fragment>
            <ContainerApp>
                {/* ------- CONTENT 1 -------*/}
                <Grid layerStyle='Container1NewIn'>
                    <VStack h={['auto','60vh','60vh','80vh']} bg='#F5F8FC' px={['0','0','0','0']}>
                        <Image src={chairs} alt='Chairs' mt={['25%', '40%', '30%', '20%']} w={['60%','70%','auto','auto']} ml={['0','0','-10%','-10%']} />

                        <Box pos={{base:'relative', xl:'absolute', md:'absolute', lg:'absolute'}} top={['0','30%','25%','15%']} left={['0','30%','55%','50%']} my={['10% !important','0%','0%','0%']} fontFamily='poppins' textAlign={['center','left','left','left']}>
                            <Text m='0' fontWeight='bold'>New Collection</Text>
                            <Heading fontWeight='bold' fontSize={{base:'4xl',md:'6xl !important',lg:'6xl',xl:'6xl'}} mb='15px' mt='15px !important'>Chairs & Stools</Heading>
                            <TextTransparent w={{base:"100%",md:'50%',lg:'50%',xl:'50%'}} fontWeight='thin' fontSize='sm'>Armchair upholstered in synthetic leather. Powder coated steel legs.</TextTransparent>
                        </Box>
                    </VStack>
                    <SimpleGrid h={['auto','60vh','60vh','80vh']} bg='#FFFBF8' alignContent='flex-end' textAlign='left'>
                        <ButtonIconRight styleButton='ButtonContainer' colorHover='#2C2E3F' borderButton='1px solid #2C2E3F' bg='pinkColor'>SHOP NOW</ButtonIconRight>
                    </SimpleGrid>
                </Grid>

                {/* ------- CONTENT 2 -------*/}
                <Grid layerStyle='GridContent2' mt='5%' fontFamily='poppins' mb={['5%', '5%', '10%', '13%']}>  
                    <SimpleGrid h='max-content'>
                        <Box textAlign={['center','left','center','left']}>
                            <Text fontWeight='bold'>On Sale</Text>
                            <Heading my={5}>Up to 20% off</Heading>
                            <Divider w={['80%','0','40%','80%']} border='2px' color='#2C2E3F' margin={['auto','0','auto','0']} />
                            <TextTransparent>Our entire Winter collection.</TextTransparent>
                        </Box>
                        <Box textAlign='center' mb={['5%']} mt={['','','10%','15%']}>
                            {isDesktop_Laptop_Tablet ? 
                                <>
                                    {LinkProduct.map((item,index) => {
                                        return <Text key={index} cursor='pointer' data-product={item.data_product} onClick={handleDataProduct} className='figure'>{item.name}</Text>
                                    })}
                                </>
                                :
                                <>
                                    <Drawer onClose={onClose} isOpen={isOpen} size='xs' placement='left'>
                                        <DrawerOverlay>
                                            <DrawerContent>
                                                <DrawerBody>
                                                    <VStack align='center'>
                                                        {LinkProduct.map((item,index) => {
                                                            return <Text key={index} cursor='pointer' data-product={item.data_product} onClick={handleDataProduct} className='figure'>{item.name}</Text>
                                                        })}
                                                    </VStack>
                                                </DrawerBody>
                                            </DrawerContent>
                                        </DrawerOverlay>
                                    </Drawer>
                                    <Button onClick={onOpen} w='50%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>Menu</Button>
                                </>
                            }
                        </Box>
                    </SimpleGrid>
                    {
                        data == null && 
                        <Grid templateColumns={['100%','100%','50% 50%','50% 50%']} gridColumnGap={5} gridRowGap={[7,5,0,0]} p='30px' boxSizing='border-box' w='80%' justifySelf='center' h='auto' >
                            <Figure size='80%' justifySelf='flex-end' bg='#BADAC4' mt={['','','10%','15%']} data-product='Accessories' className='figure' onClick={handleDataProduct}>
                                <Image src={Tanaman} w='80%' mb='25%' mt={['','','-20%','-25%']} />
                                <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Accessories</Box>
                            </Figure>
                            <Figure size='80%' justifySelf='flex-start' mt={['','','40%','45%']} bg='#DBEDF0' data-product='Sofa' className='figure' onClick={handleDataProduct}>
                                <Image src={Sofa} w='80%' mb='25%' mt={['','','-20%','-25%']} />
                                <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Sofas & armchairs</Box>
                            </Figure>
                            <Figure size='100%' justifySelf='flex-start' bg='#DBEDF0' data-product='Chairs & Stools' className='figure' onClick={handleDataProduct}>
                                <Image src={Kursi_Bangku} w='100%'/>
                                <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Chairs & Stools</Box>
                            </Figure>
                            <Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']} pt={['25%','','30%','35%']} data-product='Table' className='figure' onClick={handleDataProduct}>
                                <Box w='full' position='absolute' top='0' zIndex='-1' h='80%' bg='#FFEDDB'/>
                                <Image src={Meja} w='100%' />
                                <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Tables & Stools</Box>
                            </Figure>
                            <Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']} data-product='Lighting' className='figure' onClick={handleDataProduct}>
                                <Box w='75%' position='absolute' top='0' right='0' zIndex='-1' h='70%' bg='#FFEDDB'/>
                                <Image src={LampuBelajar} w='80%' />
                                <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Lighting</Box>
                            </Figure>
                            <Figure size='100%' justifySelf='flex-start' bg='#DBEDF0' data-product='Furnishings' className='figure' onClick={handleDataProduct}>   
                                <Image src={BarangBekas} w='100%'/>
                                <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Furnishings</Box>
                            </Figure>
                        </Grid>
                    }
                    {
                        data != null && time != 0 &&
                            <Grid gridTemplateColumns={['100%','100%','40% 40%','40% 40%']} gap={5} justifyContent='center'>
                                {
                                    data.img.map((item,index) => {
                                        return <Box shadow='md' padding={5} h='50vh' key={index}>
                                                        <Skeleton height="40%" />
                                                        <Skeleton height='30px' mt={5} />
                                                        <SkeletonText height='20px' mt='20px' />
                                                        <SkeletonText height='20px' mt='40px' />
                                                    </Box> 
                                    })
                                }
                            </Grid>
                    } 
                    {
                        data != null && time == 0 && 
                        <Grid gridTemplateColumns={['100%','100%','40% 40%','40% 40%']} gap={[3, 3, 5, 8]} p={[5,5,0,0]} justifyContent='center'>
                            {
                                (isDesktop_Laptop_Tablet || isMobile || isTablet) ?
                                data.img.map((item, index) => {
                                    return <Product textAlign='left' key={index} mb={5}>
                                                    <Center>
                                                        <Image src={item.path} w='90%' h='90%' />
                                                    </Center>
                                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Whatever Product</Heading>
                                                    <Flex h='max-content'>
                                                        <Box h='max-content'>
                                                            <BsStarFill color='#F5BB0A'/>
                                                            <BsStarFill color='#F5BB0A'/>
                                                            <BsStarFill color='#F5BB0A'/>
                                                            <BsStarFill color='#F5BB0A'/>
                                                        </Box>
                                                        <Spacer/>
                                                        <Text m='0px'>150 $</Text>
                                                    </Flex>
                                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
                                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}} cursor='pointer'>BUY</Button>
                                                </Product> 
                                }) : false
                            }
                        </Grid>
                    }
                </Grid>

                {/* ------- CONTENT 3 -------*/}
                <TrendingContent>
                    <BoxTrending textStyleAlign paddingRightReady marginBottomStyle>  
                        <Text fontWeight={{base:'medium'}}>Trending</Text>
                        <Heading>Latest News</Heading>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='#2C2E3F' margin={['auto','0','auto','0']} />
                        <TextTransparent>Brighten up your living areas this Winter with top tips from our interior design team.</TextTransparent>
                        <ButtonIconRight bg='#2C2E3F' color='white' colorHover='#2C2E3F' borderButton='1px solid black' cursor='pointer' mt={3} rounded='0' border='0'>EXPLORE ALL ARTICLES</ButtonIconRight>
                    </BoxTrending>
                    <Image src={RuangKeluarga} w='full' />
                    <BoxTrending p={5}>
                        <Text fontSize='3xl' fontWeight='medium' lineHeight='2rem'>Living room and lighting ideas that will inspire you this Winter.</Text>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='#BADAC4' margin={['auto','0','auto','0']} />
                        <TextTransparent>Choosing the right mattress is not so simple. We all sleep in a different way and we all want our mattress to adapt perfectly to our body.</TextTransparent>
                        <HStack mt={5} spacing={5}>
                            <Avatar src={Me} name='Reynaldy saputra'/>
                            <Text m={0} fontSize='md'>Reynaldy Saputra</Text>
                        </HStack>
                    </BoxTrending>
                </TrendingContent>

              {/* ------- CONTENT 4-------*/}          
              <Footer/>
            </ContainerApp>
        </Fragment>
    )
}

export default NewIn;