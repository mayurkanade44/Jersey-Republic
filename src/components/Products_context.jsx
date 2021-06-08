import React, { useContext, useEffect, useState } from 'react'
import {products_url as url} from '../utils/links.js'

const ProdcutsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [productsError, setProductsError] = useState(false)
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])



    const fetchProducts = async (url) => {
        setLoading(true)
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            const featured = data.filter((product)=> product.featured === true)
            setProducts(data)
            setFeaturedProducts(featured)
            setLoading(false)
        
        } catch (error) {
            setLoading(false)
            setProductsError(true)
        }

    }

    useEffect(()=>{
        fetchProducts(url)
    },[])

    return (
        <ProdcutsContext.Provider value={{loading, productsError, featuredProducts }}>{children}</ProdcutsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProdcutsContext)
}
