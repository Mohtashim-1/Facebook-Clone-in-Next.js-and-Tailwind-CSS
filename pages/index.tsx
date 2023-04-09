import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="container mt-36 flex mx-auto max-w-full h-96 items-center justify-center">
        <div className="left w-1/3 mx-8">
          <img className='w-80' src="facebook.svg" alt="" />
          <p className='text-2xl mx-8'>Facebook helps you to connect and share with people in your life.
          </p>
        </div>
        <div className="right flex flex-col bg-white p-8 rounded-lg w-1/3 text-lg">
          <input className='px-4 h-12 my-2 rounded-md border border-1 border-gray-300  outline-blue-600' type="text" name="email" placeholder='Email address or phone number' id="email" />
          <input className='px-4 h-12 my-2 rounded-md border border-1 border-gray-300 outline-blue-600' type="password" name='password' id='password' placeholder="Password" />
          <button className="bg-blue-600 text-white my-2 py-3 rounded-md font-bold text-xl cursor-pointer hover:bg-blue-700">Log In</button>
          <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forget Password?</span><hr className='my-2' />
          <p className="w-fit mx-auto bg-green-600 hover:bg-green-700 text-center text-white my-2 px-4 py-3 rounded-md font-bold text-xl cursor-pointer">Create New Account</p>

        </div>
      </div>

    </div>
  )
}
