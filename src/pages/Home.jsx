import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav className='flex justify-center'>
        <Link to={'/addcoffe'} className='text-xl font-medium'>Add Coffee</Link>
      </nav>
    </div>
  )
}
