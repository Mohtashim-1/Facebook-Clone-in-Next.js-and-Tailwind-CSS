import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-200'>
      <div className="container flex mt-48 mx-auto max-w-full h-96">
        <div className="left">
          <img className='w-60' src="facebook.svg" alt="" />
          <p>Click your picture or add an account.
          </p>
        </div>
        <div className="right flex flex-col">
          <input type="text" name="email" placeholder='Email address or phone number' id="email" />
          <input type="password" name='password' id='password' placeholder="Password" />
          <button className="btn">Log In</button>
          <span>Forget Password?</span>
          <p>Create Account</p>
          <hr />
        </div>
      </div>

    </div>
  )
}
