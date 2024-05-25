import React from "react";
import { useTranslation } from "react-i18next";
import Idea1 from "../../assets/idea1.jpg";
import Idea2 from "../../assets/idea2.jpg";
import Idea3 from "../../assets/idea3.jpg";
import Idea4 from "../../assets/idea4.jpg";
import Idea5 from "../../assets/idea5.jpg";
import Idea6 from "../../assets/idea6.jpg";
import Idea7 from "../../assets/idea7.jpg";
import Idea8 from "../../assets/idea8.jpg";
const Ideas = () => {
  const { t } = useTranslation();
  const title = t("ideas");
  const images = [Idea1, Idea2, Idea3, Idea4, Idea5, Idea6, Idea7, Idea8];
  return (
    <section id="advantages" className="w-[100%] flex flex-col py-[30px] items-center gap-[20px]">
      <h1 className="text-[25px]">{title}</h1>
      <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            images?.map((item,index)=> {
                return <img key={index} src={item} alt={index} className="w-[100%] h-[100%] object-cover"/>
            })
        }
      </div>
    </section>
  );
};

export default Ideas;
