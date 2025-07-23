import { useState } from 'react';
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

function ListRoom() {

    const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div>
      <Title align="left" title="List Rooms" font="outfit"
      subtitle="View and manage the rooms available in your hotel." />

      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg overflow-y-scroll max-h-80 mt-10'>

        <table className='w-full'>
          <thead className='bg-gray-200/75'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Facility</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Price Per Night</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Action </th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {rooms.map((item, index) => (
              <tr key={index} className='border-b hover:bg-gray-100'>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.roomType}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max:sm-hidden'>
                    {item.amenities.join(", ")}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>${item.pricePerNight}</td>
                
                <td className='py-3 px-4 border-t border-gray-300 text-red-500'>
                    <label className='relative inline-block w-12 h-7 cursor-pointer hover:text-red-700 transition-colors'>
                        <input type='checkbox' className='sr-only peer' checked={item.isAvailable} />

                        {/* Track */}
                        <div className='w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-500 transition-colors duration-300'></div>

                        {/* White Dot */}
                        <span className='absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5'></span>
                    </label>

                </td>
             
              </tr>
            ))}
          </tbody>
          </table>

      </div>


    
    </div>
  )
}

export default ListRoom
