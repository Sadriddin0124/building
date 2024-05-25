import React from 'react'
import CompanyIMG from "../../assets/company.png"
import { useTranslation } from 'react-i18next'
const Company = () => {
    const {t} = useTranslation()
    const title = t("company.title")
    const data = [
        {num: 120, text: t("company.employees")},
        {num: 43, text: t("company.objects")},
        {num: 250, text: t("company.equip")},
        {num: 2, text: t("company.market")},
    ]
  return (
    <section className='w-[100%] min-h-[60vh] relative flex flex-col items-start justify-center gap-[50px]'>
      <img src={CompanyIMG} alt="company" className='w-[100%] h-[100%] object-cover absolute z-0'/>
      <h1 className='relative z-10 ml-[15%] mt-[20px] text-[25px] font-[400] text-white'>{title}</h1>
      <div className='relative z-10 ml-[15%] flex text-white gap-[50px] flex-wrap mb-[20px]'>
        {
            data?.map((item,index)=> {
                return <div key={index} className='flex flex-col'>
                    <h1 className='text-[45px] font-[700]'>{item?.num} + </h1>
                    <p className='text-[20px] font-serif'>{item?.text}</p>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default Company
