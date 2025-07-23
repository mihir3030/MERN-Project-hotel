import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'
import { useState } from 'react'

function MyBookings() {

    const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-28 xl:px-32' >
        
        <Title title='My Bookings' subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quisquam, voluptatibus. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        align="left" />

        <div className='max-w-6xl mt-8 w-full text-gray-800'>
            
            <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b 
                         border-gray-300 text-gray-500 font-medium text-base py-3'>
                <div className='w-1/3'>Hotels</div>
                <div className='w-1/3'>Date and Time</div>
                <div className='w-1/3'>Payment</div>
            </div>

          {bookings.map((booking) => (
            <div key={booking._id}  className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b
                border-gray-300 py-6 first:border-t'>
                {/* Hotel Details */}
                <div>
                    <img src={booking.room.images[0]} alt="hotel image"
                    className='min-md:w-44 rounded shadow object-cover' />

                    <div>
                        <p className='font-playfair text-2xl'>{booking.hotel.name}
                        <span className='text-sm font-inter'>({booking.room.roomType})</span>
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-600'>
                          <img src={assets.locationIcon} alt="room image" />
                          <span>{booking.hotel.address}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-gray-600'>
                          <img src={assets.guestsIcon} alt="room image" />
                          <span>{booking.guests} Guests</span>
                        </div>
                        <p>Total: ${booking.totalPrice}</p>
                    </div>
                </div>
                 {/* Date and Time */}
                <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                  <div>
                      <p className='text-gray-500 text-sm'>CheckIn</p>
                      <p>
                        {new Date(booking.checkInDate).toDateString()}
                      </p>
                    </div>

                    <div>
                      <p className='text-gray-500 text-sm'>CheckOut</p>
                      <p>
                        {new Date(booking.checkOutDate).toDateString()}
                      </p>
                    </div>
                </div>
                {/* Payment Details */}
                <div cassName='flex flex-col items-centermt-3'>
                    <div className='flex items-center gap-2'>
                      <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <p  className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                        {booking.isPaid ? 'Paid' : 'Not Paid'}
                      </p>
                    </div>
                    {!booking.isPaid && (
                      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>
                        Pay Now
                      </button>
                    )}
                </div>
            </div>
          ))}    

        </div>

    </div>
  )
}

export default MyBookings
