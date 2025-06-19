import React from 'react'

function Article() {
  return (
    <article className='container mx-auto p-6 rounded-lg'>
        <h2 className='text-2xl font-bold '>📰 Latest News</h2>
        <div className='flex  shadow-lg bg-white p-4 gap-3'>
            <img className='w-50 h-40 rounded-lg'
             src=' https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg' alt=''/>
            <div >
                <h3 className='font-semibold text-xl'>🚀Vite is Revolutionizing Frontend</h3>
                <p className='text-gray-700 mt-2'>Vite is a next-gen frontend tool that delivers fast development.</p>
            </div>
        </div>
    </article>
  )
}

export default Article