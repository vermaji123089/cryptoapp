import { Box, Heading, HStack,  Image,  Input,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import {} from 'framer-motion'
import CoinCard from './CoinCard'
import axios from 'axios'

import Loader from './Loader'
import Error from './Error'

import { server } from '../index'
import NewsM from './NewsM'
const Home = () => {
  const[Searcht,setSearcht]= useState('')
  const[Coin,setcoin]= useState([])
  const[loading,setLoader]= useState(true)
  const[error,seterror]= useState(false)
  const[Page,setPage]= useState(1)
  const[currency,setcurrency]= useState("inr")
  const currencySymbol = currency==='inr'?"₹":currency==='eur'?'€':'$'

 
  useEffect(() => {
    const fatchCoin = async() =>{
    try {



      const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${Page}`)
      setcoin(data)
      // console.log(data);
      setLoader(false) 
    } catch (error) {
      seterror(true)
      setLoader(false)
      
    }
    }
    fatchCoin()
    
  }, [currency,Page])

  return (
    loading ? <Loader/>:<>
  <Box 
   w={'full'}
   h={'fit-content'}
   >
  
    <Input w={'25'} p={'1'}  m={'5'} placeholder={'search'}
      type={'text'}
      onChange={(e)=> setSearcht(e.target.value)}
      />
    <Text fontSize={'x-large'} p={'2'}>check all crypto Price</Text>
   
    <HStack overflowX={'auto'} justifyContent={'space-evenly'}>
  {
      Coin.filter((value)=>{
        if(Searcht===''){
          return value
        } else if(value.name.toLowerCase().includes(Searcht.toLocaleLowerCase())){
          return value
        }
      }).map((ele)=>(
        
        loading ? <Loader/>:  <CoinCard 
        key={ele.id}
        id={ele.id}
        price={ele.current_price}
        name={ele.name}
        img={ele.image}
        symbol={ele.symbol}
        currencySymbol={currencySymbol}
       
        />
       
      
      ))
      
      }
  </HStack>
  
   </Box>
   <Box h={'45vh'} m={'5'} p={'5'}>
<Image h={'45vh'} w={'full'} alignContent={'center'}  src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/PJTR3KRDWJCRVE3QREM6KUOK7A.png'/>
   </Box>
 
 <NewsM/>
  </>
  )
}

export default Home