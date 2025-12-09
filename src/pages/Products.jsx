import React, { useEffect } from 'react'
import { getData } from '../context/DataContexts'
import FilterSection from '../components/FilterSection';
import Loading from '../assets/src_assets_Loading4.webm'

const Products = () => {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, [])
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8 '>
              <FilterSection />
              <div>
                {

                }
              </div>
            </div>
          ) : (

            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm' />
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products