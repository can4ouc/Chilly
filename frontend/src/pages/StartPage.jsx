import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../assets/images';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const StartPage = () => {

    const navigate = useNavigate();

    const onClick = (href) =>{
        return () =>{
            navigate(href)
        }
    }

  return (
    <Container>
        <div className='h-screen w-full relative overflow-hidden'>
            <div className='h-[60%] w-full absolute top-0'>
                <Carousel autoPlay
                        infiniteLoop
                        interval={2000}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                >
                    {
                        images.onboarding.map((img, ind) =>(
                            <div key={ind} className='h-full w-full'>
                                <img src={img} 
                                    alt="onboarding" 
                                    className='h-full w-full object-cover object-center'

                                />
                            </div>
                        ))
                            
                    }

                </Carousel>
            </div>

            <div className='absolute bottom-0 w-full h-[45%] 
                            rounded-t-2xl bg-slate-50 p-4 gap-2 flex flex-col'
            >

                <h1 className='text-2xl text-center mb-8 text-bold'>
                    Welcome to Chilly
                </h1>
                <Button onClick={onClick('/login')}>
                    Sign In
                </Button>

                <Button onClick={onClick('/signup')}
                        variant='outlined'
                >
                    Sign Up
                </Button>
                
            </div>
        </div>
    </Container>
  )
}

export default StartPage