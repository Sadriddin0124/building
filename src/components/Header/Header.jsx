import React from "react";
import HeaderImg from "../../assets/header.jpeg";
import { useTranslation } from "react-i18next";
import BtnOutline from "../BtnOutline/BtnOutline";
const Header = () => {
  const { t } = useTranslation();
  const data = {
    title: t("header.title"),
    title2: t("header.title2"),
    subtitle: t("header.subtitle"),
    btn1: t("header.btn1"),
    btn2: t("header.btn2"),
  }
  return (
    <header id="information" className="w-[100%] h-[90vh] relative flex items-center justify-start">
      <img
        src={HeaderImg}
        alt="header"
        className="absolute w-[100%] h-[100%] brightness-75 z-0 object-cover"
      />
      <div className="relative z-10 p-[20px] md:ml-[15%] flex flex-col w-[100%] items-center sm:items-start">
        <h1 className="text-[25px] md:text-[5.35rem] font-[600] text-white ">{data?.title}</h1>
        <h1 className="text-[25px] md:text-[5.35rem] font-[600] text-white ">{data?.title2}</h1>
        <p className="mt-[20px] mb-[40px] text-white text-[20px] font-[500]">{data?.subtitle}</p>
        <div className="flex gap-[20px] flex-wrap justify-center">
            <BtnOutline value={data?.btn1}/>
            <BtnOutline value={data?.btn2}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
