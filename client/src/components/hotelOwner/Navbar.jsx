import {Link} from 'react-router-dom';
import {assets} from '../../assets/assets';
import {UserButton} from '@clerk/clerk-react';


function Navbar() {
  return (
    <div className='flex items-center justify-between px-4  md:px-8 border-b border-gray-300 py-3 
    bg-white transition duration-300 ease-in-out'>
     <Link to='/' >
       <img src={assets.logo} alt="Logo" className='h-10 invert' />
     </Link>
     <UserButton  />
    </div>
  )
}

export default Navbar
