import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import { changeLanguage } from "../../plugins/changeLang";
import { FaBars } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { t } = useTranslation();
  const data = [
    { id: "#information", text: t("navbar.item1") },
    { id: "#aboutUs", text: t("navbar.item2") },
    { id: "#enterprises", text: t("navbar.item3") },
  ];
  const data2 = [
    { id: "#advantages", text: t("navbar.item4") },
    { id: "#news", text: t("navbar.item5") },
    { id: "#communication", text: t("navbar.item6") },
  ];
  const languages = [
    { id: "en", lang: "EN" },
    { id: "ru", lang: "RU" },
    { id: "uz", lang: "UZ" },
  ];
  const [activeLang,setActiveLang] = useState("EN")
  useEffect(()=> {
    let lang = sessionStorage.getItem("lang")
    if (lang) {
        setActiveLang(lang)
    }else {
        setActiveLang("EN")
    }
  },[])
  const changeLang = (id, lang) => {
    changeLanguage(id)
    setActiveLang(lang)
    sessionStorage.setItem("lang", lang)
  }
  const [sideBar, setSideBar] = useState(false)
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="w-[100%] lg:bg-[#fce8bd] flex justify-center items-center p-[10px] sm:p-[20px] bg-gray-800 lg:p-[10px] fixed z-30">
      <ul className="flex w-[100%] justify-between sm:px-[20px] lg:px-0 lg:justify-center gap-[20px] sm:gap-[50px] items-center text-[16px] font-[500] text-black">   
        <li className="flex justify-center items-center lg:hidden w-[35px] h-[35px] bg-gray-600 rounded-full text-white cursor-pointer" onClick={()=>setSideBar(true)}><FaBars/></li>
        {data?.map((item, index) => {
          return (
            <li key={index} className="hidden lg:block whitespace-nowrap">
              <a href={item?.id}>{item?.text}</a>
            </li>
          );
        })}
        <li>
          <img src={Logo} alt="logo" className="w-[120px] h-[70px] lg:hidden" />
          <img src={Logo2} alt="logo" className="w-[120px] h-[70px] hidden lg:block" />
        </li>
        {data2?.map((item, index) => {
          return (
            <li key={index} className="hidden lg:block whitespace-nowrap">
              <a href={item?.id}>{item?.text}</a>
            </li>
          );
        })}
        <li className="flex justify-center items-center lg:hidden  w-[35px] h-[35px] bg-gray-600 rounded-full text-white cursor-pointer"><FaPhone/></li>
        <li className="relative lang cursor-pointer hidden lg:block">
            <p>{activeLang}</p>
            <div className="absolute bg-zinc-900 text-white p-[15px] rounded-lg top-[50px] transition-all left-[-10px] opacity-0">
                {languages?.map((item,index)=> {
                    return <p key={index} onClick={()=>changeLang(item?.id, item?.lang)}>{item?.lang}</p>
                })}
            </div>
        </li>
      </ul>
      <aside className={`${sideBar ? "left-0" : "left-[-300px]"} flex items-start justify-start fixed w-[300px] top-0 transition-all shadow-md h-[100vh] bg-[#fce8bd] p-[40px]`}>
        <button className="p-[10px] rounded-full bg-[#f6dfae] absolute top-[20px] right-[20px]" onClick={()=>setSideBar(false)}>
        <IoClose size={24}/>
        </button>
        <ul className="w-[100%] flex flex-col gap-[10px] mt-[35px]">
        {data?.map((item, index) => {
          return (
            <li key={index} className="whitespace-nowrap">
              <a href={item?.id}>{item?.text}</a>
            </li>
          );
        })}
        {data2?.map((item, index) => {
          return (
            <li key={index} className="whitespace-nowrap">
              <a href={item?.id}>{item?.text}</a>
            </li>
          );
        })}
        <li className="text-[18px] font-[500] flex gap-[15px]">
          <button onClick={()=>changeLanguage("en")}>EN</button>
          <button onClick={()=>changeLanguage("ru")}>RU</button>
          <button onClick={()=>changeLanguage("uz")}>UZ</button>
        </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
