import Image from "next/image";

import { IContent } from "@/lib/interfaces";

const QuickCard = ({ title, description, image, index }: IContent) => {
  return (
    <div
      className={`sm:w-1/2 leading-7 text-center ${
        image ? "sm:text-center" : "sm:text-start"
      }`}
    >
      {image && (
        <Image
          src={image}
          width={50}
          height={50}
          alt={`Workflow Icon ${index}`}
          className="mx-auto mb-12 sm:mb-8"
        />
      )}
      <h1 className="text-dark-grayish-blue text-xl font-semibold">{title}</h1>
      <p className="text-grayish-blue text-sm mt-4 sm:mt-2">{description}</p>
    </div>
  );
};

export default QuickCard;
