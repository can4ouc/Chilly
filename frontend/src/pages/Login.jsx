import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
  return (
    <Container>
        <div className='flex flex-col items-center justify-center h-screen w-full gap-4 p-4'>

            <div className='bg-gray-400 rounded-full h-[100px] w-[100px] flex flex-col items-center justify-center '>
                Logo here
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