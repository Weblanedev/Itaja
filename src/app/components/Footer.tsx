"use client"

import Image from 'next/image'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
    const router = useRouter()
    const path = usePathname()
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [user, setUser] = useState({
        email: "",
        number: "",
        message: "",
    });
    function handleChange(e: { target: { value: any; name: any } }) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    }
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
        const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`;
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
        const userInfo = {
            email: user.email,
            number: user.number,
            message: user.message
        };
        const requestBody = {
            mutations: [
                {
                    create: {
                        _type: 'contact',
                        ...userInfo
                    },
                },
            ],
        };
        setLoading(true)
        try {
            if (user.email === "" || user.number === "" || user.message === "") {
                setError("Fill all fields")
                setTimeout(() => {
                    setError("")
                }, 5000)
            } else {
                const response = await fetch(url, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(requestBody),
                });
                const data = await response.json();
                setLoading(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000)
                user.email = ""
                user.number = ""
                user.message = ""
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section className='contact-us h-[100%] pt-[172px] py-[134px]' id="Contact">
            <div className='flex flex-col lg:flex-row  gap-[40px] sm:gap-[100px] xl:gap-[260px] container mx-auto items-center'>
                <div className='px-[20px] xl:px-0 w-[100%]'>
                    <h1 className='text-[48px] sm:text-[72px] leading-normal font-heading text-white' data-aos="fade-up">GET IN TOUCH</h1>
                    <p className='text-[16px] sm:text-[20px] leading-normal font-body text-white xl:w-[75%]' data-aos="fade-up" data-aos-duration="1000">It all starts with a conversation. We value your feedback, inquiries, and thoughts. Reach out to us through the channel below, and we{"'"}ll get back to you as soon as possible.</p>
                </div>
                <div className='w-[100%] px-[20px]'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] justify-center pt-[30px]'>
                        <input name="email"
                            type="text" placeholder='Your Email Address' value={user.email}
                            onChange={handleChange} className='font-body py-[20px] w-[100%] sm:w-[490px] pl-[19px] bg-[#EBF7EC] rounded-[5px] placeholder:text-[#3b3b3b] placeholder:italic placeholder:text-[16px]' />
                        <input name="number"
                            type="text" placeholder='Your Phone number' value={user.number}
                            onChange={handleChange} className='font-body py-[20px] w-[100%] sm:w-[490px] pl-[19px] bg-[#EBF7EC] rounded-[5px] placeholder:text-[#3b3b3b] placeholder:italic' />
                        <textarea name="message" placeholder='Your Message' value={user.message}
                            onChange={handleChange} className='font-body py-[20px] w-[100%] sm:w-[490px] pl-[19px] bg-[#EBF7EC] rounded-[5px] placeholder:text-[#3b3b3b] placeholder:italic h-[131px]' />
                        <p className='text-red-400'>{error}</p>
                        {success && <p className='text-[#49D94F]'>Message Sent</p>}
                        <button className='px-[34px] mt-[10px] sm:px-[59px] rounded-[5px] py-[10px] w-[100%] sm:w-[490px] text-white bg-[#49D94F] font-[700] flex justify-center font-body'>           {loading ? <div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-[25px] w-[25px]"></div> : "SUBMIT"}</button>
                    </form>
                </div>
            </div>

            <div className='container mx-auto px-[20px] sm:px-[60px] font-body flex flex-col lg:flex-row gap-[40px] pt-[327px]'>
                <div className='w-[100%] hidden sm:block'>
                    <Image src="/assets/logo.png" width={201} height={194} alt="" objectFit='contain' className="w-[201px] h-[192px] object-cover" />
                    <h1 className='text-[20px] leading-normal pt-[20px] text-white w-[280px]'>BONBRIDGE FARMS AND ALLIED INTEGRATED LIMITED</h1>
                </div>
                <div className='flex flex-col gap-[20px] text-[20px] w-[100%]'>
                    <h1 className='text-[#49D94F] leading-normal'>Home</h1>
                    <div className='text-white flex flex-col gap-[20px]'>
                        <p className='cursor-pointer' onClick={() => { router.push("/About") }}>About Us</p>
                        <p className='cursor-pointer' onClick={() => { router.push("/Products") }}>Products</p>
                        <p className='cursor-pointer' onClick={() => { router.push(`${path}#Contact`) }}>Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] text-[20px] w-[100%]'>
                    <h1 className='text-[#49D94F] leading-normal'>Product</h1>
                    <div className='text-white flex flex-col gap-[20px]'>
                        <p className='cursor-pointer' onClick={() => { router.push(`${path}#Contact`) }}>Request a Quote</p>
                        <p className='cursor-pointer' onClick={() => { router.push(`${path}#Contact`) }}>Contact Us</p>
                        <p className='cursor-pointer' onClick={() => { router.push("/Products") }}>Market Information</p>
                    </div>
                </div>
                <div className='w-[100%] lg:text-right text-[20px]'>
                    <div>
                        <h1 className='text-[#49D94F] leading-normal'>Address 1</h1>
                        <p className='text-white'>OZOEBUBECHUKWU COMPOUND, AGBANA VILLAGE, AWKA-SOUTH</p>
                    </div>
                    <div className='py-[20px]'>
                        <h1 className='text-[#49D94F] leading-normal'>Operating Address</h1>
                        <p className='text-white'>6 ONITANA STREET, OFF MOBOLAJI JOHNSON, IKOYI, LAGOS</p>
                    </div>
                    <div>
                        <h1 className='text-[#49D94F] leading-normal'>Email</h1>
                        <p className='text-white'>info@bonbridgefarms.com</p>
                    </div>
                </div>
                <div className='w-[100%] block sm:hidden'>
                    <Image src="/assets/logo.png" width={201} height={194} alt="" objectFit='contain' className="w-[201px] h-[192px] object-cover" />
                    <h1 className='text-[20px] leading-normal pt-[20px] text-white w-[280px]'>BONBRIDGE FARMS AND ALLIED INTEGRATED LIMITED</h1>
                </div>
            </div>
        </section>
    )
}

export default Footer