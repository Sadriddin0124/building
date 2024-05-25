import React from "react";
import Logo from "../../assets/logo2.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const subscribe = t("footer.subscribe")
  const company = t("footer.company")
  const communication = t("footer.communication")
  const phone1 = t("footer.phone1")
  const phone2 = t("footer.phone2")
  const links = [{link: t("footer.link1"), id: "#enterprises"},{link: t("footer.link2"), id: "#aboutUs"},{link: t("footer.link3"), id: "#news"},{link: t("footer.link4"), id: "#projects"}]
  return (
    <footer className="bg-[#fce8bd] py-[60px] px-[20px] sm:px-[60px] gap-[20px] flex-wrap flex w-[100%] justify-around items-start">
      <div className="flex flex-col gap-[20px]">
        <img src={Logo} alt="logo" className="w-[120px] h-[70px] object-cover"/>
        <p className="text-[18px]">{subscribe}</p>
        <div className="flex gap-[20px]">
            <Link className="w-[60px] h-[60px] bg-black flex justify-center items-center text-white rounded-full border border-black transition-all hover:bg-transparent hover:text-black" to="instagram"><FaInstagram/></Link>
            <Link className="w-[60px] h-[60px] bg-black flex justify-center items-center text-white rounded-full border border-black transition-all hover:bg-transparent hover:text-black" to="telegram"><FaFacebook/></Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[20px]">{company}</h1>
        {
            links?.map((item,index)=> {
                return <Link to={item?.id} className="text-gray-600 hover_link" key={index}>{item?.link}</Link>
            })
        }
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <h1 className="text-[20px]">{communication}</h1>
        <p className="text-gray-600 hover_link">{phone1}</p>
        <p className="text-gray-600 hover_link">{phone2}</p>
      </div>
    </footer>
  );
};

export default Footer;
