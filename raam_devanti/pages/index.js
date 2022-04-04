import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-slate-300'>
      <Head>
        <title>Caroport</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex justify-end'>
        <span className='bg-blue-600 align-middle p-2 text-white font-medium rounded-bl-xl'>I'm a Doctor</span>
      </div>
      <div className='p-10'>
        <div className='bg-slate-400 py-5 rounded-xl shadow-2xl'>
          <div className='w-4/5 mx-auto flex mb-3'>
            <div className='w-2/5'>
              <Image
                src="/media/icon1.png"
                height="750"
                width="750"
                alt="Caroport icon"
              />
            </div>
            <div className='w-3/5 my-auto'>
              <span className='uppercase font-semibold text-lg'>Caroport</span>
            </div>
          </div>
          <div className='bg-slate-700 w-4/5 p-5 mx-auto mb-5 rounded-lg'>
            <form action="">
              <label htmlFor="uname" className='text-white'>Username:</label>
              <input className='mt-2 p-1 mb-2 rounded-lg' type="text" id='uname' name='uname' placeholder='username' />
              <label htmlFor="pass" className='text-white'>Password:</label>
              <input type="password" id='pass' name='pass' placeholder='password' className='mt-2 p-1 mb-5 rounded-lg' />
              <div className='flex justify-center'>
                <button type='submit' className='text-white rounded-lg bg-blue-800 p-2 font-semibold'>Log In</button>
              </div>
            </form>
          </div>
          <div className='flex justify-around'>
            <span className='align-middle bg-blue-800 p-2 rounded-lg text-white font-semibold'>Sign Up</span>
            <span className='text-sky-800 font-medium text-sm align-middle my-auto'>Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  )
}
