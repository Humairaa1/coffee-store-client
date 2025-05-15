import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from '../components/CoffeeCard';

export default function Home() {

  const coffees = useLoaderData();


  return (
    <div className='w-11/12 mx-auto'>
      <nav className='flex justify-center my-10'>
        <Link to={'/addcoffe'} className='text-xl font-medium'>Add Coffee</Link>
      </nav>

      <h1 className='text-3xl text-blue-600 font-medium text-center mb-5'>All Coffees</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}
