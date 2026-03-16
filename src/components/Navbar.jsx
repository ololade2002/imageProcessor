
 import logo from '../assets/logo.png'
 import user from '../assets/Frame 3.png'
 import icon from '../assets/icon1.png'
 import { useNavigate } from 'react-router'

export default function Navbar() {
 
  const navigate = useNavigate()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className=" mx-auto px-4 md:px-12 py-2 flex items-center justify-between">
        <img src={logo} alt='Logo'/>

        
        <div onClick={() => navigate('/profile')} className="flex flex-row gap-3 items-center justify-center">
          <div>
            <img className='w-12 h-12' src={user} alt='User'/>
          </div>
          <div className='hidden md:flex md:flex-col '>
            <h2 className='text-[20px]'>John Doe</h2>
            <p className='text-gray-500 text-[15px]'>Payarena</p>
          </div>
          <div className='hidden md:flex'>
            <img src={icon} alt='icon'/>
          </div>
        </div>

  
      </div>

    
    
    </nav>
  )
}

