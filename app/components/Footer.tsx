import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center p-5 text-black-100 bg-gray-200 border-t border-gray-300'>
      <div className='w-full max-w-2xl flex justify-between items-center'>
        <div className='text-xl font-semibold'>Andris Klimkans</div>
        <div className='flex space-x-5'>
          <a 
            href="https://github.com/sirdna11" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-sm hover:underline hover:text-gray-600 transition-all'
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/andrisklimkans/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-sm hover:underline hover:text-gray-600 transition-all'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}


