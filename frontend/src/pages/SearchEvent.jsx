import React from 'react'
import Container from '../components/Container'
import images from '../assets/images'
import { useNavigate } from 'react-router-dom'

const SearchCard = () =>{

    return(
        <div className='w-full p-2 gap-2 rounded-xl bg-white drop-shadow-md flex items-center'>
            <img src={images.onboarding[1]} alt="event" 
                 className='rounded-xl w-[30%] aspect-square object-cover object-center'
            />
            <div>
                <p className='uppercase text-xs text-orange-500'>
                    thu, 24 sept at 19:30
                </p>
                <p className='font-semibold'>
                    The greatest festival of food
                </p>

            </div>
        </div>
    )
}

const SearchEvent = () => {

    const navigate = useNavigate()
    const goToMap = () =>{
        navigate('/feed/map')
    }

  return (
    <Container>
        <div className='w-full flex flex-col gap-4 p-4'>

            <div className='w-full flex items-center justify-between'>
                <p className=''>
                    Search Event
                </p>
                <button
                        onClick={goToMap}
                >
                    Map View
                </button>
            </div>

            <div className='w-full border drop-shadow-md flex items-center rounded-md overflow-hidden bg-white'>
                <div className='w-[40px] h-[40px] bg-slate-300'/>
                <input type="search" 
                       className='p-2 grow focus:outline-orange-200'
                       placeholder='play football'
                />
            </div>

            <div className='flex flex-col gap-4'>
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />

            </div>

        </div>

    </Container>
  )
}

export default SearchEvent