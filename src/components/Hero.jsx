import logo from '../images/logo.svg';
import GreenButton from './GreenButton';
import BlueButton from './BlueButton';

const Hero = () => {
  return (
    <div className='bg-desktop-mobile md:bg-desktop-header bg-no-repeat bg-contain'>
      <div className=' flex justify-center items-center min-h-logo'>
        <img src={logo} alt="company-logo" />
      </div>
      <div className='min-h-info font-bai text-center px-4 space-y-12'>
        <header>
          <h1 className='text-3xl md:mb-4 md:text-5xl text-darkBlue font-bold md:font-extrabold'>A history of everything you copy</h1>
        </header>
        <p className='text-base text-blue md:text-2xl md:max-w-3xl md:mx-auto'>
          Clipboard allows you to track and organize everything you 
          copy. Instantly access your clipboard on all your devices.
        </p>
        {/* Buttons */}
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center md:space-x-3'>
          <GreenButton />
          <BlueButton />
        </div>
      </div>
    </div>
  )
}

export default Hero