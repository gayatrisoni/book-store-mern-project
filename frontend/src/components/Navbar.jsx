
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatar from "../assets/avatar.png"
 
const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false) ;
  console.log(isDropDownOpen)
  const currentUser = true;

  const navigation = [
    {name: "Dashboard", href: "/dashbaord"},
    {name: "Orders", href: "/orders"},
    {name: "Cart", href: "/cart"},
    {name: "Check Out", href: "/check-out"},
  ];

  return (
    <header className=' max-w-screen-2xl mx-auto px-4 py-6 '>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-16  gap-4'>
            <Link to="/">
                <HiMiniBars3CenterLeft className='size-6' />
            </Link>
            <div className='relative sm:w-72 w-40 space-x-2' >
                <IoSearchOutline className='absolute inline-block left-3 inset-y-2'  />
                <input type='text' placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
            </div>
        </div>
        <div className='relative flex items-center  md:space-x-3 space-x-2'>
          {
            currentUser ? (
              <>
                <button onClick={() => {setIsDropDownOpen(!isDropDownOpen)}}>
                  <img src={avatar} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ' '}`} />
                </button>
                {
                  isDropDownOpen && (
                    <div className='absolute right-2 top-6 mt-2 w-48 bg-white shadow-lg rounded-md z-40 '>
                      <ul className='py-2 '>
                        {navigation.map((item) => (
                          <li key = {item.name} onClick={() => setIsDropDownOpen(false)} >
                            <Link to={item.href} className='block px-4 py-2   text-sm hover:bg-gray-100'>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
              </> 
            ) : (
              <Link to="/login"><FaUserCircle className='size-6' /></Link>
            )
          }
            
            <button className='hidden sm:block'>
                <IoIosHeartEmpty className='size-6' />
            </button>
            <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
                <HiOutlineShoppingCart className='size-6' />
                <span className='text-sm font-semibold sm:ml-1'>0</span>
            </Link>
            
        </div>
      </nav>
    </header>
  )
}

export default Navbar
