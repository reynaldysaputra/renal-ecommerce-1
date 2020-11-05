export const styleNewIn = {
    Container1NewIn : {
        gridTemplateColumns : {
            xl : '60% 40%',
            lg : '60% 40%',
            md : '60% 40%',
        },
        position : 'relative',
    },

    ButtonContainer : {
        width : 'full',
        py : ['20px','0px','40px','40px'],
        rounded : '0',
        border : '0',
        cursor : 'pointer',
        bg : '#FE7865',
        color:'white'
    },

    GridContent2 : {
        gridTemplateColumns : {
            sm : '100%',
            md : '100%',
            lg : '20% 80%',
            xl : '20% 80%',
        },
    }
}

{/* <Grid gridTemplateColumns={['100%','100%','40% 40%','40% 40%']} gap={10} justifyContent='center'>
                                
</Grid> */}

// {   
//     isDesktop_Laptop_Tablet && 
//     <>
//         <Box>
//         <Product textAlign='left' mb={7}>
//             <Center>
//                 <Image src={coba} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//         <Product textAlign='left' mb={7}>
//             <Center>
//                 <Image src={coba} w='90%' h='90%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//     </Box>
//     <Box>
//         <Product textAlign='left' mb={7}>
//             <Center w='full'>
//                 <Image src={coba1} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//         <Product textAlign='left' mb={7}>
//             <Center w='full'>
//                 <Image src={coba3} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//     </Box>
//     </>
// }
// {
//     isTablet && 
//     <>
//     <Box>
//     <Product textAlign='left' mb={7}>
//         <Center>
//             <Image src={coba} w='100%' />
//         </Center>
//         <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//         <Flex h='max-content'>
//             <Box h='max-content'>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//             </Box>
//             <Spacer/>
//             <Text m='0px'>150 $</Text>
//         </Flex>
//         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//         <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//     </Product>
//     <Product textAlign='left' mb={7}>
//         <Center>
//             <Image src={coba} w='90%' h='90%' />
//         </Center>
//         <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//         <Flex h='max-content'>
//             <Box h='max-content'>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//             </Box>
//             <Spacer/>
//             <Text m='0px'>150 $</Text>
//         </Flex>
//         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//         <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//     </Product>
// </Box>
// <Box>
//     <Product textAlign='left' mb={7}>
//         <Center w='full'>
//             <Image src={coba1} w='100%' />
//         </Center>
//         <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//         <Flex h='max-content'>
//             <Box h='max-content'>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//             </Box>
//             <Spacer/>
//             <Text m='0px'>150 $</Text>
//         </Flex>
//         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//         <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//     </Product>
//     <Product textAlign='left' mb={7}>
//         <Center w='full'>
//             <Image src={coba3} w='100%' />
//         </Center>
//         <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//         <Flex h='max-content'>
//             <Box h='max-content'>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//                 <BsStarFill color='#F5BB0A'/>
//             </Box>
//             <Spacer/>
//             <Text m='0px'>150 $</Text>
//         </Flex>
//         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//         <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//     </Product>
// </Box>
// </>
// }
// {
//     isMobile && 
//     <>
//         <Product textAlign='left' mb={7}>
//             <Center>
//                 <Image src={coba} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//         <Product textAlign='left' mb={7}>
//             <Center w='full'>
//                 <Image src={coba1} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//         <Product textAlign='left' mb={7}>
//             <Center>
//                 <Image src={coba} w='90%' h='90%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Jam tangan</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//         <Product textAlign='left' mb={7}>
//             <Center w='full'>
//                 <Image src={coba3} w='100%' />
//             </Center>
//             <Heading fontSize='2xl' fontWeight='semibold' fontFamily='fantasy' mb={1}>Celana levis</Heading>
//             <Flex h='max-content'>
//                 <Box h='max-content'>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                     <BsStarFill color='#F5BB0A'/>
//                 </Box>
//                 <Spacer/>
//                 <Text m='0px'>150 $</Text>
//             </Flex>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis quia in sint voluptas? Dolor dicta est commodi. Expedita quae aliquam nam in a velit non fuga vero impedit quibusdam?</Text>
//             <Button w='100%' bg='#2C2E3F' color='white' rounded='0' border='0'  _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>BUY</Button>
//         </Product>
//     </>
// }