import React, { useEffect, useState } from 'react'
import axios from "axios";
import { HStack } from '@chakra-ui/react';
import Loader from './Loader';

const NewsM = () => {

  
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
    headers: {
      'X-RapidAPI-Key': '5be64c4d8emshb2907deb20c01e5p193e12jsn4b8679495c16',
      'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
    }
  };
  
  
  
  const [data,setData]=useState([])
  const[loading,setLoader]= useState(true)
  useEffect(() => {
    const fatchapisec=()=>{
    axios.request(options).then(function (response) {
        console.log(response.data);
        setData(response.data)
    }).catch(function (error) {
        console.error(error);
        alert('API TACHING ERROR404')
    });
}
 
fatchapisec()
    setLoader(false)
  }, [])
  


  return (
    loading ? <Loader/>: <>
      {
        data && data.map((ele)=>{
            return(
                 <HStack p={'8'} border={'solid 1px '} m={'5'} h={'20VH'}>
              <a href={ele.url}>
                <h1 > {ele.title}</h1>
                <p className='p1'>{ele.description}</p>
    </a>
    <hr />
                </HStack>
            )
        })
    }
    </>
  )
}

export default NewsM
// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Loader from './Loader';
// import { Box, Heading } from '@chakra-ui/react';
// const options = {
//     method: 'GET',
//     url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
//     headers: {
//       'X-RapidAPI-Key': '5be64c4d8emshb2907deb20c01e5p193e12jsn4b8679495c16',
//       'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
//     }
//   };
// const NewsM = () => {
//     const[loading,setLoader]= useState(true)
//     const [data,setData]=useState()
//     // console.log(data)

// const fatchNews=()=>{
//     axios.request(options).then(function (response) {
//         setData(response.data);
//         // console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }


// useEffect(() => {
//     fatchNews()
    
//     setLoader(false) 
//     }, [])


//   return (
//     loading ? <Loader/>: <Box>
//     <h1>Check live update news</h1>
//     {loading ? <Loader/>:
//         data && data.map((ele)=>{
// return(
//     <>
//     <Heading>

//   {ele.title}
//    </Heading>
  
//     <a  href={ele.url}>click here to get proper news</a>
//     </>

// )

//         })
//     }
//     </Box>
//   )
// }

// export default NewsM