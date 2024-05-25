import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LearnMoreIMG from "../../assets/learn.png"
import BtnOutline from '../BtnOutline/BtnOutline'
import Aos from 'aos'
const LearnMore = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
    const {t} = useTranslation()
    const title = t("learn.title")
    const title2 = t("learn.title2")
    const desc = t("learn.desc")
    const btn = t("learn.btn")
  return (
    <section className='w-[100%] h-[100vh] relative flex flex-col justify-center'>
      <img src={LearnMoreIMG} alt="learnMore" className='absolute w-[100%] h-[100%] object-cover'/>
      <div className='relative z-10 text-white max-w-[350px] flex flex-col gap-[30px] items-start sm:ml-[15%] p-[20px]'>
        <h1 className='text-[25px] mb-[50px]'>{title}{title2}</h1>
        <h1 data-aos="fade-up" className='text-[25px] sm:text-[40px]'>{title} <br/>{title2} </h1>
        <p data-aos="fade-up" className='text-[14px] font-serif mb-[50px]'>{desc}</p>
        <BtnOutline value={btn}/>
      </div>
    </section>
  )
}

export default LearnMore
