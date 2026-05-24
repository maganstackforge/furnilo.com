import Header from '@/components/header/Header'
import { HelmetProvider } from 'react-helmet-async'
import Home from '@/pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductListingPage from '@/pages/category/ProductListingPage'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* WoodenStreet-style direct category */}
        <Route path='/:currentSlug' element={<ProductListingPage />} />

        {/* SEO collection route */}
        <Route path='/:category/:collection/:currentSlug' element={<ProductListingPage />} />
      </Routes>
    </>
  )
}
