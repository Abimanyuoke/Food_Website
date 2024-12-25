import React from 'react'
import Img2 from '../../assets/biryani2.png'


const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken Kari",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Coffe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
]

const Services = () => {
  return (
    <div className='py-10'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Service</p>
          <h1 className='text-3xl font-bold'>Service</h1>
          <p className='text-xs text-gray-400'>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam a nisi vero qui sed consequuntur iste cum minima error.
          </p>
        </div>
        {/* Card section */}
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
          {
            ServicesData.map(({id, img, name, description}) => {
              return (
                <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:text-white dark:hover:text-primary hover:bg-primary hover:text-white duration-300 p-4 shadow-xl'>
                <div className='h-[100px]'>
                  <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                </div>
              </div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services