import Logo from "@/components/common/logo";
import Link from "next/link";

const footerLinks = [
  {
    label: "Support",
    href: "",
  },
  {
    label: "Terms & Conditions",
    href: "",
  },
  {
    label: "Privacy Policy",
    href: "",
  },
  {
    label: "Press And Media",
    href: "",
  },
];


const Footer = () => {
  return (
    <div className="bg-dev-card px-4 md:px-[40px] pt-6 md:pt-[35px] mt-8 md:mt-[48px]">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 md:mb-[36px] gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[60px] text-xs md:text-sm font-medium leading-6 font-roboto text-dev-text-muted">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.label} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Logo />
        </div>
      </div>

      <div className="py-2 md:py-[13px] text-xs md:text-sm font-medium leading-6 font-roboto text-dev-text-muted text-center md:text-left">Copyright © 2024 DevSpot. All rights reserved.</div>
    </div>
  );
};

export default Footer;
