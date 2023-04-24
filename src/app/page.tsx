import Navbar from "@/app/components/navbar/page"

export default function Home() {
  return (
    <main className="font-extralight tracking-widest min-h-screen bg-[url('../../public/bg-dog.jpg')] bg-no-repeat bg-cover bg-bottom">
      <Navbar />
      <div className='flex flex-col justify-center pt-12 items-center lg:pt-24 lg:flex-row lg:gap-44 lg:items-stretch'>
        <div className='flex flex-col gap-2 w-2/5'>
        <h3 className='text'>Give a helping hand to choose to need.</h3>
        
         <div className='backdrop-blur-sm bg-white/30 rounded-lg w-full'>
           <div className='flex flex-col gap-6 mt-4 p-6'>

             <div className='flex flex-col gap-2'>
               <button className='btn-primary'>0.5 ETH</button>
               <button className='btn-primary'>1 ETH</button>
               <button className='btn-primary'>2 ETH</button>
             </div>
             <hr className='border border-white/30' />

             <div className='py-2 flex'>
               <button className='btn-secondary' type="submit">Donate</button>
             </div>
           </div>
         </div>
        </div>

        <div className='flex flex-col gap-2 pt-12 w-48 mb-5 lg:pt-0'>
        <div className='flex justify-center'>
        <h3 className='text'>Last 5 Donations</h3>
        </div>

        <div className='btn-donation'>
        <a href='#' className=' text-white '>0x508...5234</a>
        <button className='btn-third'>0.5 ETH</button>
        </div>

        <div className='btn-donation'>
        <a href='#' className=' text-white '>0x508...5234</a>
        <button className='btn-third'>0.5 ETH</button>
        </div>

        <div className='btn-donation'>
        <a href='#' className=' text-white '>0x508...5234</a>
        <button className='btn-third'>0.5 ETH</button>
        </div>

        <div className='btn-donation'>
        <a href='#' className=' text-white '>0x508...5234</a>
        <button className='btn-third'>0.5 ETH</button>
        </div>

        <div className='btn-donation'>
        <a href='#' className=' text-white '>0x508...5234</a>
        <button className='btn-third'>0.5 ETH</button>
        </div>
        
        </div>
      </div>
      
    </main>
  )
}
