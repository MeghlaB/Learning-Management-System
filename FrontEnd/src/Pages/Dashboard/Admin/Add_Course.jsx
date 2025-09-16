import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Add_Course() {
    // State to hold all form data
    const [courseData, setCourseData] = useState({
        title: '',
        subtitle: '',
        instructor: '',
        image: '',
        originalPrice: '',
        discountedPrice: '',
        discountPercentage: '',
        shortDescription: '',
        longDescription: '',
        sections: [{ title: '', lectures: '', duration: '' }],
        highlights: [''],
        objectives: [''],
    });

    // Handle standard input changes
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setCourseData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    // Handle dynamic array changes
    const handleArrayChange = (e, index, fieldName) => {
        const newArray = [...courseData[fieldName]];
        newArray[index] = e.target.value;
        setCourseData(prevData => ({
            ...prevData,
            [fieldName]: newArray
        }));
    };

    // Handle course section changes
    const handleSectionChange = (e, index) => {
        const { name, value } = e.target;
        const newSections = [...courseData.sections];
        newSections[index][name] = value;
        setCourseData(prevData => ({
            ...prevData,
            sections: newSections
        }));
    };

    // Add new fields to dynamic arrays
    const addField = (fieldName) => {
        setCourseData(prevData => ({
            ...prevData,
            [fieldName]: [...prevData[fieldName], '']
        }));
    };

    // Remove field from dynamic arrays
    const removeField = (index, fieldName) => {
        const newArray = [...courseData[fieldName]];
        newArray.splice(index, 1);
        setCourseData(prevData => ({
            ...prevData,
            [fieldName]: newArray,
        }));
    };

    // Add new section
    const addSection = () => {
        setCourseData(prevData => ({
            ...prevData,
            sections: [...prevData.sections, { title: '', lectures: '', duration: '' }]
        }));
    };

    // Remove section
    const removeSection = (index) => {
        const newSections = [...courseData.sections];
        newSections.splice(index, 1);
        setCourseData(prevData => ({
            ...prevData,
            sections: newSections,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // send data with database
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Course Added",
                        icon: "success",
                        draggable: true
                    })
                }
            })
            .catch(error => {
                console.log('Error:', error)
            })

    };

    return (
        <div className="p-4 sm:p-8 max-w-5xl mx-auto my-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">Add New Course </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Course Details Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Course Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Course Title</label>
                            <input type="text" name="title" value={courseData.title} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Advanced Python Programming" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Course Subtitle</label>
                            <input type="text" name="subtitle" value={courseData.subtitle} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Deep Dive into Python" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Instructor Name</label>
                            <input type="text" name="instructor" value={courseData.instructor} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., GrapsStack" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Course Thumbnail</label>
                            <input type="url" name="image" onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Original Price ($)</label>
                            <input type="number" name="originalPrice" value={courseData.originalPrice} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Discounted Price ($)</label>
                            <input type="number" name="discountedPrice" value={courseData.discountedPrice} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Discount (%)</label>
                            <input type="number" name="discountPercentage" value={courseData.discountPercentage} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Description</h2>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Short Description</label>
                        <textarea name="shortDescription" value={courseData.shortDescription} onChange={handleInputChange} rows="3" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 mt-4">Long Description</label>
                        <textarea name="longDescription" value={courseData.longDescription} onChange={handleInputChange} rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                    </div>
                </div>

                {/* Dynamic Fields Section: Course Structure */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Course Structure</h2>
                    {courseData.sections.map((section, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row gap-4 mb-4 p-4 border border-gray-300 rounded-md bg-white">
                            <div className="flex-1">
                                <label className="block text-gray-700 font-semibold mb-2">Section Title</label>
                                <input type="text" name="title" value={section.title} onChange={(e) => handleSectionChange(e, index)} className="w-full p-3 border border-gray-300 rounded-md" required />
                            </div>
                            <div className="w-full md:w-1/4">
                                <label className="block text-gray-700 font-semibold mb-2">Lectures</label>
                                <input type="number" name="lectures" value={section.lectures} onChange={(e) => handleSectionChange(e, index)} className="w-full p-3 border border-gray-300 rounded-md" required />
                            </div>
                            <div className="w-full md:w-1/4">
                                <label className="block text-gray-700 font-semibold mb-2">Duration</label>
                                <input type="text" name="duration" value={section.duration} onChange={(e) => handleSectionChange(e, index)} className="w-full p-3 border border-gray-300 rounded-md" placeholder="e.g., 26 hours, 30 minutes" required />
                            </div>
                            {courseData.sections.length > 1 && (
                                <button type="button" onClick={() => removeSection(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors p-1 rounded-full bg-white bg-opacity-70">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addSection} className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span>Add New Section</span>
                    </button>
                </div>

                {/* Dynamic Fields Section: Highlights & Objectives */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Course Highlights </h2>
                        {courseData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">

                                <input type="text" value={highlight} onChange={(e) => handleArrayChange(e, index, 'highlights')} className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                                {courseData.highlights.length > 1 && (
                                    <button type="button" onClick={() => removeField(index, 'highlights')} className="text-red-500 hover:text-red-700 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addField('highlights')} className="mt-4 text-sm text-blue-600 font-semibold hover:underline">
                            + Add Another Highlight
                        </button>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Learning Objectives </h2>
                        {courseData.objectives.map((objective, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">

                                <input type="text" value={objective} onChange={(e) => handleArrayChange(e, index, 'objectives')} className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500" required />
                                {courseData.objectives.length > 1 && (
                                    <button type="button" onClick={() => removeField(index, 'objectives')} className="text-red-500 hover:text-red-700 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => addField('objectives')} className="mt-4 text-sm text-green-600 font-semibold hover:underline">
                            + Add Another Objective
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                    <button type="submit" className="w-full sm:w-auto bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl">
                        Add Course
                    </button>
                </div>
            </form>
        </div>
    );
}