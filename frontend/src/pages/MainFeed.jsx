import React from 'react'
import EventCard from '../components/EventCard'
import ForYou from '../components/ForYou'
import StoriesAvatar from '../components/StoriesAvatar'

const MainFeed = () => {
  return (
    <div className='w-full gap-4 flex flex-col py-4'>
        <StoriesAvatar />
        <ForYou />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />

    </div>
  )
}

export default MainFeed