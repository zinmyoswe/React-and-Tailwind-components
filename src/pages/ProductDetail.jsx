import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products';

const ProductDetail = () => {
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if(!product) return <p className='p-6'>Product not found</p>;
  return (
    <div className='p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-lg'>
        <h1>{product.title}</h1>
        <p>{product.subdistrict}, {product.district}, {product.city}</p>

        <div className='mt-4'>
            <h2>Apartment Contact</h2>
        <p>Phone: {product.phone}</p>
        <button className='mt-2 px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-violet-700 border  rounded-lg '>Chat with Apartment</button>
        </div>

        <div className='mt-4'>
            <h2 className='text-light-dark text-xl font-semibold'>Rental Rate</h2>
            <p>Monthly: {product.pricerent_month} THB/month</p>
        </div>
    </div>
  )
}

export default ProductDetail