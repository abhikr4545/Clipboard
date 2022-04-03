import GreenButton from "./GreenButton"
import BlueButton from "./BlueButton"

const DownloadInfo = () => {
  return (
    <section className='text-center font-bai mb-40'>
      <h2 className='text-3xl md:mb-10 text-center md:text-5xl mb-4 text-darkBlue font-semibold px-6'>Clipboard for iOS and Mac OS</h2>
      <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-2xl md:max-w-[960px] md:mb-20'>
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className='flex mt-20 flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center md:space-x-3'>
          <GreenButton />
          <BlueButton />
        </div>
    </section>
  )
}

export default DownloadInfo