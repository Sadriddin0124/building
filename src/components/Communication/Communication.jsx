import React, { useEffect } from "react";
import CommunicationImage from "../../assets/communication.png";
import { useTranslation } from "react-i18next";
import Aos from "aos";
const Communication = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  const { t } = useTranslation();
  const title = t("communication.title");
  const name = t("communication.name");
  const number = t("communication.number");
  const message = t("communication.message");
  const btn = t("communication.btn");
  return (
    <section id="communication" className="px-[20px] md:px-[120px] py-[120px] w-[100%] min-h-[100vh] bg-zinc-900 border-t ">
      <form className="w-[100%] h-[100%] relative flex flex-col py-[70px] px-[10px] md:px-[70px] rounded-2xl overflow-hidden">
        <img
          src={CommunicationImage}
          alt="Communication"
          className="w-[100%] h-[100%] absolute z-0 top-0 left-0"
        />
        <div data-aos="fade-up" className="relative z-20 flex flex-col gap-[20px] items-start max-w-[500px]">
          <label className="text-[20px] sm:text-[30px] mb-[20px] text-white max-w-[330px] w-[100%]">
            {title}
          </label>
          <input className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%]" type="text" placeholder={name} />
          <input className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%]" type="text" placeholder={number} />
          <textarea className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%] resize-none font-mono" rows={7} placeholder={message}></textarea>
          <button className="px-[20px] py-[8px] border w-[240px] rounded-full text-white bg-[#ffffff57] transition-all hover:bg-transparent">{btn}</button>
        </div>
      </form>
    </section>
  );
};

export default Communication;
