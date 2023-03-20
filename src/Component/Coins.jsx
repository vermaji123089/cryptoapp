import React from 'react'
import CoinCard from './CoinCard'
import axios from 'axios'
import Error from './Error'
import { server } from '../index'
import { useEffect, useState } from 'react'
import { Button, Container, HStack, Input, Radio, RadioGroup, } from '@chakra-ui/react'
import Loader from './Loader'

const Coins = () => {

  const[Searcht,setSearcht]= useState('')


  const[Coin,setcoin]= useState([])
  const[loading,setLoader]= useState(true)
  const[error,seterror]= useState(false)
  const[Page,setPage]= useState(1)
  const[currency,setcurrency]= useState("inr")
  const currencySymbol = currency==='inr'?"₹":currency==='eur'?'€':'$'
  const chnagepage=(Page)=>{
setPage(Page)
setLoader(true)
  }
  const btns= new Array(132).fill(1)
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
  
  if(error) return(<Error/>)
  return (
  
    <Container maxW={'container.xl'}>
     <Input w={'25'} p={'1'}  m={'5'} placeholder={'search'}
      type={'text'}
      onChange={(e)=> setSearcht(e.target.value)}
      />
{
  loading ? <Loader/>:<>

  <RadioGroup value={currency } onChange={setcurrency} p={'8'}>
    <HStack spacing={'4'}>

      <Radio value='inr'>₹INR</Radio>
      <Radio value='usd'>$USD</Radio>
      <Radio value='eur'>€EUR</Radio>
    </HStack>
  </RadioGroup>
  <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
    {
      Coin.filter((value)=>{
        if(Searcht===''){
          return value
        } else if(value.name.toLowerCase().includes(Searcht.toLocaleLowerCase())){
          return value
        }
      }).map((ele)=>(
        
        <CoinCard 
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
  <HStack overflowX={'auto'} p={'8'}>
   
    {
      btns.map((item,index)=>{
     return(<Button
     key={index}
        bgColor={'blackAlpha.900'}
        color={'white'}
        onClick={()=>chnagepage(index+1)}
        >
          {index+1}
        </Button>)
      })
    }
  </HStack>
  </>
}
    </Container>
  )
}
export default Coins