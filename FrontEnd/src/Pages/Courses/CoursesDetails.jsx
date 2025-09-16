import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CoursesDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data[0]))
            .catch(err => console.error(err));
    }, [id]);

    if (!course) return <p className="text-center mt-10"><span className="loading loading-spinner text-primary"></span></p>;

    return (
        <div className="container mx-auto px-5 mt-10 md:flex gap-6">
            {/* Left side */}
            <div className="w-full md:w-2/3 space-y-6">
                {/* Course Title */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{course.title}</h1>
                    <p className="text-gray-700 mt-2">{course.subtitle}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-orange-400 font-bold">{course.highlights[0]}</span>
                        {Array(parseInt(course.highlights[0])).fill(0).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                        <span className="text-gray-400 ml-2">({course.highlights} ratings)</span>
                    </div>
                    <p className="text-gray-500 mt-1">{course.students || 0} students</p>
                    <p className="mt-1">Course by <span className="text-blue-600 underline">{course.instructor}</span></p>
                </div>

                {/* Course Structure */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">Course Structure</h2>
                    {course.sections?.map((section, index) => (
                        <div key={index} className="border rounded-md p-3 mb-2 cursor-pointer hover:bg-gray-50 flex justify-between">
                            <span>{section.title}</span>
                            <span>{section.lectures} lectures - {section.duration}</span>
                        </div>
                    ))}
                </div>

                {/* Course Description */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">Course Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{course.longDescription}</p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/3 border rounded-md p-4 shadow-md h-fit">
                <img src={course.image} alt={course.title} className="rounded-md mb-4 w-full h-48 object-cover" />
                <p className="text-red-500 font-semibold text-sm mb-1">5 days left at this price!</p>
                <h2 className="text-2xl font-bold">${course.discountedPrice} <span className="line-through text-gray-400 text-lg">${course.originalPrice}</span> <span className="text-green-600">{course.discountPercentage}% off</span></h2>
                <div className="flex items-center gap-2 mt-2 mb-4">
                    {Array(parseInt(course.highlights[0])).fill(0).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                    <span className="text-gray-500">{course.highlights[0]}</span>
                </div>
                <p className="flex items-center gap-2 text-gray-500 mb-2">
                    <span>⏱</span> 1 hour, 5 minutes
                </p>
                <p className="flex items-center gap-2 text-gray-500 mb-4">
                    <span>📚</span> {course.sections?.length || 0} lessons
                </p>
                <button className="btn btn-primary w-full">Enroll Now</button>

                {/* What's in the course */}
                <div className="mt-4">
                    <h3 className="font-semibold mb-2">What's in the course?</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Lifetime access with free updates.</li>
                        <li>Step-by-step, hands-on project guidance.</li>
                        <li>Downloadable resources and source code.</li>
                        <li>Quizzes to test your knowledge.</li>
                        <li>Certificate of completion.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
