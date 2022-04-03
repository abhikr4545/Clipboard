import google from '../images/logo-google.png'
import hp from '../images/logo-hp.png'
import ibm from '../images/logo-ibm.png'
import microsoft from '../images/logo-microsoft.png'
import vector from '../images/logo-vector-graphics.png'

const Companies = () => {
  return (
    <section className='mt-40 md:mt-48 mb-40 space-y-16 md:space-y-0 flex justify-center items-center flex-col md:flex-row md:justify-between md:px-48'>
      <img src={google} alt="Google" />
      <img src={hp} alt="hp" />
      <img src={ibm} alt="ibm" />
      <img src={microsoft} alt="microsoft" />
      <img src={vector} alt="vector" />
    </section>
  )
}

export default Companies