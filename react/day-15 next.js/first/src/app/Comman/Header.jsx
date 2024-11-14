import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      
      <Link href={"/"} > home | </Link>
      <Link href={"/about"} > about | </Link>
      <Link href={"/gallery"} > gallery </Link>
         
    </div>
  )
}
