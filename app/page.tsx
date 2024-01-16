import Image from "next/image";

import { FeaturedContent, QuickCard } from "@/components";
import { content, snippetContent, workflowContent } from "@/lib/constants";
import bgDesktop from "../public/images/bg-header-desktop.png";
import bgMobile from "../public/images/bg-header-mobile.png";
import logo from "../public/images/logo.svg";
import imageDevice from "../public/images/image-devices.png";
import imageComputer from "../public/images/image-computer.png";

import iconGoogle from "../public/images/logo-google.png";
import iconIBM from "../public/images/logo-ibm.png";
import iconMS from "../public/images/logo-microsoft.png";
import iconHP from "../public/images/logo-hp.png";
import iconVG from "../public/images/logo-vector-graphics.png";

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
        <div className="flex flex-col sm:grid sm:grid-cols-2 mt-16">
          <Image
            src={imageComputer}
            width={500}
            height={500}
            alt="Computer Image"
            className="w-full"
          />
          <div className="flex flex-col sm:pl-20 gap-14 mt-14 sm:mt-0 justify-center">
            {snippetContent.map((content) => (
              <QuickCard
                key={content.index}
                index={content.index}
                title={content.title}
                description={content.description}
              />
            ))}
          </div>
        </div>

        <FeaturedContent
          title={content[2].title}
          description={content[2].description}
          index={content[2].index}
        />
        <Image
          src={imageDevice}
          width={500}
          height={500}
          alt="Device Image"
          className="mx-auto w-full sm:w-1/2 mt-20"
        />

        <FeaturedContent
          title={content[3].title}
          description={content[3].description}
          index={content[3].index}
        />
        <div className="flex flex-col sm:flex-row sm:items-center mt-14 w-3/4 gap-12 sm:gap-4 mx-auto">
          {workflowContent.map((content) => (
            <QuickCard
              key={content.index}
              index={content.index}
              title={content.title}
              description={content.description}
              image={content.image}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-16 items-center my-32">
          <Image src={iconGoogle} width={50} height={50} alt="Logo" className="w-40" />
          <Image src={iconIBM} width={50} height={50} alt="Logo" className="w-40" />
          <Image src={iconMS} width={50} height={50} alt="Logo" className="w-40" />
          <Image src={iconHP} width={50} height={50} alt="Logo" className="w-40" />
          <Image src={iconVG} width={50} height={50} alt="Logo" className="w-40" />
        </div>

        <FeaturedContent
          title={content[4].title}
          description={content[4].description}
          index={content[4].index}
        />
      </div>
    </main>
  );
}
