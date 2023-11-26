import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCirclePlus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";
import { FaRegMap } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import {findAllByLabelText} from "@testing-library/react";
import useGetFeed from "../hooks/useGetFeed";
//const bgPic = require('../assets/event-details-header-bg-pic.png');

function EventDetails() {
    const navigate = useNavigate()

    const {id} = useParams()

    const {data: feed, isLoading} = useGetFeed()

    const event = feed?.filter(
        itm => itm.id == id
    )?.[0]


    const onClick = () =>{
        navigate('/getticket')
    }

    const url = 'https://static.wixstatic.com/media/99a273_0518a7fe70e749bab9a8d9d67bb620d0~mv2.jpg'

    const orangeColor = '#fc7310'
    const whiteColor = '#ffffff'

    const headerButtons = {
        display: 'inline-flex',
        position: 'absolute',
        padding: '5px',
        top: '15px',
        width: '40px',
        height: '40px',
        backgroundColor: whiteColor,
        borderRadius: '20px',
    }

    const titleIconStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '0.75em',
        color: orangeColor,
        fontWeight: '700'
    }

    const pStyle = {
        color: '#000000',
        fontWeight: '500'
    }

    const h2Style = {
        marginBottom: '10px',
        fontWeight: '600',
        fontSize: '18px'
    }

    const iconStyle = {
        position: 'absolute',
        left: '0px',
        width: '40px',
        height: '40px',
        opacity: '85%'
    }

    const iconStyleAvatar = {
        position: 'relative',
        display: 'inline-flex',
        marginRight: '12px'
    }

    const mapView = {
        display: 'inline-flex',
        float: 'right'
    };

    return (
        <Container>
            <div className=' w-full flex flex-col gap-2 '>
                <div style={{position: 'relative', overflow: 'hidden', zIndex: '-1'}}>
                    <IoMdArrowRoundBack style={{ ...headerButtons, left: '15px'}}/>
                    <IoMdShare style={{ ...headerButtons, right: '15px'}}/>
                    
                    <div className='h-full w-full'>
                        <img src={event?.image[0]} alt="" className='h-full w-full object-center img-fluid'
                        />

                    </div>
                </div>

                <div style={{marginTop: '-50px', backgroundColor: '#ffffff', borderRadius: '20px'}} className='py-6 px-3'>
                    <h1 style={{ ...h2Style, fontSize: '26px'}}>
                        {event?.title}
                    </h1>
                    <span style={titleIconStyle}>
                        <FaLocationDot className='mr-2'/>
                        <p style={pStyle}>{event?.place}</p>
                    </span>
                    <span style={titleIconStyle}>
                        <FaCalendarAlt className='mr-2'/>
                        <p style={pStyle}>{event?.date}</p>
                    </span>
                    <span style={titleIconStyle}>
                        <TfiTime className='mr-2'/>
                        <p style={pStyle}>20:00 - 23:30</p>
                    </span>
                </div>

                <div style={{ position: 'relative', width: '100%', height: 'auto', fontSize: '24px' }} className='mb-5 py-2 px-3'>
                    <CgProfile style={iconStyle}/>
                    <CgProfile style={{ ...iconStyle, left: '40px' }}/>
                    <CgProfile style={{ ...iconStyle, left: '80px' }}/>
                    <CgProfile style={{ ...iconStyle, left: '120px' }}/>
                    <CgProfile style={{ ...iconStyle, left: '160px' }}/>
                    <FaCirclePlus style={{ ...iconStyle, left: '200px' }}/>
                    <span style={{position: 'relative', left: '240px'}}>+ 1k</span>

                    <button style={{position: 'relative', float: 'right', padding: '2px 25px', color: 'white', backgroundColor: orangeColor, borderRadius: '10px'}}>Invite +</button>
                </div>

                <div className='my-3 px-3'>
                    <h2 style={h2Style}>About event</h2>
                    <p>{event?.description}</p>
                </div>

                <div className='my-5 px-3'>
                    <h2 style={h2Style}>Organizers</h2>
                    <ol className='px-5'>
                        <li><CgProfile style={{ ...iconStyle, ...iconStyleAvatar}}/>John Smith</li>
                        <li><CgProfile style={{ ...iconStyle, ...iconStyleAvatar}}/>Ivan Goldsmith</li>
                    </ol>
                </div>

                <div className='my-2 px-3'>
                    <h2 style={h2Style}>Address</h2>
                    <p style={{display: 'inline-flex'}}>121 Main street, 2nd floor, Larnaca, Cyprus</p>
                    <div style={{ ...mapView, alignItems: 'center', color: orangeColor, cursor: 'pointer'}}>
                        View
                        <FaRegMap style={{}} className='ml-3'/>
                    </div>
                    {/* TODO: minimap <map></map>*/}
                </div>

                <div className="w-full p-4">
                    <Button onClick={onClick} className='w-full'>
                        Get ticket
                    </Button>
                </div>
            </div>

        </Container>
    )
}

export default EventDetails