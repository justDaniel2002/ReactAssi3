import React, { useState } from 'react'
import axios from 'axios';
import { signInApi } from '../apis/APIs';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>
        <div>Email</div>
        <div>
          <input type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div>
        <div>Password</div>
        <div>
          <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={SignIn}>Login</button>
      </div>
    </div>
  )
}
