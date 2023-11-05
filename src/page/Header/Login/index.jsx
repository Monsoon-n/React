import React from 'react'
import './index.css'

export default function Login({setOpen}) {
  return (
    <div className='loginContainer' onClick={() => setOpen(false)}>
        <div className='loginContent'>
            Login
        </div>
    </div>
  )
}
