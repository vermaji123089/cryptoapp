import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, Image, Text, VStack } from '@chakra-ui/react'

const CoinCard =({id,name, price,symbol,img,currencySymbol='₹'})=>(
      
    <Link to={`/coin/${id}`} >
  <VStack w={'52'} shadow={'lg'}
  p={'8'}
  transition={'all 0.5s'}
  m={'4'}
  borderRadius={'lg'}
  css={{
  "&:hover":{
    transform:"scale(1.1)"
  }
  
  }}
  >
    <Image src={img} w={'10'} objectFit={'containt'} alt={'exchanges'}/>
  <Heading size={'md'} noOfLines={'1'}>{symbol }</Heading>
  <Text noOfLines={'1'}>{name} </Text>
  <Text noOfLines={'1'}>{price?`${currencySymbol}${price}`:"na"} </Text>
  </VStack>
    </Link>
    
  )
  


export default CoinCard