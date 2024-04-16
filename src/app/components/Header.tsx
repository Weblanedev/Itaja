"use client";

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'
import styled from "styled-components";
import { useRouter, usePathname } from 'next/navigation';

import MobileMenu from './MobileMenu';

const Header = () => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    };
    const router = useRouter()
    const path = usePathname()
    return (
        <header className='fixed w-[100%] z-[2] lg:bg-[#1E4A31] flex items-center justify-between px-[20px] bg-white py-[25px] sm:py-[47px] top-0'>
            <div className='w-[100%] relative z-[2] lg:hidden'>
                <Image src="/assets/logo.png" width={84} height={45} alt="Logo" className="w-[84px] h-[45px] object-cover" />
            </div>
            <Nav className="container mx-auto hidden lg:flex relative">
                <div className='absolute z-[2] -translate-x-[32px] left-0'>
                    <p>ITAJA</p>
                </div>
                <Link href="/">
                    <p>Home</p>
                </Link>
                <Link href="/about">
                    <p>About Us</p>
                </Link>
                <Link href="/Products">
                    <p>Products</p>
                </Link>
                <a href="/contact" >Contact</a>
            </Nav>
            <div className='flex justify-end'>
                <NavbarToggle
                    className="w-[100%] lg:hidden relative z-[2]"
                    onClick={() => toggle()}
                >
                    <Bar className={state ? "translate-y-2 rotate-45 bg-white" : "bg-black"}></Bar>
                    <Bar className={state ? "opacity-0" : "bg-black"}></Bar>
                    <Bar className={state ? "-translate-y-2 -rotate-45 bg-white" : "bg-black"}></Bar>
                </NavbarToggle>
            </div>

            {state && <MobileMenu setState={setState}></MobileMenu>}
        </header>
    )
}

export default Header

const NavbarToggle = styled.div`
  cursor: pointer;
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  display: block;
  cursor: pointer;
`;

const Nav = styled.nav`
    color: white;
    font-family: 'DM Sans', sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      justify-content: center;
      gap: 121px;
`