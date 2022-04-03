import logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className='bg-gray-200 flex flex-col md:flex-row items-center justify-between pt-6 px-10 space-y-20 md:space-y-0 pb-10 md:pt-10'>
      <div>
        <img src={logo} alt="Logo" className='w-14 h-14' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-between text-center md:text-left md:space-y-0 md:gap-x-8 space-y-6'>
        <h2 className='text-lg md:mb-4 text-darkBlue hover:text-cyan cursor-pointer'>FAQs</h2>
        <h2 className='text-lg md:mb-4 text-darkBlue hover:text-cyan cursor-pointer'>Contact Us</h2>
        <h2 className='text-lg md:mb-4 text-darkBlue hover:text-cyan cursor-pointer'>Privacy Policy</h2>
        <h2 className='text-lg md:mb-4 text-darkBlue hover:text-cyan cursor-pointer'>Press Kit</h2>
        <h2 className='text-lg md:mb-4 text-darkBlue hover:text-cyan cursor-pointer'>Install Guide</h2>
      </div>
      <div className='flex justify-center items-center gap-10'>
        <img src={fb} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
      </div>
    </footer>
  )
}

export default Footer