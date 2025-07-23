import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating';


const CheckBox = ({lable, selected=false, onChange=() => {}}) => {
      return (
        <lable className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, lable)} />
            <span className='font-light select-none'>{lable}</span>
        </lable>
      )
}

const RadioBox = ({lable, selected=false, onChange=() => {}}) => {
      return (
        <lable className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(lable)} />
            <span className='font-light select-none'>{lable}</span>
        </lable>
      )
}

function AllRooms() {
  const navigate = useNavigate();

  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Family Suite",
    "Luxury Room"
  ];


  const PriceRange = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',

  ];

  const sortOptions = [
    "Price low to high",
    "Price high to low",
    "Newest First",
  ]

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">

      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Left Side: Heading + Room Cards */}
        <div className="flex-1 w-full">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
            Take advantage of the best hotel rooms in the world with limited time offers. Packages to enhance your stay.
          </p>

          <div className="mt-8 flex flex-col gap-10">
            {roomsDummyData.map((room) => (
              <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-b 
              border-gray-300 last:p-30 last:border-0">
                <img
                  src={room.images[0]}
                  alt="room"
                  title="View Room Details"
                  className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg cursor-pointer"
                  onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0); }}
                />

                <div className="md:w-1/2 flex flex-col gap-2">
                  <p className="text-gray-500">{room.hotel.city}</p>
                  <p
                    className="text-gray-800 text-3xl font-playfair cursor-pointer"
                      onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0); }}
                    >
                    {room.hotel.name}
                  </p>
                  <div className="flex items-center">
                    <StarRating />
                    <p className="ml-2 text-sm">200+ Reviews</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                    <img src={assets.locationIcon} alt="location-icon" className="h-4" />
                    <span>{room.hotel.address}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
                    {room.amenities.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg
                               bg-[#F5F5FF]'>
                            <img src={facilityIcons[item]} alt={item} className='w-h h-5' />
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
                  </div>

                    {/* Room Price per night */}
                    <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Filters */}
        <div className="bg-white w-80  border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
          
          <div className={`flex items-center justify-between p-x-5 py-2.5  min-lg:border-b
                           border-gray-300 ${openFilters && "border-b"}`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
                <span className='lg:hidden' onClick={() => setOpenFilters(!openFilters)}>
                    {openFilters ? "HIDE" : "SHOW"}
                </span>
                <span className='lg:hidden'>Clear</span>
            </div>
          </div>

          <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
            <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                {roomTypes.map((room, index) => (
                    <CheckBox key={index} lable={room} />
                ))}
            </div>
            <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                {PriceRange.map((range, index) =>(
                    <CheckBox key={index} lable={`$ ${range}`} />
                ))}
            </div>

            <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                {sortOptions.map((option, index) =>(
                    <RadioBox key={index} lable={option} />
                ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default AllRooms;
