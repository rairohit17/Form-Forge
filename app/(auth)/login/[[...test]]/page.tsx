'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { dark , neobrutalism , shadesOfPurple   } from '@clerk/themes'
import { useTheme } from 'next-themes'

const Login = () => {
  const {resolvedTheme} = useTheme();
  return (
    <div className='flex justify-center items-center min-h-screen'>
          <SignIn appearance={{
        baseTheme: resolvedTheme=="light" ? neobrutalism : shadesOfPurple  ,
      }}
          ></SignIn>

    </div>
  )
}

export default Login