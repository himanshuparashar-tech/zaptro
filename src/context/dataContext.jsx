import axios from "axios";
import { Children, createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    // fetching all products from the API
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products")
            console.log(response)
            const productsData = response.data.products
            setData(productsData)
        }
        catch (error) {
            console.log(error);
        }
    }

    return <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
        {children}
    </DataContext.Provider>
}

