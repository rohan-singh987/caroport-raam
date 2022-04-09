import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-slate-300 h-screen'>
      <Head>
        <title>Caroport</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex justify-end'>
        <span className='bg-blue-600 align-middle p-2 text-white font-medium rounded-bl-xl lg:text-lg'>I'm a Doctor</span>
      </div>
      <div className='p-3 sm:px-28 md:py-7 md:px-10 lg:py-10 lg:px-12 xl:py-12 xl:px-96'>
        <div className='bg-slate-400 py-5 rounded-xl shadow-2xl sm:px-3'>
          <div className='w-1/3 mx-auto flex mb-3'>
            <div className='w-2/3'>
              <Image
                src="/media/icon1.png"
                height="750"
                width="750"
                alt="Caroport icon"
              />
            </div>
              <span className='uppercase font-semibold text-lg my-auto lg:text-2xl'>Caroport</span>
          </div>
          <div className='bg-slate-700 w-3/5 p-5 mx-auto mb-5 rounded-lg sm:mb-8 lg:w-3/5'>
            <form action="">
              <div className='sm:w-1/3'>
                <label htmlFor="uname" className='text-white'>Username:</label>
              </div>
              <div className='mt-2 sm:w-1/3 mx-auto mb-2 lg:mb-5'>
                <input className='p-1 rounded-lg' type="text" id='uname' name='uname' placeholder='username' />
              </div>
              <div className='sm:w-1/3'>
                <label htmlFor="pass" className='text-white'>Password:</label>
              </div>
              <div className='mt-2 sm:w-1/3 mx-auto mb-5 sm:mb-8 lg:mb-10'>
                <input type="password" id='pass' name='pass' placeholder='password' className='p-1 rounded-lg' />
              </div>
              <div className='flex justify-center'>
                <button type='submit' className='text-white rounded-lg bg-blue-800 p-2 font-semibold'>Log In</button>
              </div>
            </form>
          </div>
          <div className='flex justify-around'>
            <span className='align-middle bg-blue-800 p-2 rounded-lg text-white font-semibold'>Sign Up</span>
            <span className='text-sky-800 font-medium text-sm align-middle my-auto md:text-base'>Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  )
}
