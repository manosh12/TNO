import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import {Button} from "@nextui-org/react";

export const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`${showButton ? 'bottom-10' : '-bottom-10'} fixed right-10 transition-bottom duration-300 hidden lg:block`}>
        {showButton && (
          <Button isIconOnly className="bg-cyan-600 border-0  h-14 w-14" variant="faded" size="sm" radius="full"
                  onClick={scrollToTop}>
            <FaChevronUp className="text-white font-bold text-2xl"/>
          </Button>
        )}
      </div>
    </>
  );
};