import React from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Banner from './components/Banner'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <CartProvider>
            <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300`}>
                <Toaster position="bottom-right" />
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 dark:text-white">
                    <Banner />
                    <Categories />
                    <ProductGrid />
                </main>
                <Footer />
            </div>
        </CartProvider>
    )
}

export default App
