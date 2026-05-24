import { createContext, useContext, useMemo } from 'react'
import { products as rawProducts } from '@/data/products'
import { buildTaxonomy } from '@/utils/buildTaxonomy'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const taxonomy = useMemo(() => buildTaxonomy(rawProducts), [])

  return (
    <ProductContext.Provider
      value={{
        products: rawProducts,
        taxonomy,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
