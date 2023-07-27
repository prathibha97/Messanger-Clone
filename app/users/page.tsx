'use client'
import { signOut } from 'next-auth/react'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <button onClick={()=>signOut()}>logout</button>
}

export default page