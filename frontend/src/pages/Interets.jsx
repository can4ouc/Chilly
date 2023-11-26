import React, { useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Location from './Location'

const interests = [
    "club",
    "dance",
    "sport",
    "food",
    "conference",
    "outdoor",
    "running",
    "observance",
    "business",
    "music",
    "concert",
    "holiday-national",
    "holiday",
    "observance-season",
    "soccer"
  ]

function Interets() {

    const [interested, setInterested] = useState(
        interests.reduce((acc, curr) => ({...acc, [curr]: false}), {})
        )

    const navigate = useNavigate()

    const [step, setStep] = useState('interests')

    const onInterestChoose = () =>{
        setStep('location')
    }

    const onLocationChoose = (local) =>{
        // console.log(local, '-->' )
        navigate('/feed')
    }

    const handleInterest = (val) => {
        return () => setInterested(curr => ({...curr, [val]: !curr[val]}))
    }

    if(step === 'location'){
        return <Location onSubmit={onLocationChoose}/>
    }

  return (
    <Container>
        <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-2xl text-bold'>
                Choose your interest
            </h1>

            <div className='flex gap-2 w-full py-2 items-center'>
                <p className='whitespace-nowrap'>
                    You choosed:
                </p>

                <div className='grow flex gap-2 overflow-x-auto p-2'>
                    {
                       Object.keys(interested).map((itm, ind) => (
                        interested[itm]?
                        <div className='w-fit p-1 rounded-2xl bg-gray-300'
                             key={ind}
                        >
                            {itm}
                        </div>
                        :
                        null
                       )) 
                    }
                </div>
            </div>


            <div className='grow overflow-y-auto grid gap-4 grid-cols-2'>

                {
                    interests.map((itm, ind) =>(
                        <button className={`border-4 rounded-2xl w-full h-[140px] overflow-hidden bg-gray-200 ${interested[itm]? 'border-indigo-400' : 'border-gray-100'}`}
                                onClick={handleInterest(itm)}
                                key={ind}
                        >
                            {itm}

                        </button>
                    ))
                }
            </div>

            <Button onClick={onInterestChoose}>
                Next
            </Button>
        </div>
        
    </Container>
  )
}

export default Interets