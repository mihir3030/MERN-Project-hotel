import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const sidebarLinks = [
        { name: 'Dashboard', path: '/owner', icon:assets.dashboardIcon },    
        {name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon},
        { name: 'Room List', path: '/owner/room-list', icon: assets.listIcon },
    ]
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4  
    flex flex-col  transition duration-300 ease-in-out'>
      
      {sidebarLinks.map((link, index) => (
      
      <NavLink to={link.path} key={index}  end="/owner"
       className={({ isActive }) => `flex items-center gap-2 px-4 py-2 
       ${isActive ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600' 
       : 'hover:bg-gray-100 border-white text-gray-700'}`}>

        <img src={link.icon} alt={link.name} className='h-5 w-5' />
        <span className='text-sm'>{link.name}</span> 
       </NavLink>
      ))}

    </div>
  )
}

export default Sidebar
