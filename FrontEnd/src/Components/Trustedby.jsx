import React from 'react'

export default function Trustedby() {
    return (
        <div className='container mx-auto  mt-10'>

            <div className="text-gray-500 text-center font-bold text-xl" >
                <p>Truseted by learners from</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 items-center justify-center text-center mt-10 gap-6 lg:gap-20 px-10">
                <img src="/src/assets/icons/microsoft_logo.png" alt="Microsoft" className='w-[120px]' />
                <img src="/src/assets/icons/walmart_logo.png" alt="Walmart" className='w-[120px]' />
                <img src="/src/assets/icons/accenture_logo.png" alt="Accenture" className='w-[120px]' />
                <img src="/src/assets/icons/adobe_logo.png" alt="Adobe" className='w-[120px]' />
                <img src="/src/assets/icons/paypal_logo.png" alt="Paypal" className='w-[120px]' />
            </div>

        </div>
    )
}
