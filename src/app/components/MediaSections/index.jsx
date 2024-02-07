import Image from 'next/image'
import React from 'react'

const index = () => {

    return (
        <div className='
        w-5/6  
        md:w-1/2 h-full  container mt-4  flex flex-col lg:items-center justify-center ' >
            <FaceBook />
            <CallCard />
            <Payment />
        </div>
    )
}

function FaceBook() {
    const fbIcon = require("../../../../assets/facebook-svgrepo-com.svg");
    const msgIcon = require("../../../../assets/msg.svg");

    return (
        <div className='
        w-full h-1/6  mx-auto
        md:h-1/6 rounded-xl md:w-1/2 bg-white backdrop-blur-lg bg-opacity-10 flex items-center justify-center md:mx-0 lg:my-0 '>
            <>
                <div className="bg-white  rounded-full relative mr-5 ">
                    <Image alt="facebook" height={40} width={50} src={fbIcon} />
                    <Image alt="message" height={20} width={20} src={msgIcon} className='absolute bottom-0 right-0 z-10' />
                </div>
            </>

            <div className="
            
            text-sm
            font-thin md:text-md ">
                <h2 className="font-black" >
                    Facebook
                </h2>
                <p className="font-thin
                    text-xs 
                    md:text-md
                " >
                    Your verification code is 235 148
                </p>
            </div>
        </div>
    )
}

function CallCard() {
    const decline = require("../../../../assets/dec.svg");
    const accept = require("../../../../assets/acc.svg");

    return (
        <div
            style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.2)',
            }}
            className="w-full mx-auto h-1/2  rounded-xl md:w-1/2 bg-black backdrop-blur-lg bg-opacity-40 flex flex-col items-center justify-center space-y-4 md:mx-0  ">
            <h1 className='font-primary font-bold md:text-2xl'>Cab Driver</h1>
            <p className='font-thin font-primary'>Incoming Call ...</p>
            <div className="flex w-1/2 justify-around items-center opacity-50">
                <span
                    className=" group "

                >
                    <Image
                        className="group-hover:animate-pulse m-1 "
                        width={50} src={accept} alt='incoming' />
                    Accept
                </span>
                <span className='group' >
                    <Image width={50} src={decline} alt='decline' className='group-hover:animate-pulse m-1' />
                    Decline
                </span>
            </div>
        </div>

    )
}

function Payment() {
    const stripe = require("../../../../assets/stripe.svg");
    const download = require("../../../../assets/download.svg");
    const trash = require("../../../../assets/trash.svg");
    const mail = require("../../../../assets/mail.svg");
    const dots = require("../../../../assets/dots.svg");


    return (
        <div className='
        w-full h-1/6 mx-auto relative 
        md:h-1/5 rounded-xl md:w-1/2 bg-white backdrop-blur-lg bg-opacity-10 flex items-center justify-start lg:justify-center md:mx-0 '>

            <div className="absolute top-2 right-4 flex justify-center  space-x-1 lg:space-x-3 items-center ">
                <Image src={download} width={15} alt='d' />
                <Image src={trash} width={15} alt='d' />
                <Image src={mail} width={15} alt='d' />
                <Image src={dots} width={15} alt='d' />

            </div>
            <Image
                className='
                ml-10
                md:mr-8 md:absolute md:left-16 md:ml-0'
                alt="stripe" height={50} width={50} src={stripe} />

            <div className="flex flex-col justify-center items-start ml-3 lg:ml-0 ">
                <h2 className="font-black" >
                    Stripe
                </h2>
                <p className="font-thin text-sm" >
                    Payment made
                </p>
            </div>
        </div>
    )
}


export default index