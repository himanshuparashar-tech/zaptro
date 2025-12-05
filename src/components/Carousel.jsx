import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/dataContext'

const Carousel = () => {
    const { data, fetchAllProducts } = useContext(DataContext)

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Carousel