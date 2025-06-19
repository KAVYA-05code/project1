import React from 'react'
import {
    FaBook,FaRocket,FaReact
}
    from "react-icons/fa"


function Aside() {
  return (
    <aside className='container bg-gray-300 rounded-lg mx-auto p-6 md:max-w-xs '>
        <h2 className='text-xl font-bold'>📌Related Links</h2>
        <ul className='space-y-2 mt-2 '>
            <li>
             <a href='' className='flex items-center text-blue-500 gap-2 hover:underline'><FaBook/>Vite Documentation</a>  
            </li>
            <li>
                <a href='' className='flex items-center text-blue-500 gap-2 hover:underline'><FaReact/>React Guide</a>
            </li>
            <li>
                <a href='' className='flex items-center text-blue-500 gap-2 hover:underline'><FaRocket/>Frontend Trends</a>
            </li>
        </ul>
    </aside>
  )
}

export default Aside