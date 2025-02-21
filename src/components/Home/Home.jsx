import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-2xl sm:mx-16 mx-2 sm:py-16 py-10 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg flex flex-col sm:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="relative z-10 max-w-lg px-6 sm:px-8 lg:px-12 text-center sm:text-left">
                    <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
                        <a 
                            href="https://reactrouter.com/start/framework/installation" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-orange-600 hover:underline"
                        >
                            Download Now
                        </a>
                        <span className="block text-orange-600">Let's Know React Router</span>
                    </h2>

                    <p className="text-lg text-gray-700 mt-4">
                        React Router is a multi-strategy router for React bridging the gap from React 18 to React 19.
                    </p>

                    {/* Ensure the Link only works within internal navigation */}
                    <Link
                        className="inline-flex items-center px-8 py-3 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-red-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="mr-2"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Download Now
                    </Link>
                </div>

                {/* Right Image */}
                <div className="w-72 sm:w-96 mt-10 sm:mt-0">
                    <img 
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        src="https://static.vecteezy.com/system/resources/previews/013/209/469/original/simple-flat-design-character-free-vector.jpg"
                        alt="illustration"
                    />
                </div>
            </aside>

            {/* React Router Section */}
            <section className="mt-16 sm:mt-24 text-center">
                <h1 className="text-3xl sm:text-5xl font-semibold py-12 text-gray-900">
                    Understanding React Router
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    React Router is a powerful library that enables navigation in React applications. It allows you to create **single-page applications (SPAs)** with dynamic routing, making transitions seamless without full page reloads. With **BrowserRouter, Routes, and Link**, developers can easily define paths, protect routes, and manage navigation efficiently.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mt-10 place-items-center">
                    <img 
                        className="sm:w-96 w-64 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        src="https://img.stackshare.io/service/3350/8261421.png"
                        alt="React Router"
                    />
                    <img 
                        className="sm:w-96 w-64 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        src="https://th.bing.com/th/id/OIP.AzstL_XLX2ei_NkQVyUD1QHaE2?pid=ImgDet&w=474&h=310&rs=1"
                        alt="React Router Navigation"
                    />
                </div>
            </section>

            {/* Call to Action */}
            <div className="flex justify-center mt-16">
                <a
                    className="px-10 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 transition"
                    href="https://reactrouter.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More About React Router
                </a>
            </div>
        </div>
    );
}
