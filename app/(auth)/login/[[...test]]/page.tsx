'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
          <SignIn></SignIn>

    </div>
  )
}

export default Login