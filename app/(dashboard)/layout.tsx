import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const layout =async ({children} : {children:ReactNode}) => {

  const { userId, redirectToSignIn } = await  auth();
  if (!userId){
    redirect("/login");
  }
  return (
    <div>
      <Header></Header>
      {children}</div>
  )
}

export default layout