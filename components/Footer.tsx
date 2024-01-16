import Image from "next/image";

import { footerContent } from "@/lib/constants";
import logo from "../public/images/logo.svg";
import iconFB from "../public/images/icon-facebook.svg";
import iconTwitter from "../public/images/icon-twitter.svg";
import iconIG from "../public/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-grayish-blue bg-opacity-20 mt-32 text-dark-grayish-blue py-16 sm:py-8">
      <div className=" sm:w-3/4 mx-auto flex flex-col sm:flex-row items-center">
        <Image src={logo} width={50} height={50} alt="Logo" className="" />
        <div className="flex flex-col items-center my-8 sm:ml-16 sm:grid sm:grid-cols-3 gap-x-16 gap-y-4">
          {footerContent.map((link, index) => (
            <h5 key={index} className="cursor-pointer">
              {link}
            </h5>
          ))}
        </div>
        <div className="flex gap-4 sm:ml-auto">
          <Image
            src={iconFB}
            width={25}
            height={25}
            alt="FaceBook Logo"
            className="cursor-pointer"
          />
          <Image
            src={iconTwitter}
            width={25}
            height={25}
            alt="Twitter Logo"
            className="cursor-pointer"
          />
          <Image
            src={iconIG}
            width={25}
            height={25}
            alt="InstaGram Logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
