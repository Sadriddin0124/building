import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";
import Service4 from "../../assets/service4.png";
import AOS from 'aos';
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  const { t } = useTranslation();
  const title = t("services.title");
  const data = [
    { desc: t("services.desc1"), img: Service1, aos: "fade-right" },
    { desc: t("services.desc2"), img: Service2, aos: "fade-left" },
    { desc: t("services.desc3"), img: Service3, aos: "fade-up" },
    { desc: t("services.desc4"), img: Service4, aos: "fade-up" },
  ];
  return (
    <section id="enterprises" className="w-[100%] sm:px-[40px] px-[20px] py-[40px] bg-[#fce8bd] flex flex-col items-center justify-center gap-[30px]">
      <h1 className="text-[30px]">{title}</h1>
      <div className="flex flex-col lg:flex-row flex-wrap w-[100%] justify-center xl:w-[80%] gap-[30px]">
        {data?.map((item, index) => {
          return (
            <div
            data-aos={item?.aos}
              key={index}
              className={`${
                index === 1 ? "lg:w-[36%] w-[100%]" : index === 2 ? "lg:w-[36%] w-[100%]" : "lg:w-[46%] w-[100%]"
              } bg-slate-800 rounded-2xl flex justify-between items-center overflow-hidden`}
            >
              <p className="text-[14px] sm:text-[20px] text-white p-[20px]">{item?.desc}</p>
              <img
                src={item?.img}
                alt={item?.desc}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
