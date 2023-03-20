import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import { Heading } from '@chakra-ui/react';
const options = {
    method: 'GET',
    url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
    headers: {
      'X-RapidAPI-Key': '5be64c4d8emshb2907deb20c01e5p193e12jsn4b8679495c16',
      'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
    }
  };
const News = () => {
    const[loading,setLoader]= useState(true)
    const [data,setData]=useState()
    // console.log(data)

const fatchNews=()=>{
    axios.request(options).then(function (response) {
        setData(response.data);
        // console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}


useEffect(() => {
    fatchNews()
    
    setLoader(false) 
    }, [])


  return (
    <>
    <h1>Check live update news</h1>
    {loading ? <Loader/>:
        data && data.map((ele)=>{
return(
    <>
    <Heading>

  {ele.title}
   </Heading>
  
    <a  href={ele.url}>click here to get proper news</a>
    </>

)

        })
    }
    </>
  )
}

export default News