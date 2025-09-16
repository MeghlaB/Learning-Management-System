import React, { useEffect, useState } from 'react'

function Learned() {
    const [courses, setCourseData] = useState([])

    // Fetch all courses
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                setCourseData(data)
            })
    }, [])

    console.log(courses)







    return (
        <div className='container mx-auto  mt-5 lg:mt-20'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold  font-sans'>Learn from the best</h1>
                <p className='text-gray-400 space-y-4 pt-6'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 pt-15 px-5 '>
                {/* card-1 */}
                {
                    courses && courses.map((course) => (
                        <div className="card bg-base-100 w-full shadow-sm">
                            <figure>
                                <img
                                    src={course.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">
                                    {course.title}

                                </h2>
                                <p>{course.instructor}</p>
                                <div className='flex gap-1'>
                                    {Array(parseInt(course.highlights[0])).fill(0).map((_, i) => (
                                        <div key={i} className="mask mask-star-2 bg-orange-400 w-5 h-5"></div>
                                    ))}
                                </div>
                                <div className="card-actions ">
                                    <h1 className='text-xl font-bold'>${course.
                                        discountedPrice}</h1>

                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
            {/* Button */}
            <div className='flex items-center justify-center pt-8'>
                <button className="btn btn-outline">See all courses</button>
            </div>

        </div>
    )
}

export default Learned