import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="text-gray-600 body-font shadow">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0 no-underline cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Shop</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 no-underline cursor-pointer">Home</a>
                    <a className="mr-5 hover:text-gray-900 no-underline cursor-pointer">Products</a>
                    <a className="mr-5 hover:text-gray-900 no-underline cursor-pointer">About us</a>
                    <a className="mr-5 hover:text-gray-900 no-underline cursor-pointer">Contact us</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Cart
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar