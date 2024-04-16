"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            offset: 120,
            delay: 0,
            duration: 1500,
        });
    }, [])

    return null
}