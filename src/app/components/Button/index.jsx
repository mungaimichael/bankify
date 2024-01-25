import React from 'react'

export default function index({ title, primary }) {
    return (
        <button className={` mt-5  w-20 h-8 md:w-40 md:h-12 flex items-center justify-center font-primary  ${primary === undefined ? "bg-white text-blue-900 " : "bg-blue-600 text-white"}  text-sm lg:text-xl font-bold rounded-lg `}
        >
            {title}
        </button>
    )
}
