import Image from 'next/image'
import React from 'react'

const image = require("../../../../assets/bank-svgrepo-com.svg")

const index = () => {
    return (
        <header className=' font-primary w-full flex justify-around items-center md:py-10 ' >
            <h1 className='flex flex-row-reverse justify-start items-end'  >
                Bankify
                <Image alt='logo' src={image} height={30} width={30} />
            </h1>
            <ul className='hidden w-1/3 md:flex justify-around  ' >
                <li>Products</li>
                <li> Solutions </li>
                <li>Developers</li>
                <li>Resources</li>
            </ul>
            <div className='w-24 ' >
                <button className='px-3 py-3 text-white h-full w-full rounded-lg border border-white border-opacity-25   '>
                    Sign In
                </button>
            </div>
        </header>
    )
}

export default index