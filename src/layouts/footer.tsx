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
    <div className="bg-dev-card px-[40px] pt-[35px] mt-[48px]">
      <div className="flex items-center justify-between mb-[36px]">
        <div className="flex items-center gap-[60px] text-sm font-medium leading-6 font-roboto text-dev-text-muted">
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

      <div className=" py-[13px] text-sm font-medium leading-6 font-roboto text-dev-text-muted">Copyright © 2024 DevSpot. All rights reserved.</div>
    </div>
  );
};

export default Footer;
