import device from '../images/image-devices.png';
import blacklist from '../images/icon-blacklist.svg';
import text from '../images/icon-text.svg';
import preview from '../images/icon-preview.svg';

const Productivity = () => {
  return (
    <section className="mt-32 text-center">
       <h2 className='text-3xl md:mb-10 text-center md:text-5xl mb-4 text-darkBlue font-semibold px-6'>Access Clipboard anywhere</h2>
      <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-2xl md:max-w-[960px] md:mb-20'>
        Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
      </p>
      <div className='mb-24 md:flex md:justify-center'>
        <img src={device} alt="device" />
      </div>
      <h2 className='text-3xl md:mb-10 text-center md:text-5xl mb-4 text-darkBlue font-semibold px-6'>Supercharge your workflow</h2>
      <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-2xl md:max-w-[960px] md:mb-20'>
        We’ve got the tools to boost your productivity.
      </p>
      <div className='mt-28 md:grid md:grid-cols-3 md:justify-center md:items-baseline md:mx-auto md:px-28'>
        <article className='space-y-6 mt-14'>
          <div className='flex items-center justify-center'>
            <img src={blacklist} alt="blacklist" className='text-center'/>
          </div>
          <h2 className='text-3xl md:mb-10 text-center md:text-3xl mb-4 text-darkBlue font-semibold px-6'>Create blacklists</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-xl md:max-w-[420px] md:mb-20'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </article>
        <article className='space-y-6 mt-14'>
          <div className='flex items-center justify-center'>
            <img src={text} alt="blacklist" className='text-center'/>
          </div>
          <h2 className='text-3xl md:mb-10 text-center md:text-3xl mb-4 text-darkBlue font-semibold px-6'>Plain text snippets</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-xl md:max-w-[420px] md:mb-20'>Remove unwanted formatting from copied text for a consistent look.</p>
        </article>
        <article className='space-y-6 mt-14'>
          <div className='flex items-center justify-center'>
            <img src={preview} alt="blacklist" className='text-center'/>
          </div>
          <h2 className='text-3xl md:mb-10 text-center md:text-3xl mb-4 text-darkBlue font-semibold px-6'>Sneak preview</h2>
          <p className='text-base  text-blue max-w-[300px] mb-4 mx-auto md:text-xl md:max-w-[420px] md:mb-20'>Quick preview of all snippets on your Clipboard for easy access.</p>
        </article>
      </div>
    </section>
  )
}

export default Productivity