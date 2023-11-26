import React from 'react'
import EventCard from '../components/EventCard'
import ForYou from '../components/ForYou'
import StoriesAvatar from '../components/StoriesAvatar'
import useGetFeed from '../hooks/useGetFeed'


const MainFeed = () => {

    const {data: feed, isLoading} = useGetFeed()

    // console.log(feed)

  return (
    <div className='w-full gap-2 flex flex-col pb-4'>

        
        <StoriesAvatar />
        {
          !isLoading &&
          <>
          <ForYou events={feed?.slice(5, 10)}/>
          
            {
            [...feed?.slice(0,5), ...feed?.slice(10)].map((itm, ind) => (
              <EventCard key={ind} {...itm}/>
            ))
            }
          </>
          
          
        }
       

    </div>
  )
}

export default MainFeed