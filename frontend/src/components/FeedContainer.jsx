import React from 'react'
import Container from './Container'
import { Outlet, useNavigate } from 'react-router-dom'

const FeedContainer = () => {

    const bottomMenus = [
        {name: '', href: '/feed'},
        {name: '', href: '/feed/search-event'},
        {name: '', href: '/feed/ask-ai'},
        {name: '', href: '/feed/friends'},
        {name: '', href: '/feed/profile'},
    ]

    const navigate = useNavigate()
    const onClick = (href) =>{
        return () => navigate(href)
    }

  return (
    <Container className='h-screen flex flex-col'>
        <div className='flex-1 bg-slate-100 grow overflow-y-auto'>
            <Outlet />
        </div>
        <div className='w-screen p-4 rounded bg-white flex items-center justify-between'>
            {
                bottomMenus.map((item, index)=>(
                    <button key={index} onClick={onClick(item.href)}
                    >
                        <div className='h-[30px] w-[30px] bg-slate-400'/>
                    </button>
                ))
            }
        </div>

    </Container>
  )
}

export default FeedContainer