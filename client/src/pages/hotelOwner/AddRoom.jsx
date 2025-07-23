import React from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

function AddRoom() {

  const [images, setImages] = React.useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = React.useState({
    roomType: '',
    pricePerNight: 0,
    aminities: {
      'Free Wi-Fi': false,
      "Free Breakfast": false,
      "Free Parking": false,
      "Swimming Pool": false,
    }
  })
  return (
    <div>
      <form>
        <Title align="left" title="Add Room" font="outfit"
        subtitle="Add a new room to your hotel. Fill in the details below." />

      {/* Upload Images */}
      <p className='text-gray-600 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 mb-10 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className='block mb-4'>
            <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} />
          <input type="file" id={`roomImage${key}`} accept="image/*" hidden
          onChange={(e) => setImages({...images, [key]:e.target.files[0]})} />


          </label>

        ))}
      </div>

        <div className='w-full flex max-sm:flex-col '>
          <div className='flex-1 max-w-48'>
            <p className='text-gray-600 mb-2'>Room Type</p>
            <select value={inputs.roomType} onChange={(e) => setInputs({...inputs, roomType: e.target.value})}
              className='w-full p-2 border border-gray-300 rounded-lg mb-4'>

              <option value="">Select Room Type</option>
              <option value="single">Single Bed</option>
              <option value="double">Double Bed</option>
              <option value="suite">Luxury Room</option>
              <option value="family">Family Room</option>
            </select>
          </div>
          <div className='flex-1 max-w-48 ml-11'>
            <p className='text-gray-600 mb-2'>Price Per Night</p>
            <input className='border border-gray-300 mt-1 rounded' type='number'
            value={inputs.pricePerNight}
            onChange={((e) => setInputs({...inputs, pricePerNight: e.target.value}))} />
          </div>
          </div>

        {/* Amenities */}
        <p className='text-gray-600 mb-2'>Amenities</p>
        <div className='grid grid-cols-2 sm:flex gap-4 mb-10 flex-wrap'>
          {Object.keys(inputs.aminities).map((amenity) => (
            <label key={amenity} className='flex items-center'>
              <input type='checkbox' id={`aminities$[index+1]`}
              checked={inputs.aminities[amenity]}
              onChange={() => setInputs({...inputs, aminities:{...inputs.aminities, [amenity]: !inputs.aminities[amenity]}})} />
              <span className='ml-2'>{amenity}</span>
            </label>
          ))}
        </div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
            Add Room
          </button>
      </form>
    </div>
  )
}

export default AddRoom
