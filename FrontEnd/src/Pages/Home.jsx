import React from 'react'
import Banner from '../Components/Banner'
import Trustedby from '../Components/Trustedby'
import Learned from '../Components/Learned'
import Testimonials from '../Components/Testimonials'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Trustedby/>
      <Learned/>
      <Testimonials/>
    </div>
  )
}
