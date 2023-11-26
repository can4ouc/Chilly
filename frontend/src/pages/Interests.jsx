import React, { useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Location from './Location'


const beach = require('../assets/tags/beach.png')
const eco = require('../assets/tags/beach-cleaning.png')
const birthday = require('../assets/tags/birthday.png')
const club = require('../assets/tags/clubing.png')
const corp = require('../assets/tags/corp.png')
const dance = require('../assets/tags/dance.png')
const event = require('../assets/tags/event.png')
const festival = require('../assets/tags/festival.png')
const hiking = require('../assets/tags/hiking.png')
const meetup = require('../assets/tags/meetup.png')
const openair = require('../assets/tags/open-air-party.png')
const sports = require('../assets/tags/sports.png')

const interests = [
    {key: 'Beach', value: beach},
    {key: 'Eco', value: eco},
    {key: 'Club', value: club},
    {key: 'Dance', value: dance},
    {key: 'Hiking', value: hiking},
    {key: 'Festival', value: festival},
    {key: 'Meetup', value: meetup},
    {key: 'Birthday', value: birthday},
    {key: 'Corp', value: corp},
    {key: 'Event', value: event},
    {key: 'Open Air', value: openair},
    {key: 'Sports', value: sports},
]

function Interests() {

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
                        <div className='w-fit p-2 rounded-2xl bg-gray-300'
                             key={ind}
                             style={{backgroundColor: '#F82B99'}}
                        >
                            {itm}
                        </div>
                        :
                        null
                       )) 
                    }
                </div>
            </div>


            <div className='grow overflow-y-auto grid gap-4 grid-cols-4'>
                {
                    interests.map( item =>(
                        <button className={`tags border-4 rounded-2xl w-full h-[140px] overflow-hidden bg-gray-200 ${interested[item.key]? 'border-[#F82B99]-400 tag-active' : 'border-gray-100'}`}
                                onClick={handleInterest(item.key)}
                                key={item.key}
                        >
                            <img src={item.value} className='w-full' style={{zIndex: '-5', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
                            <p style={{zIndex: '5', display: 'block', width: '100%', backgroundColor: '#F82B99', color: '#fff'}}
                               className='bg-white'>{item.key}</p>
                        </button>
                    ))
                }
            </div>

            <Button onClick={onInterestChoose} style={{backgroundColor: '#F82B99'}}>
                Next
            </Button>
        </div>
        
    </Container>
  )
}

export default Interests