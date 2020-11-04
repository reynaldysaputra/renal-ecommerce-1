import React, { Fragment } from 'react';
import {Container, Grid, Box, Image, Text, VStack, Heading, Button, SimpleGrid, Divider, useMediaQuery} from '@chakra-ui/core'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Figure} from './childComponent';
import chairs from '../../img/01_Halaman-newIn/header.png';
import BarangBekas from '../../img/01_Halaman-newIn/RouteBarangBekas/barangBekas.jpg';
import Kursi_Bangku from '../../img/01_Halaman-newIn/RouteKursi&Bangku/bangku.jpg';
import LampuBelajar from '../../img/01_Halaman-newIn/RouteLampuBelajar/lampuBelajar.png';
import Meja from '../../img/01_Halaman-newIn/RouteMeja/tabel.png';
import Sofa from '../../img/01_Halaman-newIn/RouteSofa/sofa.png';
import Tanaman from '../../img/01_Halaman-newIn/RouteTanaman/aksesoris tanaman.png';

function NewIn() {
    const [isDesktop_Laptop_Tablet, isMobile] = useMediaQuery([
        '(min-width: 1024px)', '(min-width: 200px) and (max-width:767px)'
    ])

    return(
        <Fragment>
            <Container mt='3%' maxW={{sm:'sm' ,lg:'lg', md:'lg', xl:'lg'}} pos='relative' boxSizing='border-box'>
                {/* ------- CONTENT 1 -------*/}
                <Grid layerStyle='Container1NewIn'>
                    <VStack h={['auto','60vh','60vh','80vh']} bg='#F5F8FC' px={['0','0','0','0']}>
                        <Image src={chairs} alt='Chairs' mt={['25%', '40%', '30%', '20%']} w={['60%','70%','auto','auto']} ml={['0','0','-10%','-10%']} />

                        <Box pos={{base:'relative', xl:'absolute', md:'absolute', lg:'absolute'}} top={['0','30%','25%','15%']} left={['0','30%','55%','50%']} my={['10% !important','0%','0%','0%']} fontFamily='poppins' textAlign={['center','left','left','left']}>
                            <Text m='0' fontWeight='bold'>New Collection</Text>
                            <Heading fontWeight='bold' fontSize={{base:'4xl',md:'6xl !important',lg:'6xl',xl:'6xl'}} mb='15px' mt='15px !important'>Chairs & Stools</Heading>
                            <Text w={{base:"100%",md:'50%',lg:'50%',xl:'50%'}} fontWeight='thin' opacity='0.3' fontSize='sm'>Armchair upholstered in synthetic leather. Powder coated steel legs.</Text>
                        </Box>
                    </VStack>
                    <SimpleGrid h={['auto','60vh','60vh','80vh']} bg='#FFFBF8' alignContent='flex-end' textAlign='left'>
                        <Button rightIcon={<ArrowForwardIcon />} layerStyle='ButtonContainer' _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>SHOP NOW</Button>
                    </SimpleGrid>
                </Grid>

                {/* ------- CONTENT 2 -------*/}
                <Grid layerStyle='GridContent2' mt='5%' fontFamily='poppins'> 
                    <SimpleGrid h='max-content'>
                        <Box textAlign={['center','left','center','left']}>
                            <Text fontWeight='bold'>On Sale</Text>
                            <Heading my={5}>Up to 20% off</Heading>
                            <Divider w={['80%','0','40%','80%']} border='2px' color='#2C2E3F' margin={['auto','0','auto','0']} />
                            <Text opacity='0.3' fontSize='xs'>Our entire Winter collection.</Text>
                        </Box>
                        <Box textAlign='center' mb={['5%']} mt={['','','10%','15%']}>
                            {isDesktop_Laptop_Tablet ? 
                                <>
                                    <Text cursor='pointer'>Accessories</Text>
                                    <Text cursor='pointer'>Chairs & Stools</Text>
                                    <Text cursor='pointer'>Sofas & armchairs</Text>
                                    <Text cursor='pointer'>Tables</Text>
                                    <Text cursor='pointer'>Lighting</Text>
                                    <Text cursor='pointer'>Furnishings</Text>
                                </>
                                :
                                <Button w='50%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>Menu</Button>
                            }
                        </Box>
                    </SimpleGrid>
                    <Grid templateColumns={['100%','100%','50% 50%','50% 50%']} gridColumnGap={5} gridRowGap={[7,5,0,0]} p='30px' boxSizing='border-box' w='80%' justifySelf='center' h='auto' >
                        <Figure size='80%' justifySelf='flex-end' bg='#BADAC4' mt={['','','10%','15%']}>
                            <Image src={Tanaman} w='80%' mb='25%' mt={['','','-20%','-25%']} />
                            <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Accessories</Box>
                        </Figure>
                        <Figure size='80%' justifySelf='flex-start' mt={['','','40%','45%']} bg='#DBEDF0'>
                            <Image src={Sofa} w='80%' mb='25%' mt={['','','-20%','-25%']} />
                            <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Sofas & armchairs</Box>
                        </Figure>
                        <Figure size='100%' justifySelf='flex-start' bg='#DBEDF0'>
                            <Image src={Kursi_Bangku} w='100%'/>
                            <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Chairs & Stools</Box>
                        </Figure>
                        <Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']} pt={['25%','','30%','35%']}>
                            <Box w='full' position='absolute' top='0' zIndex='-1' h='80%' bg='#FFEDDB'/>
                            <Image src={Meja} w='100%' />
                            <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Tables & Stools</Box>
                        </Figure>
                        <Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']}>
                            <Box w='75%' position='absolute' top='0' right='0' zIndex='-1' h='70%' bg='#FFEDDB'/>
                            <Image src={LampuBelajar} w='80%' />
                            <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Lighting</Box>
                        </Figure>
                        <Figure size='100%' justifySelf='flex-start' bg='#DBEDF0'>
                            <Image src={BarangBekas} w='100%'/>
                            <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Chairs & Stools</Box>
                        </Figure>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default NewIn;