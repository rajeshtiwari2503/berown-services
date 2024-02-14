import React from 'react'

const Clients = () => {
  const clients=[
    "afterPassout.png",
    "sparetrade.png",
    "Heuser.png",
    "samosafry.webp"
  ]

  return (
    <div className='container py-3 sm:py-0'>
    <div className='font-bold text-center text-4xl mt-8'>Our Clients</div>
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mt-12">
    {clients.map((c1,index)=>
    <div key={index} className={` shadow-md p-4 rounded-md bg-violet-100 dark:bg-violet-400   p-4  flex items-center justify-center`}>
    <img src={c1} alt="client" className=' h-[50px]' />
    </div>
      
      )}
      </div>
      </div>
  )
}

export default Clients;