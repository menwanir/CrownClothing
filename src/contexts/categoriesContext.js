import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap:{},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap , setCategoriesMap] = useState({})


    useEffect( () => {
      const getCategories =  async() => {
          const categoryMap = await getCategoriesAndDocuments()
          setCategoriesMap(categoryMap)
          
      }
      getCategories()
    }, []);
    
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
    };


// export const ProductContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

