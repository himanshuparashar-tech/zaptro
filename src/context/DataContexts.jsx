import axios from "axios";
import {createContext, useContext, useState } from "react";

export const dataContexts = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    // fetching all products from the API
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products")
            // console.log(response)
            const productsData = response.data
            setData(productsData)
        }
        catch (error) {
            console.log(error);
        }
    }

    return <dataContexts.Provider value={{ data, setData, fetchAllProducts }}>
        {children}
    </dataContexts.Provider>
}

export const getData = () => {
    return(
        useContext(dataContexts)
    )
}

