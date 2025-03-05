import axios from 'axios'
import React, { useState } from 'react'
import { signUpApi } from '../apis/APIs'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [YOB, setYOB] = useState()
    const [gender, setGender] = useState()

    const SignUp = async () => {
        const body = { email, password, YOB, gender }

        axios.post(signUpApi, body).then(() => {

        }).catch(() => {

        })
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
                <div>
                    <div className='my-4 font-medium text-xl'>YOB</div>
                    <div>
                        <input className='border rounded-xl py-1 px-2 w-full'
                            type='date'
                            value={YOB}
                            onChange={(e) => setYOB(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className='my-4 font-medium text-xl'>Gender</div>
                    <div>
                        <span className='mr-5'>
                            <input type='radio' name='gender'
                                onChange={e => {
                                    if (e.checked) setGender(true)
                                }}
                            />Male
                        </span>
                        <input type='radio' name='gender'
                            onChange={e => {
                                if (e.checked) setGender(false)
                            }} />Female
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4' onClick={SignUp}>Register</button>
                </div>
                <div className='flex justify-center text-blue-500 text-sm'>
                    <Link to={'/'}>already have an account ? login</Link>
                </div>
            </div>
        </div>
    )
}
