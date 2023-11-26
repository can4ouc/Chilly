import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'
import Logo from '../assets/chilly-logo.png';

const Login = () => {
  return (
    <Container>
        <div className='flex flex-col items-center justify-center h-screen w-full gap-4 p-4'>

            <div className='bg-gray-100 rounded-full h-[150px] w-[150px] m-15 flex flex-col items-center justify-center '>
              <img src={Logo} alt="logo" 
                     className='w-full h-full object-cover'
                />
            </div>

            <Input label={'Email'} placeholder='Email'/>
            <Input label={'Password'} placeholder='Password'/>
            <Button className='w-full'>
                Sign
            </Button>
        </div>
    </Container>
  )
}

export default Login