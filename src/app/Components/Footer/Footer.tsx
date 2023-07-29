import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[100%] text-center font-fira font-bold pt-3 bg-[#001C30]'>
       <h1 className='text-3xl text-text'>Contact us</h1>
       <div className="flex flex-col md:flex-row m-auto w-[80%] gap-[15%] justify-center align-middle p-3">
       <div> <h1 className='text-neon text-xl'>Phone: +91-9015837752</h1> </div>
        <div><h1 className='text-neon text-xl'>Najafgarh, New Delhi</h1></div>
        <div><h1 className='text-neon text-xl'>Indiranagar, Banglore</h1></div>
       </div>
    </footer>
  )
}

export default Footer