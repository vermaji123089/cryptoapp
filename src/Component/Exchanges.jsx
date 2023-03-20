import React  from 'react'
import axios from 'axios'
import Error from './Error'
import { server } from '../index'
import { useEffect, useState } from 'react'
import { Container, HStack, VStack, Image, Heading, Text, Input } from '@chakra-ui/react'
import Loader from './Loader'
const Exchanges = () => {
  const[exchanges,setexchanges]= useState([])
  const[loading,setLoader]= useState(true)
  const[error,seterror]= useState(false)
  const[Searcht,setSearcht]= useState('')

  useEffect(() => {
    const fatchapi = async() =>{
    try {
      const {data}=await axios.get(`${server}/exchanges`)
      // console.log(data);
      setexchanges(data)
      setLoader(false)
    } catch (error) {
      seterror(true)
      setLoader(false)
    }
    }
    fatchapi()
    
  }, [])
  if(error) return(<Error/>)
  return (
   
    <Container maxW={'container.xl'}>
      <Input w={'25'} p={'1'}  m={'5'} placeholder={'search'}
      type={'text'}
      onChange={(e)=> setSearcht(e.target.value)}
      />
{
  loading ? <Loader/>:<>
  <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
    {
      exchanges.filter((value)=>{
        if(Searcht===''){
          return value
        } else if(value.name.toLowerCase().includes(Searcht.toLocaleLowerCase())){
          return value
        }
      }).map((ele)=>{
      return(
        <>
        <ExchangesCard 
        key={ele.id}
        name={ele.name}
        img={ele.image}
        rank={ele.trust_score_rank}
        url={ele.url}
        />
       
        </>
      )
      })
    }
  </HStack>
  </>
}
    </Container>
  )
}
const ExchangesCard =({name, url,rank,img})=>(
  <a href={url} target={"blank"}>
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
<Heading size={'md'} noOfLines={'1'}>{rank }</Heading>
<Text noOfLines={'1'}>{name} </Text>
</VStack>
  </a>
)
export default Exchanges