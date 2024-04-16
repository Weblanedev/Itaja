"use client"
import Image from 'next/image'
import Link from 'next/link';
import useSWR from 'swr';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/pagination';
import urlFor from './helpers/displaySanityImages';
import fetcher from './helpers/fetcher';

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Products%22%5D+%7B%0A++ProductName%2C%0A++++_id%2C%0A++++ProductCoverImage%2C%0A++++ProductDataSheet%2C%0A++++ProductImage%2C%0A++%22ProductDataSheet%22%3A+ProductDataSheet.asset-%3Eurl%0A%7D`
  const { data } = useSWR(url, fetcher)
  const router = useRouter()
  const path = usePathname()


  useEffect(() => {
    let count: number = 0
    setInterval(() => {
      count += 1
      console.log(count)
      if (count % 4) { setShowPopup(true) } else { setShowPopup(false) }
    }, 5000)

  })

  return (
    <main className=''>
      <section className="text-center pb-[69px] pt-[198px] sm:pb-[98px] sm:pt-[196px] bg-[#F9F9F9]">
        <div className="container mx-auto">
          <h1 className="pb-[24px] text-[48px] font-heading leading-[47px] sm:text-[96px] sm:leading-[94px]" data-aos="fade-up">
            <span className="text-[#714E2D] ">Sustainably Grown,</span> <br />
            <span className="text-[#EE821F]">Globally Shipped.</span>
          </h1>
          <p className="font-body text-[#696969] text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[40%] mx-auto" data-aos="fade-down">Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
        </div>
      </section>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide className=''>
          <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222944/Rectangle_5901_c3uztc.png" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222393/Rectangle_5901_7_zmtv3q.webp" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222276/Rectangle_5901_10_hlxu1z.webp" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222619/Rectangle_5901_hwjpyv.webp" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <div className={`absolute bg-white w-[448px] top-[40%] right-0 z-[1] p-[30px] hidden ${showPopup ? "opacity-[1]" : "opacity-0"} sm:block transition-one`}>
          <h1 className='font-heading text-[#49D94F] text-[24px] leading-normal'>Did you know?</h1>
          <p className='font-body text-[#696969] text-[13px]'>Rooted in our dedication to value addition and sustainability, we{"'"}ve partnered with smallholder farmers in rural areas, offering them training in sustainable agriculture while overseeing our farms.</p>
        </div>
      </Swiper>

      <section className="flex flex-col sm:flex-row bg-[#EBF7EC]">
        <div className='2xl:container mx-auto flex flex-col lg:flex-row'>
          <div className="flex cursor-pointer gap-[30px] px-[28px] hover:bg-[#1E4A31] py-[30px] group" data-aos="zoom-in" onClick={() => { router.push("/Products") }}>
            <div>
              <svg xmlns="http://www.w3.org12000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none" >
                <path className='group-hover:fill-[#EBF7EC] fill-[#1E4A31]' d="M13.75 15.396C13.75 15.0562 13.8817 14.7303 14.1161 14.49C14.3505 14.2497 14.6685 14.1147 15 14.1147H25C25.3315 14.1147 25.6495 14.2497 25.8839 14.49C26.1183 14.7303 26.25 15.0562 26.25 15.396C26.25 15.7358 26.1183 16.0617 25.8839 16.302C25.6495 16.5423 25.3315 16.6772 25 16.6772H15C14.6685 16.6772 14.3505 16.5423 14.1161 16.302C13.8817 16.0617 13.75 15.7358 13.75 15.396ZM15 21.8022H25C25.3315 21.8022 25.6495 21.6673 25.8839 21.427C26.1183 21.1867 26.25 20.8608 26.25 20.521C26.25 20.1812 26.1183 19.8553 25.8839 19.615C25.6495 19.3747 25.3315 19.2397 25 19.2397H15C14.6685 19.2397 14.3505 19.3747 14.1161 19.615C13.8817 19.8553 13.75 20.1812 13.75 20.521C13.75 20.8608 13.8817 21.1867 14.1161 21.427C14.3505 21.6673 14.6685 21.8022 15 21.8022ZM20 24.3647H15C14.6685 24.3647 14.3505 24.4997 14.1161 24.74C13.8817 24.9803 13.75 25.3062 13.75 25.646C13.75 25.9858 13.8817 26.3117 14.1161 26.552C14.3505 26.7923 14.6685 26.9272 15 26.9272H20C20.3315 26.9272 20.6495 26.7923 20.8839 26.552C21.1183 26.3117 21.25 25.9858 21.25 25.646C21.25 25.3062 21.1183 24.9803 20.8839 24.74C20.6495 24.4997 20.3315 24.3647 20 24.3647ZM35 7.7085V25.1159C35.001 25.4525 34.9368 25.786 34.811 26.097C34.6852 26.4079 34.5003 26.6902 34.2672 26.9272L26.25 35.1449C26.0187 35.3838 25.7434 35.5733 25.44 35.7023C25.1366 35.8312 24.8112 35.8971 24.4828 35.896H7.5C6.83696 35.896 6.20107 35.626 5.73223 35.1455C5.26339 34.6649 5 34.0131 5 33.3335V7.7085C5 7.02888 5.26339 6.3771 5.73223 5.89653C6.20107 5.41597 6.83696 5.146 7.5 5.146H32.5C33.163 5.146 33.7989 5.41597 34.2678 5.89653C34.7366 6.3771 35 7.02888 35 7.7085ZM7.5 33.3335H23.75V25.646C23.75 25.3062 23.8817 24.9803 24.1161 24.74C24.3505 24.4997 24.6685 24.3647 25 24.3647H32.5V7.7085H7.5V33.3335ZM26.25 26.9272V31.5237L30.7328 26.9272H26.25Z" fill="#EBF7EC" />
              </svg>
            </div>
            <div>
              <h1 className="text-[#1E4A31] group-hover:text-[#49D94F] font-heading text-[24px] font-[400] leading-normal">REQUEST A QUOTE</h1>
              <p className="text-[#696969] group-hover:text-white font-body text-[12px] font-[400] leading-normal">Ready to grow together? Contact us, and let{"'"}s kickstart your agricultural journey with Itaja Innovations Limited Ltd.</p>
            </div>
          </div>
          <div className="flex cursor-pointer gap-[30px] px-[28px] hover:bg-[#1E4A31] py-[30px] group" data-aos="zoom-in" onClick={() => { router.push(`${path}#Contact`) }}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
                <path className='group-hover:fill-[#EBF7EC] fill-[#1E4A31]' d="M13.75 15.396C13.75 15.0562 13.8817 14.7303 14.1161 14.49C14.3505 14.2497 14.6685 14.1147 15 14.1147H25C25.3315 14.1147 25.6495 14.2497 25.8839 14.49C26.1183 14.7303 26.25 15.0562 26.25 15.396C26.25 15.7358 26.1183 16.0617 25.8839 16.302C25.6495 16.5423 25.3315 16.6772 25 16.6772H15C14.6685 16.6772 14.3505 16.5423 14.1161 16.302C13.8817 16.0617 13.75 15.7358 13.75 15.396ZM15 21.8022H25C25.3315 21.8022 25.6495 21.6673 25.8839 21.427C26.1183 21.1867 26.25 20.8608 26.25 20.521C26.25 20.1812 26.1183 19.8553 25.8839 19.615C25.6495 19.3747 25.3315 19.2397 25 19.2397H15C14.6685 19.2397 14.3505 19.3747 14.1161 19.615C13.8817 19.8553 13.75 20.1812 13.75 20.521C13.75 20.8608 13.8817 21.1867 14.1161 21.427C14.3505 21.6673 14.6685 21.8022 15 21.8022ZM20 24.3647H15C14.6685 24.3647 14.3505 24.4997 14.1161 24.74C13.8817 24.9803 13.75 25.3062 13.75 25.646C13.75 25.9858 13.8817 26.3117 14.1161 26.552C14.3505 26.7923 14.6685 26.9272 15 26.9272H20C20.3315 26.9272 20.6495 26.7923 20.8839 26.552C21.1183 26.3117 21.25 25.9858 21.25 25.646C21.25 25.3062 21.1183 24.9803 20.8839 24.74C20.6495 24.4997 20.3315 24.3647 20 24.3647ZM35 7.7085V25.1159C35.001 25.4525 34.9368 25.786 34.811 26.097C34.6852 26.4079 34.5003 26.6902 34.2672 26.9272L26.25 35.1449C26.0187 35.3838 25.7434 35.5733 25.44 35.7023C25.1366 35.8312 24.8112 35.8971 24.4828 35.896H7.5C6.83696 35.896 6.20107 35.626 5.73223 35.1455C5.26339 34.6649 5 34.0131 5 33.3335V7.7085C5 7.02888 5.26339 6.3771 5.73223 5.89653C6.20107 5.41597 6.83696 5.146 7.5 5.146H32.5C33.163 5.146 33.7989 5.41597 34.2678 5.89653C34.7366 6.3771 35 7.02888 35 7.7085ZM7.5 33.3335H23.75V25.646C23.75 25.3062 23.8817 24.9803 24.1161 24.74C24.3505 24.4997 24.6685 24.3647 25 24.3647H32.5V7.7085H7.5V33.3335ZM26.25 26.9272V31.5237L30.7328 26.9272H26.25Z" fill="#1E4A31" />
              </svg>
            </div>
            <div>
              <h1 className="text-[#1E4A31] group-hover:text-[#49D94F] font-heading text-[24px] font-[400] leading-normal">Contact Us</h1>
              <p className="text-[#696969] group-hover:text-white font-body text-[12px] font-[400] leading-normal">
                Reach out to Itaja Innovations Limited today, Let{"'"}s chat about sustainable farming, partnerships, and more – we{"'"}re here to help!</p>
            </div>
          </div>
          <div className="flex cursor-pointer gap-[30px] px-[28px] hover:bg-[#1E4A31] py-[30px] group" data-aos="zoom-in" onClick={() => { router.push(`${path}#Contact`) }}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
                <path className='group-hover:fill-[#EBF7EC] fill-[#1E4A31]' d="M13.75 15.396C13.75 15.0562 13.8817 14.7303 14.1161 14.49C14.3505 14.2497 14.6685 14.1147 15 14.1147H25C25.3315 14.1147 25.6495 14.2497 25.8839 14.49C26.1183 14.7303 26.25 15.0562 26.25 15.396C26.25 15.7358 26.1183 16.0617 25.8839 16.302C25.6495 16.5423 25.3315 16.6772 25 16.6772H15C14.6685 16.6772 14.3505 16.5423 14.1161 16.302C13.8817 16.0617 13.75 15.7358 13.75 15.396ZM15 21.8022H25C25.3315 21.8022 25.6495 21.6673 25.8839 21.427C26.1183 21.1867 26.25 20.8608 26.25 20.521C26.25 20.1812 26.1183 19.8553 25.8839 19.615C25.6495 19.3747 25.3315 19.2397 25 19.2397H15C14.6685 19.2397 14.3505 19.3747 14.1161 19.615C13.8817 19.8553 13.75 20.1812 13.75 20.521C13.75 20.8608 13.8817 21.1867 14.1161 21.427C14.3505 21.6673 14.6685 21.8022 15 21.8022ZM20 24.3647H15C14.6685 24.3647 14.3505 24.4997 14.1161 24.74C13.8817 24.9803 13.75 25.3062 13.75 25.646C13.75 25.9858 13.8817 26.3117 14.1161 26.552C14.3505 26.7923 14.6685 26.9272 15 26.9272H20C20.3315 26.9272 20.6495 26.7923 20.8839 26.552C21.1183 26.3117 21.25 25.9858 21.25 25.646C21.25 25.3062 21.1183 24.9803 20.8839 24.74C20.6495 24.4997 20.3315 24.3647 20 24.3647ZM35 7.7085V25.1159C35.001 25.4525 34.9368 25.786 34.811 26.097C34.6852 26.4079 34.5003 26.6902 34.2672 26.9272L26.25 35.1449C26.0187 35.3838 25.7434 35.5733 25.44 35.7023C25.1366 35.8312 24.8112 35.8971 24.4828 35.896H7.5C6.83696 35.896 6.20107 35.626 5.73223 35.1455C5.26339 34.6649 5 34.0131 5 33.3335V7.7085C5 7.02888 5.26339 6.3771 5.73223 5.89653C6.20107 5.41597 6.83696 5.146 7.5 5.146H32.5C33.163 5.146 33.7989 5.41597 34.2678 5.89653C34.7366 6.3771 35 7.02888 35 7.7085ZM7.5 33.3335H23.75V25.646C23.75 25.3062 23.8817 24.9803 24.1161 24.74C24.3505 24.4997 24.6685 24.3647 25 24.3647H32.5V7.7085H7.5V33.3335ZM26.25 26.9272V31.5237L30.7328 26.9272H26.25Z" fill="#1E4A31" />
              </svg>
            </div>
            <div>
              <h1 className="text-[#1E4A31] group-hover:text-[#49D94F] font-heading text-[24px] font-[400] leading-normal">MARKET INFORMATION</h1>
              <p className="text-[#696969] group-hover:text-white font-body text-[12px] font-[400] leading-normal">Stay updated on eco-friendly farming and sustainable growth practices through our market insights.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="mt-[100px] container mx-auto sm:px-[20px] xl:px-0">
        <h1 className="text-[40px] sm:text-[64px] font-heading leading-[47px] xl:text-[80px] sm:leading-normal text-center" data-aos="fade-up">
          <span className="text-[#714E2D]">OUR</span>{" "}
          <span className="text-[#EE821F]">PRODUCTS</span>
        </h1>
        <p className="text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[40%] mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
        <div className='pt-[100px] hidden lg:flex'>
          <div className='flex gap-[40px] xl:gap-[75px]'>
            {
              data?.result?.filter((e: any, id: number) => id < 3).map((e: any, id: React.Key | null | undefined) => {
                return (
                  <div key={id} className='cursor-pointer relative group hover:scale-[1.03] transition-one'>
                    <Image src={urlFor(e.ProductImage.asset._ref).url()} width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover group-hover:scale-[1.03] shadow-md" data-aos="fade-right" />
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
          {data?.result?.filter((e: any, id: number) => id < 3).map((e: any, id: React.Key | null | undefined) => {
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
        <div className='pt-[60px] sm:pt-[110px] flex justify-center' data-aos="zoom-in">
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A] transition-one' onClick={() => { router.push("/Products") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>

      <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col lg:flex-row gap-[40px] xl:gap-[100px] items-center overflow-hidden'>
        <div className='w-[100%] px-[20px] sm:pl-[20px] xl:pl-[80px] 2xl:pl-[127px]' data-aos="fade-right">
          <h1 className='text-[40px]  text-center lg:text-start sm:text-[64px] lg:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>WHO </span><span className='text-[#714E2D]'>ARE WE?</span></h1>
          <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal text-justify'>
          Itaja Innovations Limited is a distinguished Indigenous Nigerian Agro-Allied Company cultivated from a wealth of Agriculture, Freight, and Logistics expertise. Our journey encompasses various agricultural domains, including Poultry Farming, Aquaculture, Piggeries, and Vegetable Farming. With a seasoned management team boasting over 30 years of hands-on experience, we bring a unique blend of proficiency to the dynamic agro-allied landscape.
            We are more than just a company; we are passionate stewards of sustainable agricultural practices, unwavering champions of innovation, and dedicated contributors to Nigeria{"'"}s economic development.
            At Itaja Innovations Limited, our identity is forged by a steadfast commitment to excellence, a customer-centric ethos, and a visionary pursuit of leading Nigeria{"'"}s agricultural value chain. Join us on this exciting journey of growth and sustainability!
          </p>
        </div>
        <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-left">
          <Image src="/assets/whoarewe.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
        </div>
        <div className='pt-[60px] flex sm:hidden justify-center '>
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A]' onClick={() => { router.push("/About") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>

      <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col lg:flex-row-reverse gap-[40px] xl:gap-[100px] items-center overflow-hidden'>
        <div className='w-[100%] px-[20px] sm:pr-[20px] xl:pr-[80px] 2xl:pr-[127px]' data-aos="fade-left">
          <h1 className='text-[40px]  text-center lg:text-start sm:text-[64px] xl:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>WHY </span><span className='text-[#714E2D] uppercase'>Itaja Innovations </span></h1>
          <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal pt-[10px] text-justify'>
            We are a prominent Indigenous Nigerian Agro-Allied Company with over 30 years of hands-on experience in Agriculture, Freight, and Logistics, is a leader in Poultry Farming, Aquaculture, Piggeries, and Vegetable Farming. Distinguished by its commitment to fairtrade practices, sustainability, and innovation, the company aims to be a trailblazer in Nigeria{"'"}s agricultural value chain. Beyond being a company, we see ourselves as stewards of sustainable agricultural practices, strategically focusing on excellence, customer satisfaction, and environmental stewardship. Through a diversified portfolio and a vision to reshape the agricultural landscape, Itaja Innovations Limited strives to provide high-quality products and services that positively impact the communities it serves, making it the ideal partner for those dedicated to excellence and positive change in Nigeria{"'"}s agro-allied industry.
          </p>
        </div>
        <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-right">
          <Image src="/assets/whybonbridge.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
        </div>
        <div className='pt-[60px] flex sm:hidden justify-center '>
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A] transition-one' onClick={() => { router.push("/About") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>


      <section className="mt-[100px] container mx-auto">
        <h1 className="text-[40px] font-heading leading-[47px] sm:text-[64px] lg:text-[80px] sm:leading-normal text-center" data-aos="fade-up">
          <span className="text-[#714E2D]">WHAT OUR</span>{" "}
          <span className="text-[#EE821F]">CLIENTS SAY</span>
        </h1>
        <p className="text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[40%] mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">Discover the stories that define us. Explore what our valued clients say about their Itaja Innovations experience. Share your review and join our growing community of satisfied customers.
        </p>
        <div className='pt-[50px] sm:pt-[100px] block lg:hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={35}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper relative"
          >
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Emeka Nwosu</h1>
                  <p className='text-[#696969] text-[19px]'>I am incredibly pleased with my experience with Itaja Innovations Limited, the dedication and passion that goes into every aspect of their operation.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Adeoluwa Balogun</h1>
                  <p className='text-[#696969] text-[19px]'>Itaja Innovations Limited is a gem in the world of farming. The care and attention they put into their operation are truly remarkable. From the lush fields to the impeccable packaging, every detail is considered.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Ngozi Adeyemi</h1>
                  <p className='text-[#696969] text-[19px]'>Working with Itaja Innovations Limited has been a delight. Their team{"'"}s dedication to providing top-notch products and services is evident in every interaction. I highly recommend Itaja Innovations Limited to anyone who values excellence and integrity in agriculture.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Funmilayo Olumide,</h1>
                  <p className='text-[#696969] text-[19px]'>I can{"'"}t express how impressed I am with Itaja Innovations Limited. Their dedication to providing the best possible products while maintaining a focus on environmental sustainability is truly admirable.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Chijioke Eze</h1>
                  <p className='text-[#696969] text-[19px]'>The flavors of their produce are a testament to the care and passion that go into every step of their farming process. Itaja Innovations Limited has set a new standard for excellence in agriculture.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='pt-[50px] sm:pt-[100px] hidden lg:block pb-[30px]'>
          <Swiper
            slidesPerView={3}
            spaceBetween={35}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper relative"
          >
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Emeka Nwosu</h1>
                  <p className='text-[#696969] text-[19px]'>I am incredibly pleased with my experience with Itaja Innovations Limited, the dedication and passion that goes into every aspect of their operation.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Adeoluwa Balogun</h1>
                  <p className='text-[#696969] text-[19px]'>Itaja Innovations Limited is a gem in the world of farming. The care and attention they put into their operation are truly remarkable. From the lush fields to the impeccable packaging, every detail is considered.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Ngozi Adeyemi</h1>
                  <p className='text-[#696969] text-[19px]'>Working with Itaja Innovations Limited has been a delight. Their team{"'"}s dedication to providing top-notch products and services is evident in every interaction. I highly recommend Itaja Innovations Limited to anyone who values excellence and integrity in agriculture.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Funmilayo Olumide,</h1>
                  <p className='text-[#696969] text-[19px]'>I can{"'"}t express how impressed I am with Itaja Innovations Limited. Their dedication to providing the best possible products while maintaining a focus on environmental sustainability is truly admirable.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex items-center px-[30px] py-[56px] gap-[20px]'>
                <div className='w-[100%]'>
                  <Image src="/assets/clientsSay.png" width={100} height={100} alt="" objectFit='contain' className="w-[100px] rounded-[50%] h-[100pxpx] object-cover" />
                </div>
                <div>
                  <h1 className='text-[#49d94F] font-body text-[24px]'>Chijioke Eze</h1>
                  <p className='text-[#696969] text-[19px]'>The flavors of their produce are a testament to the care and passion that go into every step of their farming process. Itaja Innovations Limited has set a new standard for excellence in agriculture.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </section>
    </main >
  )
}
