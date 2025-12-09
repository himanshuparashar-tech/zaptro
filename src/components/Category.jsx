import React, { useEffect } from 'react'
import { getData } from '../context/DataContexts'

const Category = () => {
    const { data, fetchAllProducts } = getData()

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => curElem[property].name);
        newVal = [...new Set(newVal)];
        return newVal;
    };

    const categoryOnlyData = getUniqueCategory(data, "category");

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <div className='bg-[#101829]'>
            <div className='max-w-7xl mx-auto flex gap-4 items-center justify-center md:justify-between px-7 py-4 flex-wrap'>

                {categoryOnlyData?.slice(0, 7)?.map((item, index) => (
                    <button
                        key={index}
                        className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'
                    >
                        {item}
                    </button>
                ))}

            </div>
        </div>
    );
};

export default Category;
