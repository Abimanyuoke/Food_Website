import React from 'react'
import Food1 from '../../assets/biryani5.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px]'>
        <div>
            <div className='container'> 
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img src={Food1} alt="" className='max-w-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>
                            Lorem ipsum dolor
                        </h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident, culpa sapiente quidem quae ducimus ex ipsam maxime modi error?
                            <br/>
                            <br/>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laboriosam inventore earum aliquam, impedit magni quo veritatis porro nesciunt sed, debitis cupiditate voluptatem nobis quia placeat quos enim sequi labore deserunt perspiciatis itaque. Placeat, vel.
                        </p>
                        <div>
                            <div className='flex gap-6 mb-6'>
                                <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400'/>
                                <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400'/>
                            </div>
                            <button className='px-6 py-3 text-white mb-4 bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-105 duration-200'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner