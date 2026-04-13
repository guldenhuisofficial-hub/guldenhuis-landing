"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import placeholderData from '@/lib/placeholder-images.json';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const portfolioItems = [
  { id: 'portfolio-1', category: 'Kitchen', title: 'Dapur Modern Minimalis', imageId: 'portfolio-1' },
  { id: 'portfolio-2', category: 'Office', title: 'Kantor Pusat Korporat', imageId: 'portfolio-2' },
  { id: 'portfolio-3', category: 'Living Room', title: 'Ruang Keluarga Hangat', imageId: 'portfolio-3' },
  { id: 'portfolio-4', category: 'Kitchen', title: 'Dapur Efisien', imageId: 'portfolio-4' },
  { id: 'portfolio-5', category: 'Office', title: 'Ruang Kerja Kolaboratif', imageId: 'portfolio-5' },
  { id: 'portfolio-6', category: 'Living Room', title: 'Kamar Tidur Nyaman', imageId: 'portfolio-6' },
  { id: 'portfolio-7', category: 'Kitchen', title: 'Dapur Marmer Mewah', imageId: 'portfolio-7' },
  { id: 'portfolio-8', category: 'Office', title: 'Kantor Eksekutif', imageId: 'portfolio-8' },
  { id: 'portfolio-9', category: 'Living Room', title: 'Ruang Tamu Art Deco', imageId: 'portfolio-9' },
];

const filters = ['All', 'Kitchen', 'Office', 'Living Room'];

const FeaturedPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Portofolio Unggulan</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lihat beberapa proyek terbaik kami yang menunjukkan keahlian dan perhatian kami terhadap detail.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center space-x-2">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filteredItems.map(item => {
            const image = placeholderData.placeholderImages.find(p => p.id === item.imageId);
            const images = [
              image,
              ...placeholderData.placeholderImages.filter(p => p.id.startsWith(`${item.imageId}-slide-`))
            ].filter(Boolean);

            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden rounded-lg cursor-pointer">
                    <CardContent className="p-0">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full aspect-video transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <h3 className="font-headline text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-0">
                  <div className="grid md:grid-cols-2 items-start">
                    <Carousel className="w-full relative">
                      <CarouselContent>
                        {images.map((img, index) => (
                          <CarouselItem key={index}>
                            <div className="relative aspect-video w-full">
                              {img && (
                                <Image
                                  src={img.imageUrl}
                                  alt={`${item.title} - view ${index + 1}`}
                                  fill
                                  className="object-cover md:rounded-l-lg"
                                  data-ai-hint={img.imageHint}
                                />
                              )}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                        </>
                      )}
                    </Carousel>
                    <div className="p-6">
                        <DialogHeader>
                            <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                            <h4 className="font-headline font-semibold">Deskripsi Proyek</h4>
                            <p className="text-muted-foreground text-sm">
                              Proyek ini menggabungkan estetika modern dengan fungsionalitas tinggi, menciptakan ruang yang tidak hanya indah tetapi juga nyaman untuk ditinggali. Penggunaan material premium dan pencahayaan yang cermat menjadi kunci keberhasilan desain ini.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Button asChild variant="outline">
                                    <a href="https://www.instagram.com/guldenhuis" target="_blank" rel="noopener noreferrer">
                                        <Image src="/icons/instagram_icon.png" alt="Instagram" width={16} height={16} className="mr-2" /> Instagram
                                    </a>
                                </Button>
                                <Button asChild variant="outline">
                                    <a href="https://www.tokopedia.com/guldenhuis" target="_blank" rel="noopener noreferrer">
                                        <Image src="/icons/tokopedia_icon.png" alt="Tokopedia" width={16} height={16} className="mr-2" /> Tokopedia
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
