import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
        <nav className='flex items-center justify-around shadow-xs py-4'>
            <div className='font-bold text-2xl text-orange-400'>
                <Link to="/">LMS</Link>
            </div>
            <ul className='flex gap-12 text-lg'>
                <Link to="/" className='cursor-pointer'>Home</Link>
                <Link to="/about" className='cursor-pointer'>About Us</Link>
                <Link to="/courses" className='cursor-pointer'>Courses</Link>
                <Link to="/contact" className='cursor-pointer'>Contact</Link>
            </ul>
            <div className='flex items-center gap-2 px-4 shdow-sm'>
                <button onClick={() => navigate('/signup')} className='py-2 px-4  hover:bg-gray-100 rounded-md transition duration-300 cursor-pointer'>Signup</button>
                <button onClick={() => navigate('/login')} className='bg-orange-400 rounded-md py-2 px-4 text-white hover:bg-orange-600 cursor-pointer transtion duration-300'>Login</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar