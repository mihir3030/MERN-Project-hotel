import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { dashboardDummyData } from '../../assets/assets'

function Dashboard() {

  const [dashboardData, setDashboard] = useState(dashboardDummyData)

  return (
    <div>
      <Title align="left" title="Dashboard" font="outfit"
      subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. suscipit laborum. " />

      <div className='flex gap-4'>
        {/* Total Booking */}
        <div className='bg-primary/10 p-4 rounded-lg flex-1'>
          <img src={assets.totalBookingIcon} className='max-sm:hidden h-10' />
          <div className='flex  gap-1'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-natural-500 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>
        {/* Total Revenue */}
        <div className='bg-primary/10 p-4 rounded-lg flex-1'>
          <img src={assets.totalRevenueIcon} className='max-sm:hidden h-10' />
          <div className='flex gap-1'>
            <p className='text-blue-500 text-lg'>Total Revenu</p>
            <p className='text-natural-500 text-base'>$${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div> 

      {/* Recent bookings */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Booking</h2>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg overflow-y-scroll max-h-80'>

        <table className='w-full'>
          <thead className='bg-gray-200/75'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Total Aount</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Payment Status </th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.bookings.map((booking, index) => (
              <tr key={index} className='border-b hover:bg-gray-100'>
                <td className='py-3 px-4'>{booking.user.username}</td>
                <td className='py-3 px-4'>{booking.room.roomType}</td>
                <td className='py-3 px-4'>${booking.totalPrice}</td>
               <td>
                <button className={`py-1 px-3 rounded-full text-xs mx-auto ${booking.isPaid ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </button>
               </td>
              </tr>
            ))}
          </tbody>
          </table>

      </div>

    </div>
  )
}

export default Dashboard
