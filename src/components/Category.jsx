import React, { useEffect } from 'react'
import { getData } from '../context/DataContexts'

const Category = () => {
    const { data, fetchAllProducts } = getData()

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        })
        newVal = [...new Set(newVal)]
        return newVal
    }
    const categoryOnlyData = getUniqueCategory(data, "category");
    console.log(categoryOnlyData);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className='bg-[#101829]'>
            <div className='max-w-7xl mx-auto flex gap-4 item-center justify-center px-7 py-4 '>
                {categoryOnlyData.map((item, index) => {
                    return <div key={index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-500 px-3 py-1 rounded-md cursor-pointer'>{name}</button>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Category