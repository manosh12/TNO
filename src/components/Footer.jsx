import React from "react";
import {Top} from "./Top.jsx";
import {Link} from "react-router-dom";
import {TopScroll} from "./TopScroll.jsx";


export const Footer = () => {
  return(
    <>
      <footer className="relative bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
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
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto text-white">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/"
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" onClick={TopScroll}>HOME</Link>
                    </li>
                    <li>
                      <Link to={"/#intro"}
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">GREETING</Link>
                    </li>
                    <li>
                      <Link to="/business-content"
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" onClick={TopScroll}>BUSINESS CONTENT</Link>
                    </li>
                    <li>
                      <Link to={"/#contact"} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 text-white">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">CONTACT</span>
                  <ul className="list-unstyled">
                    <li>
                      <div className="flex items-center mb-2">
                        <span className="flex-1 text-sm">TEL：092（409）8609</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mb-2">
                        <span className="flex-1 text-sm">FAX：092-089-8612</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="flex-1 text-sm">メール：tnosolution.cc@gmail.com</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-cyan-700 border-1"/>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
              Copyright ©
              <span id="get-current-year">2024</span>TNOソリューション株式会社
            </div>
          </div>
        </div>
        <Top />
      </footer>
    </>
  )
}