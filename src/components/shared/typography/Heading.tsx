import { createElement } from "react";

type HeadingProps = {
  text: string;
  size: "xl" | "lg" | "md" | "sm";
  className?: string;
};

function Heading({ text, size, className = "" }: HeadingProps) {
  let headerType = "h1";
  switch (size) {
    case "xl":
      className += ` font-bold text-2xl leading-7.5`;
      headerType = "h1";
      break;
    case "lg":
      className += ` font-bold text-lg leading-5.75`;
      headerType = "h2";
      break;
    case "md":
      className += ` font-bold text-15px leading-4.75`;
      headerType = "h3";
      break;
    case "sm":
      className += ` font-bold text-xs leading-3.5 tracking-2.4px`;
      headerType = "h4";
      break;
    default:
      className += ` font-bold text-2xl leading-7.5`;
      headerType = "h1";
      break;
  }
  return createElement(headerType, { className }, text);
}

export default Heading;