import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Donald Jackman",
      role: "SWE 1 @ Amazon",
      img: "/src/assets/profile_img_1.png",
      text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
    {
      id: 2,
      name: "Richard Nelson",
      role: "SWE 1 @ Samsung",
      img: "/src/assets/profile_img_2.png",
      text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
    {
      id: 3,
      name: "James Washington",
      role: "SWE 3 @ Google",
      img: "/src/assets/profile_img_3.png",
      text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto mt-5 lg:mt-20">
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="text-2xl font-bold font-sans">Testimonials</h1>
        <p className="text-gray-400 pt-6">
          Hear from our learners as they share their journeys of transformation,
          success, <br /> and how our platform has made a difference in their
          lives.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-15 px-5">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 w-full shadow-xl rounded-lg"
          >
            {/* Profile Section */}
            <div className="flex bg-[#F3F3F3] p-4 gap-4 items-center">
              <img src={item.img} alt={item.name} className="w-15 h-15" />
              <div>
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p>{item.role}</p>
              </div>
            </div>

            {/* Card Body */}
            <div className="card-body">
              {/* Rating */}
              <h2 className="card-title">
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${item.id}`} // unique name per card
                      className="mask mask-star-2 bg-orange-400"
                      aria-label={`${i + 1} star`}
                      checked={i < item.rating}
                      readOnly
                    />
                  ))}
                </div>
              </h2>

              {/* Text */}
              <p className="text-gray-400 text-[18px]">{item.text}</p>

              {/* Read More */}
              <div>
                <div className="text-blue-500 underline text-[16px]">
                  Read More
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
