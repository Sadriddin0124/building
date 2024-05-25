import React, { useEffect } from "react";
import CommunicationImage from "../../assets/communication.png";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const notification = t("communication.notification");
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = {
      name: e.target[0].value,
      phone: e.target[1].value,
      desc: e.target[2].value,
    };
    console.log(message);
    const token = "6760426179:AAFDNf2L7dlpw_AMViU2xF4tMoYa5p90L_k";
    const chatId = "5575104582";
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
      });
      if (response?.status === 200) {
        toast.success(notification)
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      id="communication"
      className="px-[20px] md:px-[120px] py-[120px] w-[100%] min-h-[100vh] bg-zinc-900 border-t "
    >
      <ToastContainer />
      <form
        onSubmit={handleMessage}
        className="w-[100%] h-[100%] relative flex flex-col py-[70px] px-[10px] md:px-[70px] rounded-2xl overflow-hidden"
      >
        <img
          src={CommunicationImage}
          alt="Communication"
          className="w-[100%] h-[100%] absolute z-0 top-0 left-0"
        />
        <div
          data-aos="fade-up"
          className="relative z-20 flex flex-col gap-[20px] items-start max-w-[500px]"
        >
          <label className="text-[20px] sm:text-[30px] mb-[20px] text-white max-w-[330px] w-[100%]">
            {title}
          </label>
          <input
            required
            className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%]"
            type="text"
            placeholder={name}
          />
          <input
            required
            className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%]"
            type="text"
            placeholder={number}
          />
          <textarea
            required
            className="px-[20px] py-[12px] rounded-[20px] bg-slate-200 outline-none w-[100%] resize-none font-mono"
            rows={7}
            placeholder={message}
          ></textarea>
          <button className="px-[20px] py-[8px] border w-[240px] rounded-full text-white bg-[#ffffff57] transition-all hover:bg-transparent">
            {btn}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Communication;
