import { Business, Category } from '@material-ui/icons';
import { set } from 'mongoose';
import React, { useState, useEffect } from 'react'
import BookCard from '../books/BookCard';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const categories = ["choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("choose a genre")

    useEffect (() => {
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))   
    }, [])


   const filteredBooks = selectedCategory === "choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
      <div className='mb-8 flex items-center'>
        <select name="category" id="category" 
            className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
            onChange={(e) => setSelectedCategory(e.target.value)}>
            {
                categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))
            }
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
        filteredBooks.length > 0 && filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
                <BookCard  book={book}/>
            </SwiperSlide>
            
        ) )
      }
        
        
      </Swiper>

      {/* {
        filteredBooks.map((book, index) => (
            <BookCard key={index} book={book}/>
        ) )
      }
       */}
    </div>
  )
}

export default TopSellers
