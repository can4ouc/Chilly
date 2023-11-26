import React, { useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Location = ({onSubmit}) => {

    const cities = [
        'Nicosia',
        'Limassol',
        'Paphos',
        'Aya Napa',
        'Famagusta'
    ]

    const [selected, setSelected] = useState('')

    const handSubmit = () => {
        if(!selected){
            return
        }
        onSubmit(selected)
    }

    const onChoose = (val) =>{
        return () => setSelected(val)
    }

  return (
    <Container>
        <div className='h-full w-full flex flex-col gap-4 p-4 '>
            <h1 className='text-bold text-2xl'>
                Choose your city
            </h1>

            <div className=''>
                {
                    cities.map((city, index) =>(
                        <button key={index}
                                className='flex gap-4 items-center w-full p-3 border-b border-gray-100'
                                onClick={onChoose(city)}
                        >
                            <div className={`h-[20px] border-2 w-[20px] rounded ${selected===city? 'bg-indigo-400' : 'bg-gray-100'}`}/>
                            <p>{city}</p>
                        </button>
                    ))
                }
            </div>
            <Button onClick={handSubmit}>
                Start browsing
            </Button>
        </div>

    </Container>
  )
}

export default Location