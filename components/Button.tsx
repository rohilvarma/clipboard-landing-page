import { IButton } from "@/lib/interfaces";

const Button = ({ buttonType }: IButton) => {
  return (
    <button
      className={`${
        buttonType === "iOS"
          ? "bg-strong-cyan hover:opacity-80"
          : "bg-light-blue hover:opacity-80"
      }  rounded-full text-white px-6 py-3 shadow-lg duration-200`}
    >
      Download for {buttonType}
    </button>
  );
};
export default Button;
