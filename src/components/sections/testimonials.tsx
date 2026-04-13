import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Nova',
    quote: 'Best service, bener-bener dari hati servicenya.. Marketingnya fast respond dan ramah, tim instalasi yg dateng juga cekatan dan rapi.. padahal leadtime 3 minggu, selesai 2 minggu padahal banyak libur Nataru.. Mantapsss.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Ina',
    quote: 'Hasilnya kereenn.. 👍👍 penjual sangat komunikatif dan sabar 😁 respon cepat...pokoknya recommended seller 👍👍 sukses terus ya usahanya...dan terimakasih banyak 🙏😇',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Maya',
    quote: 'Alhamdulillaah akhirnya project dream kitchen bisa terwujud. Dari awal bikin sketsa dibantu dibuat 3D nya dulu sampe ukuran detail dan bahan²nya. Pas jadi diinstall oleh tukang yg sabar dan helpful. Hasilnya pun rapih beyond expectation deh.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Apa Kata Klien Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kami bangga dengan hubungan yang kami bangun dan hasil yang kami berikan.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = placeholderData.placeholderImages.find(p => p.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="p-6">
                <CardHeader className="flex flex-row items-center gap-4 p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div>
                    <h3 className="font-headline font-semibold">{testimonial.name}</h3>
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <a href="https://www.tokopedia.com/guldenhuis/review" target="_blank" rel="noopener noreferrer">
              Selengkapnya
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
