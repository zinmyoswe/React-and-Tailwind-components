import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ 
    id,
    image,
    title,
    subdistrict,
    district,
    city,
    pricerent_month,
    pricerent_day,
    electric_price,
    water_price,
}) => {
  return (
    <Link to={`/product/${id}`} >
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800'>
        <img className='w-full h-48 object-cover ' src={image} alt={title} />
        <div className='px-6 py-4'>
            <h2 className='font-medium text-base text-blue-500 dark:text-zinc-100'>{title}</h2>
            <p className='text-xs text-gray-400 dark:text-gray-300 mb-2 '>
                {subdistrict}, {district}, {city}
            </p>

            <div>
                <p className=' text-xs dark:text-gray-100'><span className='font-bold text-base text-gray-600 dark:text-gray-200'>{pricerent_month}</span> THB/month</p>
                <p className=' text-xs dark:text-gray-100'><span className='font-bold text-base text-gray-600 dark:text-gray-200'>{pricerent_day}</span> THB/day</p>

            </div>
            
        </div>
    </div>
    </Link>
  )
}

export default ProductCard