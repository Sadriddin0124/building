import React from 'react'
import { useTranslation } from 'react-i18next'
import Project1 from "../../assets/project1.webp"
import Project2 from "../../assets/project2.webp"
import Project3 from "../../assets/project3.webp"
import Project4 from "../../assets/project4.webp"
import Project5 from "../../assets/project5.webp"
import Project6 from "../../assets/project6.webp"
const Projects = () => {
    const {t} = useTranslation()
    const title = t("projects.title")
    const data = [
        {title: t("projects.title1"), desc: t("projects.desc1"), img: Project1},
        {title: t("projects.title2"), desc: t("projects.desc2"), img: Project2},
        {title: t("projects.title3"), desc: t("projects.desc3"), img: Project3},
        {title: t("projects.title4"), desc: t("projects.desc4"), img: Project4},
        {title: t("projects.title5"), desc: t("projects.desc5"), img: Project5},
        {title: t("projects.title6"), desc: t("projects.desc6"), img: Project6}
    ]
  return (
    <section id='aboutUs' className='w-[100%] flex flex-col items-center justify-center py-[40px] px-[20px] md:px-[40px]'>
      <h1 className='w-[100%] lg:w-[80%] text-left text-[25px]'>{title}</h1>
      <div className='w-[100%] lg:w-[80%] grid-cols-1 grid sm:grid-cols-2 gap-[20px] md:gap-[40px]'>
        {
            data?.map((item,index)=> {
                return <div key={index} className='relative w-[100%] h-[320px] overflow-hidden'>
                    <img src={item?.img} alt={item?.title} className='absolute w-[100%] h-[100%] object-cover brightness-50 z-0'/>
                    <div className='absolute z-20 p-[20px] flex flex-col gap-[30px] text-white w-[100%] h-[100%] pt-[250px] hover:pt-[20px] transition-[.5s] cursor-pointer bg-gradient-to-b from-transparent to-[#000000a8]'>
                        <h1 className='text-[25px] font-[500]'>{item?.title}</h1>
                        <p className='text-[18px] font-[400]'>{item?.desc}</p>
                    </div>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default Projects
