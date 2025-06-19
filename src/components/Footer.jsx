import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-900 text-white text-center py-6'>
        <p > 🌎©️ 2025 MyWebsite. All Rights Reserved.</p>
        <div className='flex justify-center gap-3'>  
            <a href='#' className='text-blue-400 hover:text-blue-600'>🌐Facebook</a>
            <a href='#' className='text-blue-400  hover:text-blue-600'>🪽Twitter</a>
            <a href='#'className='text-blue-400  hover:text-blue-600' >📸Instagram</a>
        </div>

    </footer>
  )
}

export default Footer