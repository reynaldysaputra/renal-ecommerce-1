import React, { Fragment } from 'react';
import {Container, Grid, Box, Image, Text, VStack,Center, Heading, Button, SimpleGrid, Divider, useMediaQuery,HStack, Flex, Spacer, Avatar} from '@chakra-ui/core'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Figure, Product} from './childComponent';
import {BsStarFill} from 'react-icons/bs';
import chairs from '../../img/01_Halaman-newIn/header.png';
import BarangBekas from '../../img/01_Halaman-newIn/RouteBarangBekas/barangBekas.jpg';
import Kursi_Bangku from '../../img/01_Halaman-newIn/RouteKursi&Bangku/bangku.jpg';
import LampuBelajar from '../../img/01_Halaman-newIn/RouteLampuBelajar/lampuBelajar.png';
import Meja from '../../img/01_Halaman-newIn/RouteMeja/tabel.png';
import Sofa from '../../img/01_Halaman-newIn/RouteSofa/sofa.png';
import Tanaman from '../../img/01_Halaman-newIn/RouteTanaman/aksesoris tanaman.png';
import RuangKeluarga from '../../img/01_Halaman-newIn/ruangKeluarga.jpg';
import Me from '../../img/01_Halaman-newIn/me.jpg';
import Footer from '../../component/footer/footer';

import coba from '../../img/01_Halaman-newIn/RouteTanaman/2.jpg';
import coba1 from '../../img/01_Halaman-newIn/RouteTanaman/4.jpeg';
import coba3 from '../../img/01_Halaman-newIn/RouteTanaman/5.jpg';

function NewIn() {
    const [isDesktop_Laptop_Tablet, isTablet , isMobile] = useMediaQuery([
        '(min-width: 1024px)', '(min-width: 768px) and (max-width : 1024px)', '(min-width: 200px) and (max-width:767px)'
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
                    <Grid gridTemplateColumns={['100%','100%','40% 40%','40% 40%']} gap={10} justifyContent='center'>
                        {
                            isDesktop_Laptop_Tablet && 
                            <>
                                <Box>
                                <Product textAlign='left' mb={7}>
                                    <Center>
                                        <Image src={coba} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                                <Product textAlign='left' mb={7}>
                                    <Center>
                                        <Image src={coba} w='90%' h='90%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                            </Box>
                            <Box>
                                <Product textAlign='left' mb={7}>
                                    <Center w='full'>
                                        <Image src={coba1} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                                <Product textAlign='left' mb={7}>
                                    <Center w='full'>
                                        <Image src={coba3} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                            </Box>
                            </>
                        }
                        {
                            isTablet && 
                            <>
                            <Box>
                            <Product textAlign='left' mb={7}>
                                <Center>
                                    <Image src={coba} w='100%' />
                                </Center>
                                <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                            </Product>
                            <Product textAlign='left' mb={7}>
                                <Center>
                                    <Image src={coba} w='90%' h='90%' />
                                </Center>
                                <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                            </Product>
                        </Box>
                        <Box>
                            <Product textAlign='left' mb={7}>
                                <Center w='full'>
                                    <Image src={coba1} w='100%' />
                                </Center>
                                <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                            </Product>
                            <Product textAlign='left' mb={7}>
                                <Center w='full'>
                                    <Image src={coba3} w='100%' />
                                </Center>
                                <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                            </Product>
                        </Box>
                        </>
                        }
                        {
                            isMobile && 
                            <>
                                <Product textAlign='left' mb={7}>
                                    <Center>
                                        <Image src={coba} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                                <Product textAlign='left' mb={7}>
                                    <Center w='full'>
                                        <Image src={coba1} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                                <Product textAlign='left' mb={7}>
                                    <Center>
                                        <Image src={coba} w='90%' h='90%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                                <Product textAlign='left' mb={7}>
                                    <Center w='full'>
                                        <Image src={coba3} w='100%' />
                                    </Center>
                                    <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
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
                                    <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
                                </Product>
                            </>
                        }
                    </Grid>
                </Grid>

                {/* ------- CONTENT 3 -------*/}
                <Grid templateColumns={['100%','100%','60% 40%','40% 30% 30%']} p={10} mt={5}>
                    <Box textAlign='left' pr={10} mb={['10%','10%','','']}>  
                        <Text>Trending</Text>
                        <Heading>Latest News</Heading>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='#2C2E3F' margin={['auto','0','auto','0']} />
                        <Text opacity='0.3' fontSize='xs'>Brighten up your living areas this Winter with top tips from our interior design team.</Text>
                        <Button rightIcon={<ArrowForwardIcon />}  bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}} cursor='pointer' mt={3}>EXPLORE ALL ARTICLES</Button>
                    </Box>
                    <Image src={RuangKeluarga} w='full' />
                    <Box p={5}>
                        <Text fontSize='3xl' fontWeight='medium' lineHeight='2rem'>Living room and lighting ideas that will inspire you this Winter.</Text>
                        <Divider w={['80%','0','50%','50%']} border='2px' color='#BADAC4' margin={['auto','0','auto','0']} />
                        <Text opacity='0.3' fontSize='xs'>Choosing the right mattress is not so simple. We all sleep in a different way and we all want our mattress to adapt perfectly to our body.</Text>
                        <HStack mt={5} spacing={5}>
                            <Avatar src={Me} name='Reynaldy saputra'/>
                            <Text m={0} fontSize='md'>Reynaldy Saputra</Text>
                        </HStack>
                    </Box>
                </Grid>

              {/* ------- CONTENT 4-------*/}          
              <Footer/>
            </Container>
        </Fragment>
    )
}

export default NewIn;