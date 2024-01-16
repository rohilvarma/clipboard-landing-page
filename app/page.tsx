import Image from "next/image";

import { FeaturedContent } from "@/components";
import { content } from "@/lib/constants";
import bgDesktop from "../public/images/bg-header-desktop.png";
import bgMobile from "../public/images/bg-header-mobile.png";
import logo from "../public/images/logo.svg";

export default function Home() {
  const logoSize = 125;
  return (
    <main className="">
      <Image
        src={bgDesktop}
        width={500}
        height={500}
        alt="Background Photo"
        className="w-full absolute top-0 hidden sm:block"
      />
      <Image
        src={bgMobile}
        width={500}
        height={500}
        alt="Background Photo"
        className="w-full absolute top-0 sm:hidden"
      />
      <div className="mobile-container">
        <Image
          src={logo}
          width={logoSize}
          height={logoSize}
          alt="Logo"
          className="mx-auto pt-32"
        />
        <FeaturedContent
          title={content[0].title}
          description={content[0].description}
          index={content[0].index}
        />
        <FeaturedContent
          title={content[1].title}
          description={content[1].description}
          index={content[1].index}
        />
      </div>
    </main>
  );
}
