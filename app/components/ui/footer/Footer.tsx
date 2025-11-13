import { titleFont } from '@/app/layout'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
        <Link
            href="/"
        >
            <span className={`${titleFont.className} antialiased font-bold`}>App</span>
            <span>| Shop</span>
            <span> {new Date().getFullYear()}</span>
        </Link>

        <Link
            href="/"
            className='mx-3'
        >
            Privacidad & Legal
        </Link>

        <Link
            href="/"
            className='mx-3'
        >
            Contáctanos
        </Link>

    </div>
  )
}
