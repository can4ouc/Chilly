import React from 'react'
import Stories from 'react-insta-stories';
import images from '../assets/images';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';

const Story = () => {

    const navigate = useNavigate()

    const onFinish = () =>{
        navigate('/feed')
    }

  return (
    <Container>
        <Stories
                stories={images.onboarding}
                defaultInterval={3000}
                width={'100%'}
                height={'100vh'}
                onAllStoriesEnd={onFinish}
        
        />
    </Container>
  )
}

export default Story