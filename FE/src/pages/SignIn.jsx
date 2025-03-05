import React, { useState } from 'react'
import axios from 'axios';
import { signInApi } from '../apis/APIs';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const SignIn = async () => {
    const body = { email, password }

    axios.post(signInApi, body).then(() => {
      navigate('/');
    }).catch(() => { })
  }
  return (
    <div className='bg-blue-500 h-screen pt-40'>
      <div className='w-1/3 m-auto bg-white rounded-xl p-5'>
        <div>
          <div className='my-4 font-medium text-xl'>Email</div>
          <div>
            <input className='border rounded-xl py-1 px-2 w-full'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <div className='my-4 font-medium text-xl'>Password</div>
          <div>
            <input className='border rounded-xl py-1 px-2 w-full' 
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4' onClick={SignIn}>Login</button>
        </div>
        <div className='flex justify-center text-blue-500 text-sm'>
          <Link to={'signup'}>don't have an account ? register</Link>
        </div>
      </div>
    </div>
  )
}
