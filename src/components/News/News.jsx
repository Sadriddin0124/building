import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import News1 from "../../assets/news1.jpg";
import News2 from "../../assets/news2.jpg";
import News3 from "../../assets/news3.jpg";
import News4 from "../../assets/news4.jpg";
import Aos from "aos";
const News = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  const { t } = useTranslation();
  const title = t("news.title");
  const data = [
    { title: t("news.title1"), desc: t("news.desc1"), img: News1, aos: "fade-right" },
    { title: t("news.title2"), desc: t("news.desc2"), img: News2, aos: "fade-left" },
    { title: t("news.title3"), desc: t("news.desc3"), img: News3, aos: "fade-up" },
    { title: t("news.title4"), desc: t("news.desc4"), img: News4, aos: "fade-up" },
  ];
  return (
    <section className="flex flex-col items-center py-[50px] px-[20px] bg-gray-100 gap-[20px]">
      <div className="flex flex-col items-start">
        <h1 className="text-[25px] text-left w-[100%]">{title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {data?.map((item, index) => {
            return (
              <div
              data-aos={item?.aos}
                key={index}
                className="min-h-[150px] lg:h-[290px] w-[100%] lg:max-w-[550px] rounded-[25px] overflow-hidden flex sm:flex-row flex-col shadow-lg bg-white my-[20px]"
              >
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-[100%] sm:w-[250px] lg:w-[45%] h-[100%] object-cover"
                />
                <div className="p-[20px] flex flex-col gap-[10px] w-[100%] sm:w-[55%]">
                  <button className="w-[120px] h-[25px] border border-zinc-800 hover:bg-white transition-all bg-zinc-800 rounded-full"></button>
                  <h1>{item?.title}</h1>
                  <p className="text-[12px]">{item?.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
