'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/logo';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Tentang', href: '#tentang' },
];

const socialLinks = [
    { name: 'WhatsApp', iconSrc: '/icons/whatsapp_icon.png', href: 'https://wa.me/6281271190800' },
    { name: 'Instagram', iconSrc: '/icons/instagram_icon.png', href: 'https://www.instagram.com/guldenhuis' },
    { name: 'Tokopedia', iconSrc: '/icons/tokopedia_icon.png', href: 'https://www.tokopedia.com/guldenhuis' },
    { name: 'Shopee', iconSrc: '/icons/shopee_icon.png', href: 'https://shopee.co.id/guldenhuis' },
    { name: 'TikTok', iconSrc: '/icons/tiktok_icon_.png', href: 'https://tiktok.com' },
    { name: 'Facebook', iconSrc: '/icons/facebook_icon.png', href: 'https://facebook.com' },
];

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Alamat</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-headline font-semibold text-foreground/90">Kantor</h4>
                <p className="text-muted-foreground">Infiniti Office, MTH Square Ground Floor A4/A, Jl. Letjen M.T. Haryono Kav. 10 Jakarta Timur 13330</p>
              </div>
              <div>
                <h4 className="font-headline font-semibold text-foreground/90">Workshop</h4>
                <p className="text-muted-foreground">Jl. Kramat Setu Gg. H. Samang No.161, RT.003/RW.001, Bintara Jaya, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17136</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-headline text-2xl font-semibold">Hubungi Kami</h3>
            <p className="text-muted-foreground">
              Terhubung dengan kami melalui platform favorit Anda.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {socialLinks.map(({ name, iconSrc, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group"
                >
                    <Image
                      src={iconSrc}
                      alt={`${name} logo`}
                      width={32}
                      height={32}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">&copy; {year} GuldenHuis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
