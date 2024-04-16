"use client"

import { useRouter, usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'

interface MobileMenuProps {
    setState: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ setState }: MobileMenuProps) => {
    const router = useRouter()
    const path = usePathname()
    return (
        <div className='bg-[#1E4A31] h-dvh absolute w-[100%] left-0 font-body text-white top-0'>
            <div className='flex flex-col text-[20px] gap-[70px] items-center pt-[130px]'>
                <p onClick={() => {
                    router.push('/')
                    setState(false)
                }}>Home</p>
                <p onClick={() => {
                    router.push('/about')
                    setState(false)
                }}>
                    About Us
                </p>
                <p onClick={() => {
                    router.push('/Products')
                    setState(false)
                }}>
                    Products
                </p>
                <p onClick={() => {
                    setState(false)
                    router.push(`${path}#FAQ`)
                }}>FAQs</p>
                <p onClick={() => {
                    setState(false)
                    router.push(`/contact`)
                }}>Contact Us</p>
            </div>
        </div>
    )
}

export default MobileMenu