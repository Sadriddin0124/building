import React from 'react'
import { useTranslation } from 'react-i18next'
import Dream1 from "../../assets/dream1.jpg"
import Dream2 from "../../assets/dream2.jpg"
import Dream3 from "../../assets/dream3.jpg"
import Dream4 from "../../assets/dream4.jpg"
import Dream5 from "../../assets/dream5.jpg"
import Dream6 from "../../assets/dream6.jpg"
const Dream = () => {
    const {t} = useTranslation()
    const title = t("dream")
    const images = [Dream1,Dream2,Dream3,Dream4,Dream5,Dream6]
  return (
    <section className='w-[100%] flex flex-col items-center py-[20px]'>
      <h1 className='text-[25px] p-[30px]'>{title}</h1>
      <div className='w-[100%] grid grid-cols-2 md:grid-cols-3'>
        {
            images?.map((item,index)=> <img key={index} src={item} alt={item}className='w-[100%] h-[350px] object-cover'/>)
        }
      </div>
    </section>
  )
}

export default Dream
