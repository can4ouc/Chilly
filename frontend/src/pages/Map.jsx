import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import SmallCardEvent from '../components/SmallCardEvent';
import { useNavigate } from 'react-router-dom';

const googleAPI = 'AIzaSyCQGJf6I859W9Bxf0iq-3gJ9lsslQL00lY'
const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  

const InfoBox = ({children, show, onClose}) => {
    const height = show? 'h-[45vh]' : 'h-0'
    return(
        <div className={`w-full absolute z-10 ${height} transition-all bg-white overflow-hidden bottom-0 rounded-t-2xl`}>
            <div className='py-2 px-4'>
                <button onClick={onClose}>
                    Close
                </button>
            </div>

            <div className='px-4 py-2'>
                {children}
            </div>
        </div>
    )
}


function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleAPI
      })
    
    const center = {lat: 35.1687839, lng: 33.3441158 };

    const [map, setMap] = React.useState(null)

    const [showInfo, setShowInfo] = React.useState(false)
    const [currCenter , setcurrCenter] = React.useState(center);

    const onMarkerClick = () =>{
        // console.log('clicked')
        setcurrCenter(center)
        setShowInfo(curr => !curr)
    }

    const navigate = useNavigate()
    const goToSearchView = () =>{
        navigate('/feed/search-event')
    }

    const onLoad = React.useCallback(function callback(map) {
        //const bounds = new window.google.maps.LatLngBounds(center);
        map.setZoom(16)
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      if(!isLoaded){
        return null
      }

  return (
   <>
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={currCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapTypeControl: false, 
                streetViewControl: false, 
                zoomControl: false,
                disableDefaultUI: true, // a way to quickly hide all controls
                //mapTypeControl: true,
                scaleControl: true,
                //zoomControl: true,
            styles: [{ elementType: "labels", featureType: "poi", stylers: [{ visibility: "off", }], }], }} 
    >
        <Marker position={center} 
                title='Here'
                onClick={onMarkerClick}
        >
            
        </Marker>
        
    </GoogleMap>

    <div className='h-[100px] rounded-md bg-white w-[90%] absolute z-10 top-[16px] left-[5%]'>
        <button onClick={goToSearchView}>
            Back to search view
        </button>
    </div>
    
    <InfoBox show={showInfo} onClose={()=> setShowInfo(false)}>
        <SmallCardEvent width='w-full'/>
    </InfoBox>
    </>

  )
}

export default React.memo(Map)