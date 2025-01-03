import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Footer() {
  return (
    <>
  <footer className="text-gray-600 body-font bg-pink-200 ">
        <div className="px-5 py-10 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-12">
          {/* About Section */}
          <div className="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left space-y-5">
            <span className="text-2xl font-semibold text-gray-900">About</span>
            <p className="mt-2 text-xl text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Illo nesciunt provident reiciendis voluptas tenetur, maxime accusantium deserunt?
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="flex-grow lg:w-1/3 md:w-1/2 px-4 space-y-5">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3 text-center md:text-left">
              Sign up for discounts and deals
            </h2>
            <div className="flex flex-col md:items-start items-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 w-full max-w-sm bg-slate-300 rounded-lg mb-3"
              />
              <button
                type="submit"
                className="p-3 w-full max-w-sm bg-slate-400 font-mono text-xl rounded-lg hover:bg-white transition"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex-grow lg:w-1/3 md:w-1/2 px-4 space-y-5">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3 text-center md:text-left">
              Contact Us
            </h2>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <RiFacebookBoxLine size={40} className="text-gray-700 hover:text-white transition" />
              <FaInstagram size={40} className="text-gray-700 hover:text-white transition" />
              <TbWorldWww size={40} className="text-gray-700 hover:text-white transition" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

