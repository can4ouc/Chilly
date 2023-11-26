import React from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/chilly-logo.png';

function SignUp() {

    const navigate = useNavigate()

    const onClick = () =>{
        navigate('/interest')
    }

  return (
    <Container>
        <div className='flex flex-col items-center justify-center h-screen w-full gap-4 p-4'>

            <div className='bg-gray-100 rounded-full h-[150px] w-[150px] m-15 flex flex-col items-center justify-center '>
              <img src={Logo} alt="logo" 
                     className='w-full h-full object-cover'
                />
            </div>

            <Input label={'Email'} placeholder='joe@example.com'/>
            <Input label={'Username'} placeholder='jean-marc'/>
            <Input label={'Password'} placeholder='* * * * * * *'
                    type='password'
            />
            <Input label={'Confirm password'} placeholder='* * * * * * *'
                    type='password'
            />
            <Button className='w-full'
                    onClick={onClick}
            >
                Create account
            </Button>
        </div>
    </Container>
  )
}

export default SignUp