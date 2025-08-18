import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/applicants">
      <Image src="/images/logo.svg" alt="logo" width={114} height={28} />
      </Link>
    </div>
  );
};

export default Logo;