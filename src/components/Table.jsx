import React from 'react'
import Navbar from './Navbar'
import icon from '../assets/plusIcon.png'
import ImageTable from './imageTable'
import { useNavigate } from 'react-router'

const Table = () => {
    const navigate = useNavigate()
  return (
    <section>
        <Navbar/>

       <main className='bg-neutral-100 h-screen mx-auto px-4 md:px-12 py-6 flex gap-5 items-end-safe flex-col'>
  
            <button onClick={() => navigate('/newImage')} className='flex flex-row bg-primary px-2 py-3 w-fit text-white rounded-[5px] items-center justify-center gap-2'>
               <img src={icon} alt='Icon'/>
               <h3>Add New Image Type</h3>
            </button>

            <div className='w-full'>
                <ImageTable/>
            </div>

       </main>
       

    </section>
  )
}

export default Table