import {  BookCopy, FilePlus2, House, UserCheck } from 'lucide-react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <section className='flex'>
            {/* Dashboard content  */}
            <div className='w-64 min-h-screen bg-blue-500'>
                <ul className='menu text-[16px] font-bold p-4'>
                    <li><NavLink to={'/dashboard'}>
                    <House/>
                     Dashboard
                     </NavLink></li>
                    <li><NavLink to={'/dashboard/add-course'}><FilePlus2 /> Add Course</NavLink></li>
                    <li><NavLink to={'/dashboard/my-course'}><BookCopy /> My Course</NavLink></li>
                   
                    <li><NavLink to={'/dashboard/student-enroll'}> <UserCheck /> Student Enrolled</NavLink></li>
                      <div className="divider divider-neutral">Or</div>
                        <li><NavLink to={'/'}> <House />Home</NavLink></li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet />
            </div>
        </section>
    )
}
