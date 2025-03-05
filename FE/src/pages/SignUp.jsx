import axios from 'axios'
import React, { useState } from 'react'
import { signUpApi } from '../apis/APIs'

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
        <div>
            <div>
                <div>Email</div>
                <div><input type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /></div>
            </div>
            <div>
                <div>Password</div>
                <div><input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /></div>
            </div>
            <div>
                <div>Year of birth</div>
                <div><input type='date'
                    value={YOB}
                    onChange={(e) => setYOB(e.target.value)} /></div>
            </div>
            <div>
                <div>Gender</div>
                <div><input /></div>
            </div>
            <div><button>Register</button></div>
        </div>
    )
}
