import { Button, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (<>
        <HStack p={'4'}
       
            shadow={'base'}
            bgColor={'blackAlpha.900'}
        >
            <Button variant={'unstyled'}
                color={'white'} >
                <Link to={'/'}>Home</Link>
            </Button>
            <Button variant={'unstyled'}
                color={'white'} >
                <Link to={'/Exchanges'}>Exchanges</Link>
            </Button>
            <Button variant={'unstyled'}
                color={'white'} >
                <Link to={'/coin'}>Coin</Link>
            </Button>
            <Button variant={'unstyled'}
                color={'white'} >
                <Link to={'/NewsM'}>NewsM</Link>
            </Button>
           
        </HStack>
        <hr />
        <Heading m={'0'} p={'5'} h={'85'} color={'white'} bgColor={'blackAlpha.900'}  w={'full'} fontFamily><span>Mj</span> Crypto<span>...</span></Heading>
        </>
    )
}

export default Header