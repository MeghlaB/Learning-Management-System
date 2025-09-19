import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

export default function Navbar() {
  const { user, signout } = useContext(AuthContext)
  console.log(user)

  const handleSubmit = () => {
    signout()
      .then(() => {
        Swal.fire({
          title: `${user.displayName || user.email} Successfully Signout`,
  
          icon: "success"
        });
      })
  }



  return (
    <div className='bg-green-50  border-b-2 mb-4'>
      <div className="navbar  shadow-sm  container mx-auto  pb-3 pt-5   ">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

          </div>
          <div className="flex items-center gap-2">
     
            <div className="bg-blue-500 text-white p-2 rounded-full">
              {/* You can replace this with an actual logo image */}
              ⚡
            </div>
            <Link to={'/dashboard'}>
              <span className="font-bold text-lg text-blue-800">Edemy</span>
            </Link>
          
           
          </div>


        </div>
        <div className="navbar-center hidden lg:flex">


        </div>
        <div className="navbar-end">
          {
            user ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold text-blue-900">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleSubmit}
                  className="btn bg-red-600 text-white rounded-3xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={'/auth/register'}>
                <button className="btn bg-blue-700 text-white rounded-3xl">
                  Create Account
                </button>
              </Link>
            )
          }
        </div>

      </div>
    </div>
  )
}
