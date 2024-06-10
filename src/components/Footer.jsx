import React from "react";
import {FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa";
import {Top} from "./Top.jsx";


export const Footer = () => {
  return(
    <>
      <footer className="relative bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                <p className="font-bold text-inherit text-white">
                  <span className="text-3xl font-serif">T</span>eam
                  <span className="text-3xl font-serif ml-2">N</span>ext
                  <span className="text-3xl font-serif ml-2">O</span>ne
                </p>
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              {/*<div className="flex items-center justify-left mt-6 lg:mb-0 mb-6">*/}
              {/*  <button*/}
              {/*    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"*/}
              {/*    type="button">*/}
              {/*    <FaTwitter className="text-lg"/>*/}
              {/*  </button>*/}
              {/*  <button*/}
              {/*    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"*/}
              {/*    type="button">*/}
              {/*    <FaFacebookSquare className="text-lg text-blue-500"/>*/}
              {/*  </button>*/}
              {/*  <button*/}
              {/*    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"*/}
              {/*    type="button">*/}
              {/*    <FaInstagram className="text-lg"/>*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto text-white">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">HOME</a>
                    </li>
                    <li>
                      <a href="#"
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">INTRO</a>
                    </li>
                    <li>
                      <a href="#"
                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">CONTACT</a>
                    </li>
                    <li>
                      <a href="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free Products</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 text-white">
                  <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">CONTACT</span>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">MIT License</a>
                    </li>
                    <li>
                      <a href="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
                  Copyright ©
                  <span id="get-current-year">2021</span>
                  <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
                  <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>
                </div>
              </div>
            </div>
        </div>
        <Top />
      </footer>
    </>
  )
}