
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import  Chart  from './Chart'
const CoinDetail = () => {

  const[Coin,setcoin]= useState({})
  const[loading,setLoader]= useState(true)
  // const[error,seterror]= useState(false)
  const[currency,setcurrency]= useState("inr")
const [days, setdays]= useState('24h');
const [ChartArray, steCArry]= useState([]);

  const currencySymbol = currency==='inr'?"₹":currency==='eur'?'€':'$'
  const param= useParams();
   
  const btns=['24h','7d','14d','30d','60d','200d','1y','max']
const switchChartStats=(key)=>{
switch (key) {
  case '24h':
    setdays('24h')
    setLoader(true)
    break;
    case '7d':
      setdays('7d')
      setLoader(true)
      break;

      case '14d':
        setdays('14d')
        setLoader(true)
        break;

        case '30d':
          setdays('30d')
          setLoader(true)
          break;

          case '60d':
            setdays('60d')
            setLoader(true)
            break;

            case '200d':
              setdays('200d')
              setLoader(true)
              break;

              case '1y':
                setdays('1y')
                setLoader(true)
                break;
                
              case 'max':
                setdays('max')
                setLoader(true)
                break;
  default:
    break;
}
}



  useEffect(() => {
    const fatchCoin = async() =>{
    try {
      const {data}=await axios.get(`${server}/coins/${param.id}`)
      const {data:chartdata}=await axios.get(`${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`);
      setcoin(data)
      steCArry(chartdata.prices)
      // console.log(chartdata);
      setLoader(false) 
    } catch (error) {
    
      setLoader(false)
    }
    }
    fatchCoin()
    
  }, [param.id,currency,days])
 

  return(
    <Container maxW={'container.xl'}>
{
  loading ? <Loader/>:<>
 

  <Box width={'full'} borderWidth={1}>
    <Chart arr={ChartArray} currency={currencySymbol} days={days} />
  </Box> 

<HStack overflow={'auto'} p={'4'}>
{
  btns.map((ele)=>(
  <Button key={ele} onClick={()=>switchChartStats(ele)}>{ele}</Button>
  ))
}
</HStack>

  
  <RadioGroup value={currency } onChange={setcurrency} p={'8'}>
    <HStack spacing={'4'}>

      <Radio value='inr'>₹INR</Radio>
      <Radio value='usd'>$USD</Radio>
      <Radio value='eur'>€EUR</Radio>
    </HStack>
  </RadioGroup>

  <VStack spacing={'4'}
  p={'16'}
  alignItems={'flex-start'}
  >
<Text fontSize={'small'}
alignSelf='center'
opacity={'0.7'}
>
Last Update on {Date(Coin.last_updated).split('G')[0]}

</Text>
<Image src={Coin.image.large} w={'16'} h={'16'} objectFit={'contain'}/>

<Stat>
  <StatLabel>{Coin.name}</StatLabel>
  <StatNumber>{currencySymbol}{Coin.market_data.current_price[currency]}</StatNumber>
  <StatHelpText>
    <StatArrow type={Coin.market_data.price_change_percentage_24h>0 ? 'increase':'decrease'}/>
    {Coin.market_data.price_change_percentage_24h}%
  </StatHelpText>
</Stat>
<Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'} >
  {`#${Coin.market_cap_rank}`}
</Badge>
<CoustomBar high={`${currencySymbol}${Coin.market_data.high_24h[currency]}`} 
 low={`${currencySymbol}${Coin.market_data.low_24h[currency]}`} />

<Box w={'fit-content'}
p={'4'}

>
<Item title={'Max supply'} value={Coin.market_data.max_supply} />
<Item title={'circulating supply'} val ue={Coin.market_data.circulating_supply} />
<Item title={'circulating cap'} value={`${currencySymbol}${Coin.market_data.market_cap[currency]}`} />
<Item title={'All time low'} 
value={`${currencySymbol}${Coin.market_data.atl[currency]}`} />
<Item title={'All time high'} 
value={`${currencySymbol}${Coin.market_data.ath[currency]}`} />
</Box>

  </VStack>
  </>
}
</Container>
  )
  
}

export default CoinDetail

const Item=({title,value})=>(
  <HStack justifyContent={'space-between'}
  w={'full'}
  my={'4'}
 
  >
<Text  letterSpacing={'widest'}>{title}</Text>
<Text>{value}</Text>

  </HStack>
)

const CoustomBar =({high,low})=>(
  <VStack w={'full'}>
    <Progress value={'50'} colorScheme={'teal'} w={"full"}/>
    <HStack justifyContent={'space-between'} w={'full'}>
<Badge children={low} colorScheme={'red'}/>
<Text fontSize={'sm'}>24H Range</Text>
<Badge children={high} colorScheme={'green'}/>
    </HStack>
  </VStack>
)