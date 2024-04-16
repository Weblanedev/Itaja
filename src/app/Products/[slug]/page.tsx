"use client"

import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import fetcher from '@/app/helpers/fetcher'
import useSWR from 'swr'
import urlFor from '@/app/helpers/displaySanityImages'

const SingleProductPage = (query: { params: { slug: any } }) => {
    const ProductId = query?.params?.slug;
    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Products%22%5D+%7B%0A++ProductUseSubText%2C%0A++++ProductSources%2C%0A++++ProductUses%2C%0A++++ProductName%2C%0A++++_id%2C%0A++++ProductIntro%2C%0A++++ProductDescription%2C%0A++++ProductCoverImage%2C%0A++++ProductDataSheet%2C%0A++++ProductImage%2C%0A++%22ProductDataSheet%22%3A+ProductDataSheet.asset-%3Eurl%0A%7D`
    const { data } = useSWR(url, fetcher)
    return (
        <div className='pb-[69px] pt-[100px] sm:pb-[98px] sm:pt-[110px]'>
            {
                data?.result?.filter((e: { _id: any }, id: any) => e._id === ProductId).map((e: any, id: React.Key | null | undefined) => {
                    return (
                        <div key={id}>
                            <div className='relative'>
                                <Image src={urlFor(e?.ProductCoverImage.asset._ref).url()} width={1500} height={500} alt={e?.ProductName} objectFit='contain' className="w-[100%] h-[600px] 2xl:h-[650px] object-cover  shadow-md brightness-75" />
                                <div className='text-white absolute z-[1] top-[184px] left-[50%] -translate-x-[50%] w-[100%] flex justify-center text-center'>
                                    <div className=''>
                                        <h1 className='text-[48px] sm:text-[96px] font-heading leading-normal'>{e?.ProductName}</h1>
                                        <p className='text-[16px] sm:text-[20px] font-body leading-normal w-[60%] mx-auto'>{e?.ProductIntro}</p>
                                        <a href={e?.ProductDataSheet} target="_blank" download={e?.ProductName}>
                                            <button className='px-[34px] mt-[40px] sm:px-[59px] rounded-[5px] py-[21px] w-[238px] sm:w-[490px] text-white bg-[#49D94F] text-[16px] sm:text-[24px] font-[700] flex justify-center font-body mx-auto'>DOWNLOAD DATASHEET</button>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col sm:flex-row gap-[40px] sm:gap-[100px] items-center overflow-hidden container mx-auto'>
                                <div className='w-[100%] px-[20px]' data-aos="fade-right">
                                    <h1 className='text-[40px]  text-center sm:text-start sm:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>WHAT IS </span><span className='text-[#714E2D]'> {e?.ProductName}?</span></h1>
                                    <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal text-justify'>{e?.ProductDescription}
                                    </p>
                                    {/* <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal pt-[10px] text-justify'>We are not merely a company; we are stewards of sustainable agricultural practices, champions of innovation, and contributors to the economic development of Nigeria. Bonbridge Farms Ltd is defined by a commitment to excellence, customer satisfaction, and a vision to be at the forefront of Nigeria{"'"}s agricultural value chain.</p> */}
                                </div>
                                <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-left">
                                    <Image src={urlFor(e?.ProductImage.asset._ref).url()} width={1500} height={500} alt={e?.ProductName} objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
                                </div>

                            </section>

                            <div className='bg-white py-[50px] sm:py-[100px] text-[#696969] mt-[50px] sm:mt-[100px] overflow-hidden'>
                                <div className='container mx-auto px-[20px]'>
                                    <div className='flex flex-col sm:flex-row justify-between gap-[0px] sm:gap-[205px] items-center'>
                                        <div className='text-[48px] sm:text-[64px] font-heading leading-normal w-[100%]' data-aos="fade-right">
                                            <h1 className='text-[#EE821F]'>USES OF </h1>
                                            <h1 className='text-[#714E2D] -translate-y-[20px] sm:-translate-y-[35px]'> {e?.ProductName}</h1></div>
                                        <p className='font-body text-[16px] leading-normal w-[100%] text-justify' data-aos="fade-left">{e?.ProductUseSubText}
                                        </p>
                                    </div>
                                    <div className='flex flex-col sm:flex-row gap-[53px] py-[103px]' data-aos="fade-up">
                                        {e?.ProductUses.map((e: any, id: any) => {
                                            return (
                                                <div key={id}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                                        <path d={e?.UseHeaderSvgPath} fill="#EE821F" />
                                                    </svg>
                                                    <h1 className='text-[20px] font-body font-[500] py-[15px]'>{e?.UseHeaderText}</h1>
                                                    <p className='text-[16px] font-body'>{e?.UseDescriptionText}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>

                            <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col sm:flex-row-reverse gap-[40px] sm:gap-[100px] items-center overflow-hidden'>
                                <div className='w-[100%] px-[20px] sm:pr-[80px] 2xl:pr-[127px]' data-aos="fade-left">
                                    <h1 className='text-[40px]  text-center sm:text-start sm:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>SOURCES OF</span><span className='text-[#714E2D] uppercase'> {e?.ProductName} </span></h1>

                                    <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal pt-[10px] text-justify'>{e?.ProductSources}</p>
                                </div>
                                <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-right">
                                    <Image src="/assets/worldmap.png" width={1500} height={500} alt="worldmap" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleProductPage;