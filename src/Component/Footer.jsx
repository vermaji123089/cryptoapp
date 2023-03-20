import {  Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box background={'blackAlpha.900'} color={'whiteAlpha.700'} py={['16','8']} px={'16'} minH={'48'} >
<Stack  
direction={['column','row']}
h={'full'}
alignItems={'center'}
>
<VStack w={'full'} alignItems={['center','flex-start']} >
<Text fontWeight={'bold'}>About US</Text>
<Text>Founder : MOHIT VERMA</Text>
<Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} >Email: vermaji123089@gmail.com</Text>
</VStack>
<VStack>
    {/* <Avatar boxSize={'28'} mt={['4','0']} src={'https://pps.whatsapp.net/v/t61.24694-24/315769892_700770638147268_330371032929238813_n.jpg?ccb=11-4&oh=01_AdTFdFZuKkMhepedrcsNXg8xnuABmxg3E0vffuXP6ta0UQ&oe=63D87F2A'}/> */}
    <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} >Our Founder</Text>

    <Box><h1> &copy; 2023 to 2024 all <span background={'red'}>♥</span>MOHIT VERMA right reserver </h1></Box>
</VStack>
</Stack>
   </Box>
  )
}

export default Footer