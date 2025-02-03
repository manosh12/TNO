import React from "react";
import {Top} from "./Top.jsx";
import {Link} from "react-router-dom";
import {TopScroll} from "./TopScroll.jsx";


export const Footer = () => {
  return(
    <>
      <footer className="relative bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:text-left">
            <div className="w-full lg:w-6/12 lg:px-4">
              <h4 className="text-3xl fonat-semibold text-white">
                <Link to="/" onClick={TopScroll}>
                  <p className="font-bold text-inherit text-sm">
                    <span className="text-3xl font-serif text-red-700">T</span>eam
                    <span className="text-3xl font-serif ml-2 text-red-700">N</span>ext
                    <span className="text-3xl font-serif ml-2 text-red-700">O</span>ne
                  </p>
                </Link>
              </h4>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row lg:mt-24 mt-5 mb-12 justify-center lg:gap-20 gap-5">
              <Link to="/" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-cyan-700">HOME</Link>
              <Link to="/#intro" className="cursor-pointer text-white text-xl hover:text-cyan-700">ご挨拶</Link>
              <Link to="/company-info" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-cyan-700">会社概要</Link>
              <Link to="/business-content" onClick={TopScroll} className="cursor-pointer text-white text-xl hover:text-cyan-700">業務内容</Link>
              <Link to="/#contact" className="cursor-pointer text-white text-xl hover:text-cyan-700">お問い合せ</Link>
            </div>
          </div>
          <hr className="my-4 border-cyan-700 border-1 mx-4"/>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
              Copyright ©
              <span id="get-current-year">2024</span> TNOソリューション株式会社
            </div>
          </div>
        </div>
        <Top/>
      </footer>
    </>
  )
}