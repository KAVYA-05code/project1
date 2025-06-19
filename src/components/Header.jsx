import React from 'react'

const Header = () => {
  return (
    <header
    className='h-96 bg-cover bg-center flex items-center justify-center'
    style={{
        backgroundImage:"url('https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg')",
    } }>
        <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4 text-white'>🚀 Welcome to My Website</h1>
    </header>
  )
}

export default Header;