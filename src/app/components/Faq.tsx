"use client"

import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Accordion from './Accordion';
import useSWR from 'swr';
import fetcher from '../helpers/fetcher';

const Faq = () => {
    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Faqs%22%5D+%7B%0AFaqQuestion%2C+FaqAnswer%2C+_id%0A%7D`
    const { data } = useSWR(url, fetcher)
    return (
        <section className='sm:mt-[100px] py-[100px] bg-[#EBF7EC]' id="FAQ">
            <div className='container mx-auto flex flex-col lg:flex-row items-center gap-[20px] sm:gap-[20px] lg:gap-[40px] xl:gap-[214px]'>
                <div className='w-[100%] px-[20px]' data-aos="fade-up">
                    <div>
                        <h1 className='capitalize text-center sm:text-left text-[48px] sm:text-[64px] xl:text-[72px] text-[#1E4A31] font-heading leading-normal pb-[15px]'>
                            frequently asked
                        </h1>
                        <h1 className='-translate-y-[30px] sm:-translate-y-[50px] capitalize text-center sm:text-left text-[48px] sm:text-[72px] text-[#1E4A31] font-heading leading-normal pb-[15px]'>
                            questions</h1>
                    </div>
                    <p className='-translate-y-[30px] font-body text-[16px] sm:text-[20px] leading-normal sm:-translate-y-[70px] text-[#696969] text-center sm:text-left'>Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
                </div>
                <div className='w-[100%] px-[20px]' data-aos="fade-up">
                    <div className="relative flex flex-col gap-y-[22px] transition">
                        {data?.result?.map((e: { _id: React.Key | null | undefined; FaqQuestion: string; FaqAnswer: any; }, id: any) => {
                            return (
                                <div key={e?._id}>
                                    <Accordion
                                        headingText={e?.FaqQuestion}
                                        expandedText={e?.FaqAnswer}
                                        expandIcon={
                                            <IoIosArrowDown
                                                fontSize={22}
                                                className=" text-[#424C55]"
                                            />
                                        }
                                        collapseIcon={
                                            <IoIosArrowUp
                                                fontSize={22}
                                                className=" text-[#424C55]"
                                            />
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq