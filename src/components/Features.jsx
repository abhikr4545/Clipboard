import computer from '../images/image-computer.png';

const Features = () => {
  return (
    <section className='px-4 text-center font-bai h-fit mt-24'>
      <header>
          <h1 className='text-3xl md:mb-10 text-center md:text-5xl mb-4 text-darkBlue font-semibold px-6'>Keep track of your snippets</h1>
      </header>
      <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-2xl md:max-w-[960px] md:mb-20'>
        Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything.
      </p>
      <section className='md:flex md:gap-24 items-center'>
        {/* image */}
        <div className='mb-10 md:mb-0 md:-translate-x-[70px] md:overflow-hidden'>
          <img src={computer} alt="computer" className='px-6' />
        </div>
        <div className='md:text-left md:space-y-7'>
          <h2 className='text-2xl md:mb-4 md:text-3xl mb-4 text-darkBlue font-semibold'>Quick Search</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:mx-0 md:text-xl md:max-w-[420px]'>Easily search your snippets by content, category, web address, application, and more.</p>
          <h2 className='text-2xl md:mb-4 md:text-3xl mb-4 text-darkBlue font-semibold'>iCloud Sync</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:mx-0 md:text-xl md:max-w-[420px]'>Instantly saves and syncs snippets across all your devices.</p>
          <h2 className='text-2xl md:mb-4 md:text-3xl mb-4 text-darkBlue font-semibold'>Complete History</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:mx-0 md:text-xl md:max-w-[420px]'>Retrieve any snippets from the first moment you started using the app.</p>
        </div>
      </section>
    </section>
  )
}

export default Features