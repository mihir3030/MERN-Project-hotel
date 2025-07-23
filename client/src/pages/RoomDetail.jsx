import React from 'react'
import { useParams } from 'react-router-dom'
import {roomCommonData, roomsDummyData} from '../assets/assets.js'
import { useState, useEffect } from 'react'
import StarRating from '../components/StarRating'
import { assets, facilityIcons } from '../assets/assets.js'


function RoomDetail() {
  const {id} = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)
  console.log("id ----",id)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
    console.log("room ----",room)
  }, [id])

  return room &&(
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-28 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row gap-2 md:items-center'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='text-sm font-inter'>({room.roomType})</span> </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>
      
      {/* Room Rating */}
      <div className='flex items-center gap-1 mt-2'>
          <StarRating />
          <p className='ml-2'>200+ Reviews</p>
      </div>

      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location" className='w-5 h-5' />
        <span className='text-sm font-inter'>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row gap-6 mt-6'>
        <div className='lg:w-1/2 w-full '> 
          <img src={mainImage} alt="room" className='w-full object-cover rounded-xl shadow-lg ' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index ) => (
            <img key={index} 
            src={image} alt="room" 
            onClick={() => setMainImage(image)}
            className={`w-full object-cover rounded-xl shadow-md cursor-pointer
                        ${mainImage === image && 'outline-3 outline-orange-500'}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
          <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Expericance luxury never before</h1>
            
            {/* Amenities */}
            <div className='flex flex-wrap items-center gap-4 mt-3 mb-6'>
              {room.amenities.map((item, index) => (
                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100'>
                  <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                  <p className='text-sm'>{item}</p>
                </div>
              ))}
            </div>

          </div>
          {/* Room Price */}
          <p className='text-2xl font-medium'>${room.pricePerNight} <span className='text-sm font-inter text-gray-500'>per night</span></p>
      </div>


      {/* CheckIn CheckOut Form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-10
                       bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-xl p-6 mx-auto max-w-6xl'>
          
          {/* Inputs */}
          <div className='flex flex-col flex-wrap md:flex-row items-start
          md:items-center gap-4  md:gap-10 text-gray-500'>
            
            {/* Check In */}
            <div className='flex flex-col'>
              <label htmlFor='checkInDate' className='text-medium'>Check In</label>
              <input type='date' id='checkInDate' placeholder='Check In' 
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              required />
            </div>
            
            {/* Check Out */}
            <div className='flex flex-col'>
              <label htmlFor='checkOutDate' className='text-medium'>Check Out</label>
              <input type='date' id='checkOutDate' placeholder='Check Out' 
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              required />
            </div>

            {/* Guests */}
            <div className='flex flex-col'>
              <label htmlFor='guests' className='text-medium'>Guests</label>
              <input type='number' id='guests' placeholder='Guests' 
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              required />
            </div>

          </div>
          {/* Button */}
            <button type="submit" className='bg-orange-500 hover:bg-orange-600 active:scale-95
            transition-all duration-300 text-white rounded-md max-md:w-full  max-md:mt-6 md:px-25 py-3 md:py-4
            text-base cursor-pointer'>
              Check Availability
            </button>
          
      </form>

      {/* Common Speecification */}
      <div className='mt-25 space-y-4'>
        {roomCommonData.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
            <img src={item.icon} alt={item.title} className='w-6.5' />
            <div>
              <p className='text-base'>{item.title}</p>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus commodi, earum eius cupiditate sapiente voluptatum veniam quidem nihil omnis labore ab ipsam harum iure veritatis molestias ipsa esse perferendis!
        Cum necessitatibus laboriosam numquam at quasi a! Ab fugit consectetur, ullam beatae eum aut unde et quidem mollitia. Dignissimos enim nisi iste expedita, iure sunt fuga temporibus exercitationem vitae magnam.
        Quia velit dolores, nobis corporis, aliquid quibusdam illum accusamus fugiat quas ut quae cupiditate perferendis inventore exercitationem nam! Consectetur esse non quos inventore earum libero, id quaerat officia nisi minus?
        A sequi maiores in distinctio repudiandae laborum esse aspernatur! Sint earum voluptate reiciendis. Qui doloremque deleniti inventore maiores debitis corrupti aliquam autem aliquid, modi enim pariatur. Quod fugiat eum quos.</p>
      </div>

        {/* Hoster By */}
        <div className='flex flex-col items-start gap-4 mt-10'>
          <div className='flex items-center gap-4'>
            <img src={room.hotel.owner.image} alt="Host" className='w-14 h-14 rounded-full' />
            <div>
              <p className='text-lg md:text-xl'>{room.hotel.name}</p>
              <div className='flex items-center gap-1 text-gray-500'>
                <StarRating />
              <p className='ml-2'>200+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
  
}

export default RoomDetail
