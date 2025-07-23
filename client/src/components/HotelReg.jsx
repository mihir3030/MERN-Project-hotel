import { assets, cities } from '../assets/assets'
    
function HotelReg() {
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 z-100 flex items-center justify-center 
    bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl '>
        <img src={assets.regImage} alt="Hotel Registration" className='w-1/2 rounded-xl hidden md:block' />

        <div className='relative flex flex-col items-center p-8 w-full'>
            <img src={assets.closeIcon} alt="Close" className='absolute top-4 right-4 cursor-pointer'  />

            <p className='text-2xl font-semibold  mt-6'>Register your hotel</p>

            {/* Hote name */}
            <div className='w-full mt-4'>
                <label className='text-sm font-medium'>Hotel Name</label>
                <input type="text" placeholder='Enter hotel name' 
                    className='w-full border border-gray-300 rounded-lg p-2 mt-2' />
                
                {/* Contact */}
                <div className='w-full mt-4'>
                    <label className='text-sm font-medium'>Contact Number</label>
                    <input type="text" placeholder='Enter contact number' 
                        className='w-full border border-gray-300 rounded-lg p-2 mt-2' />
                </div>

                {/* Address */}
                <div className='w-full mt-4'>
                    <label className='text-sm font-medium'>Address</label>
                    <input type="text" placeholder='Enter  address' 
                        className='w-full border border-gray-300 rounded-lg p-2 mt-2' />
                </div>

                {/* select city drop down */}
                <div className='w-full mt-4'>
                    <label className='text-sm font-medium'>City</label>
                    <select className='w-full border border-gray-300 rounded-lg p-2 mt-2'>
                        <option value="">Select City</option>
                       {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                       ))}
                    </select>
                </div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-lg mt-6'>
                    Register
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default HotelReg
