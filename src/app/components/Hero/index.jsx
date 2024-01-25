/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Button from "@/app/components/Button"
import MediaSections from "@/app/components/MediaSections"

const index = () => {
    return (
        <div className='md:h-5/6  flex flex-col  container ' >
            <div className="flex flex-col justify-center items-center">
                <h1 className=' text-center mt-12 md:mt-0 text-xl lg:text-5xl font-primary font-bold md:w-1/2   md:p-4 capitalize ' >
                    Omnichannel automation platform for API's , Service and Marketing
                </h1>
                <p className='
                text-sm w-full p-4 
                lg:text-2md text-center lg:w-1/3 italic font-light font-primary lg:p-0' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam tempore iste modi voluptatibus earum ipsum soluta?
                </p>
                <div className="  w-full md:w-1/4 flex justify-center space-x-3 md:space-x-0 md:justify-around">
                    <Button title="Submit" primary />
                    <Button title="Contact" />
                </div>
            </div>
            <div className="w-full h-[60vh] lg:h-full">
                <MediaSections />
            </div>
        </div>
    )
}




export default index