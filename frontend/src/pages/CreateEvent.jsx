import React, { useState } from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import useTags from '../hooks/useTags'
import useCreateEvent from '../hooks/useCreateEvent'
import Loader from '../components/Loader'


const FirstStep = ({setStep, event, setEvent}) => {

    const onChange = (key)=>{
        return (e) =>{
            setEvent(curr => ({...curr, [key]: e.target.value}))
        }
    }

    return(
        <div className='w-full h-screen overflow-y-auto flex flex-col gap-2 p-4'>
            <Input label='Title'
                    value={event.title}
                    onChange={onChange('title')}
            />
            <Input label='Description' 
                   multiline
                   value={event.description}
                   onChange={onChange('description')}
            />
            <Input label='Address'
                    value={event.address}
                    onChange={onChange('address')}
            />
            <Input label='Date' 
                    type='date'
                    value={event.date}
                    onChange={onChange('date')}
            />
            <Input label='Time' 
                    type='time'
                    value={event.time}
                    onChange={onChange('time')}
            />
            <Button className='mt-8'
                    onClick={() => {
                        setStep('second')
                    }}
            >
                Next
            </Button>

        </div>
    )
}

const SecondStep = ({event}) =>{
    const {data:tags, isLoading} = useTags(event.title, event.description)
    const {mutateAsync: createEvent, isLoading: creationLoading} = useCreateEvent()
    console.log(tags)

    const handleCreation = async () =>{

        const payload = {
            title: event.title,
            date: `${event.date} ${event.time}` ,
            place: event.address,
            description: event.description,
            tags: tags?.tags || [],
            image: tags?.image || []
          }
        createEvent(payload)
    }

    return(
        <div className='w-full h-screen overflow-y-auto flex flex-col gap-2 p-4'>
            <div>
                <p>
                    Tags
                </p>
                <div className='h-[200px] overflow-y-auto border rounded-xl p-2 flex gap-2'>
                    {
                        isLoading?
                        <div className='w-full h-full flex items-center justify-center'>
                            <Loader />
                        </div>
                        :
                        tags?.tags?.map((itm, ind)=>(
                            <div key={ind} className='w-fit h-fit p-2 bg-slate-200 rounded-2xl flex-wrap'>
                                <p>#{itm}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <p>
                    Image
                </p>
                <div className='h-[300px] overflow-hidden border rounded-xl'>
                    {
                        isLoading?
                        <div className='w-full h-full flex items-center justify-center'>
                            <Loader />
                        </div>
                        :
                        <img src={tags?.image?.[0]} alt="" 
                         className='w-full h-full object-cover object-center'
                        />
                    }
                    
                </div>
            </div>

            <Button className='mt-8'
                    onClick={handleCreation}
            >
                {
                    creationLoading?
                    <Loader />
                    :
                    'Next'
                }
    
            </Button>

        </div>
    )
}

function CreateEvent() {

    const [step, setStep] = useState('first')
    const navigate = useNavigate()
    const [event, setEvent] = useState({
        title: '',
        description: '',
        address: '',
        time: '',
        tags: '',
        image: '',
        date: ''
    })

  return (
    <Container>
        {
            step === 'first'?
            <FirstStep setStep={setStep} event={event} setEvent={setEvent}/>
            :
            <SecondStep event={event}/>
        }

    </Container>
  )
}

export default CreateEvent