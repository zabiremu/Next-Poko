import React from 'react'
import { Logo } from './_component/logo'
import {dark} from "@clerk/themes";

const page = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="h-full flex  flex-col justify-center items-center">
        <Logo />
        {children}
    </main>
  )
}

export default page
