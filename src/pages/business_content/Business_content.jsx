import {useEffect} from 'react';
import homeImg from '/images/business_idea.jpg';
import { Title } from "../../components/Title.jsx";
import { NumberTitle } from "../../components/NumberTitle.jsx";
import data from "../../data/data.json";
import "../../App.css";
import { useLocation } from "react-router-dom";

export const Business_content = () => {
  const businessContent = data.businessContent;

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#' from the hash
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="home">
        <div
          className={`relative bg-fixed flex flex-col justify-center items-center w-full h-[50vh] bg-cover bg-no-repeat`}
          style={{
            'backgroundImage': `linear-gradient(rgba(16, 0, 0, 0.5), rgba(3, 3, 3, 0.5)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="text-3xl text-white">事業内容</h1>
            <span className="text-sm text-warning">(Business Content)</span>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl rounded-[5px] mb-20">
          <Title title="事業内容" />
          <div className="mx-5 text-gray-600">
            {businessContent.map(contentList => {
              const isEven = contentList.id % 2 === 0;
              return (
                <div key={contentList.id}
                  className={`flex flex-col sm:flex-row ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-5`} id={contentList.number}>
                  {/* Image Container */}
                  <div className="flex justify-center items-center w-full sm:w-1/2 mt-20">
                    <img
                      src={contentList.img}
                      className="w-40 h-40 object-cover rounded-md"
                      alt={contentList.title}
                    />
                  </div>

                  {/* Content Details */}
                  <div className="mt-20 w-full sm:w-1/2 flex flex-col justify-center">
                    <div className="font-bold flex justify-start items-center mb-2">
                      <NumberTitle number={contentList.number} />
                      <span className="text-2xl ml-2">{contentList.title}</span>
                    </div>
                    <p className="mt-7">{contentList.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
