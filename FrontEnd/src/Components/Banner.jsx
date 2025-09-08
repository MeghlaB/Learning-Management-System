import React from 'react'

export default function Banner() {
    return (
        <div className='container  mx-auto px-2 '>
            <div className='text-center mt-6 lg:mt-20 space-y-2'>
                <h1 className='text-2xl lg:text-4xl font-bold md:font-bold px-4 '>Empower your future with the <br></br>
                    courses designed to <span className='text-blue-600 font-mono'>fit your choice.</span></h1>
            </div>
            <div className=' mt-5 md:mt-8 text-center px-4'>
                <p className='text-gray-400 text-[12px] md:text-xl '>
                    We bring together world-class instructors, interactive content, and a supportive
                    community to help <br></br> you achieve your personal and professional goals.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-2xl mb-8 mx-auto mt-8 px-5">
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                </div>

                {/* Input field */}
                <input
                    type="text"
                    className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search for courses..."
                />

                {/* Button inside input */}
                <button
                    type="button"
                    className="absolute w-[100px]  inset-y-0 right-0 flex items-center px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>

        </div>
    )
}
