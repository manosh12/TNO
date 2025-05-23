import React from "react";
import {Top} from "./Top.jsx";
import {Link} from "react-router-dom";
import {TopScroll} from "./TopScroll.jsx";

export const Footer = () => {
  return(
    <>
      <footer className="relative bg-gray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:text-left">
            <div className="w-full lg:w-6/12 lg:px-4">
              <h4 className="text-3xl fonat-semibold text-white">
                  <Link to="/" onClick={TopScroll}>
                    <p className="font-bold text-inherit mt-2 text-2xl">TNOソリューション株式会社</p>
                  </Link>
              </h4>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row lg:mt-10 mt-5 mb-12 justify-center lg:gap-10 gap-5">
              <Link to="/" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-red-700">HOME</Link>
              <Link to="/#intro" className="cursor-pointer text-white text-xl hover:text-red-700">ご挨拶</Link>
              <Link to="/company-info" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-red-700">会社概要</Link>
              <Link to="/business-content" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-red-700">業務内容</Link>
              <Link to="/#contact" className="cursor-pointer text-white text-xl hover:text-red-700">お問い合せ</Link>
            </div>
          </div>
          <hr className="border-red-700 border-1 mx-4"/>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold mt-5 text-gray-400">
              Copyright ©<span id="get-current-year">2025</span> TNOソリューション株式会社. All Rights Reserved
            </div>
          </div>
        </div>
        <Top/>
      </footer>
    </>
  )
}