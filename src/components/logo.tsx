import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("relative inline-block", className)}>
      <Image
        src="/images/Guldenhuis_image-removebg.png"
        alt="Guldenhuis logo"
        width={250}
        height={80}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
