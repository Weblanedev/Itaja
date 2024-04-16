"use client"

import React from 'react'
import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { useRouter, usePathname } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link'
import useSWR from 'swr'
import urlFor from '../helpers/displaySanityImages'
import fetcher from '../helpers/fetcher'
import { FaArrowRightLong } from 'react-icons/fa6'

const Products = () => {
    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Products%22%5D+%7B%0A++ProductName%2C%0A++++_id%2C%0A++++ProductCoverImage%2C%0A++++ProductDataSheet%2C%0A++++ProductImage%2C%0A++%22ProductDataSheet%22%3A+ProductDataSheet.asset-%3Eurl%0A%7D`
    const { data } = useSWR(url, fetcher)
    const router = useRouter()
    const path = usePathname()

    return (
        <main>
            <section className='pb-[69px] pt-[100px] sm:pb-[98px] sm:pt-[110px]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper relative"
                >
                    <SwiperSlide className='relative'>
                        <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222393/Rectangle_5901_7_zmtv3q.webp" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover brightness-75" />
                        <div className='text-white absolute z-[1] top-[200px] lg:top-[205px] left-[10px] lg:left-[145px] flex flex-col items-center sm:block'>
                            <div className='text-[46px] sm:text-[96px] font-heading leading-normal text-center sm:text-left'>
                                <h1>Sustainably Grown,</h1>
                                <h1 className='-translate-y-[23px] sm:-translate-y-[50px]'>Nourish Your Lifestyle!
                                </h1>
                            </div>
                            <p className='text-[16px] sm:text-[20px] text-center sm:text-left font-body leading-normal -translate-y-[25px] sm:-translate-y-[60px] w-[90%] sm:w-[60%]'>Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222619/Rectangle_5901_hwjpyv.webp" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover brightness-75" />
                        <div className='text-white absolute z-[1] top-[200px] lg:top-[205px] left-[20px] lg:left-[145px] flex flex-col items-center sm:block'>
                            <div className='text-[46px] sm:text-[96px] font-heading leading-normal text-center sm:text-left'>
                                <h1>Sustainably Grown,</h1>
                                <h1 className='-translate-y-[23px] sm:-translate-y-[50px]'>Globally Shipped.</h1>
                            </div>
                            <p className='text-[16px] sm:text-[20px] text-center sm:text-left font-body leading-normal -translate-y-[25px] sm:-translate-y-[70px] w-[90%] sm:w-[60%]'>Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222276/Rectangle_5901_10_hlxu1z.webp" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover brightness-75" />
                        <div className='text-white absolute z-[1] top-[200px] lg:top-[205px] left-[20px] lg:left-[145px] flex flex-col items-center sm:block'>
                            <div className='text-[46px] sm:text-[96px] font-heading leading-normal text-center sm:text-left'>
                                <h1>Sustainably Grown,</h1>
                                <h1 className='-translate-y-[23px] sm:-translate-y-[50px]'>Globally Shipped.</h1>
                            </div>
                            <p className='text-[16px] sm:text-[20px] text-center sm:text-left font-body leading-normal -translate-y-[25px] sm:-translate-y-[70px] w-[90%] sm:w-[60%]'>Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222944/Rectangle_5901_c3uztc.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover brightness-75" />
                        <div className='text-white absolute z-[1] top-[200px] lg:top-[205px] left-[20px] lg:left-[145px] flex flex-col items-center sm:block'>
                            <div className='text-[46px] sm:text-[96px] font-heading leading-normal text-center sm:text-left'>
                                <h1>Sustainably Grown,</h1>
                                <h1 className='-translate-y-[23px] sm:-translate-y-[50px]'>Globally Shipped.</h1>
                            </div>
                            <p className='text-[16px] sm:text-[20px] text-center sm:text-left font-body leading-normal -translate-y-[25px] sm:-translate-y-[70px] w-[90%] sm:w-[60%]'>Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="mt-[100px] container mx-auto sm:px-[20px] xl:px-0">
                <h1 className="text-[40px] font-heading leading-[47px] sm:text-[80px] sm:leading-normal text-center" data-aos="fade-up">
                    <span className="text-[#714E2D]">OUR</span>{" "}
                    <span className="text-[#EE821F]">PRODUCTS</span>
                </h1>
                <p className="text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[60%] mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">From the rich flavors of dried Hibiscus leaves to the nutritional powerhouse of Sesame seeds, explore our carefully curated selection, showcasing the essence of eco-friendly farming. Discover the quality and freshness that sets Itaja Innovations Limited Ltd{"'"}s products apart.</p>
                <div className='pt-[100px] hidden lg:flex flex-col items-center justify-center gap-[100px]'>
                    <div className='grid grid-cols-3 gap-[40px]'>
                        {
                            data?.result?.map((e: any, id: React.Key | null | undefined) => {
                                return (
                                    <div key={id} className='cursor-pointer relative group hover:scale-[1.03] transition-one'>
                                        <Image src={urlFor(e.ProductImage.asset._ref).url()} width={1500} height={500} alt="" objectFit='contain' className="w-[387px] h-[476px] 2xl:h-[476px] object-cover group-hover:scale-[1.03] shadow-md" data-aos="fade-right" />
                                        <div className='text-[#1E4A31] bg-[#EBF7EC] h-[143px] items-center justify-center text-[36px] underline font-body absolute z-[1] bottom-0 w-[100%] opacity-0 group-hover:opacity-100 flex transition-one'>
                                            <Link href={`/Products/${e._id}`}>
                                                <h1 data-aos="zoom-in">{e.ProductName}</h1>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='pt-[100px] flex flex-col gap-[40px] lg:hidden px-[20px]'>
                    {data?.result?.map((e: any, id: React.Key | null | undefined) => {
                        return (
                            <div className='cursor-pointer relative group' key={id}>
                                <Image src={urlFor(e.ProductImage.asset._ref).url()} width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[370px] object-cover" />
                                <div className='text-[#1E4A31] bg-[#EBF7EC] h-[80px] items-center justify-center text-[20px] font-body absolute z-[1] bottom-0 w-[100%] flex'>
                                    <Link href={`/Products/${e._id}`}>
                                        <h1 data-aos="zoom-in">{e.ProductName}</h1>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col lg:flex-row gap-[40px] sm:gap-[100px] items-center overflow-hidden'>
                <div className='w-[100%] px-[20px] xl:pl-[80px] 2xl:pl-[127px]' data-aos="fade-right">
                    <div className='text-[40px]  text-center sm:text-start sm:text-[72px] font-heading leading-normal pb-[20px]'>
                        <h1 className='text-[#EE821F]'>WE DELIVER TO </h1>
                        <h1 className='text-[#714E2D] -translate-y-[20px] sm:-translate-y-[40px]'> YOUR DOORSTEP</h1>
                    </div>
                    <p className='text-[#696969] -translate-y-[40px] font-body text-[16px] sm:text-[20px] leading-normal pt-[10px] text-justify'>Experience the convenience of timely and reliable deliveries to your doorstep, no matter where you are. From the heart of our warehouse to destinations across the globe, we ensure your packages reach you with precision and care.</p>
                    <div className='pt-[40px] -translate-y-[40px] flex justify-center sm:justify-start'>
                        <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A] transition-one' onClick={() => { router.push(`/contact`) }}>
                            CONTACT US <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
                        </button>
                    </div>
                </div>
                <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-left">
                    <Image src="/assets/dhl.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
                </div>

            </section>
        </main>
    )
}

export default Products