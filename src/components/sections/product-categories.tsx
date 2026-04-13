import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import placeholderData from '@/lib/placeholder-images.json';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const categories = [
  { id: 'cat-kitchen', name: 'Dapur', description: 'Desain dapur modern dan fungsional yang menjadi jantung rumah Anda.' },
  { id: 'cat-living', name: 'Ruang Keluarga', description: 'Ciptakan ruang keluarga yang nyaman dan bergaya untuk berkumpul.' },
  { id: 'cat-bedroom', name: 'Kamar Tidur', description: 'Kamar tidur yang tenang dan personal untuk istirahat maksimal.' },
  { id: 'cat-office', name: 'Ruang Kerja', description: 'Desain ruang kerja yang produktif dan inspiratif.' },
  { id: 'cat-bathroom', name: 'Interior', description: 'Interior yang dirancang untuk menghadirkan kenyamanan dan keindahan di setiap sudut ruang Anda.' },
  { id: 'cat-outdoor', name: 'Furniture Lain', description: 'Temukan berbagai furnitur lain untuk melengkapi desain Anda.' },
];

const ProductCategories = () => {
  return (
    <section 
      id="produk" 
      className="py-16 md:py-24 bg-black relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.1), transparent), radial-gradient(ellipse 50% 80% at 5% 110%, hsl(var(--primary) / 0.1), transparent), radial-gradient(ellipse 50% 80% at 95% 110%, hsl(var(--primary) / 0.1), transparent)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Kategori Produk & Desain</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Jelajahi berbagai kategori desain yang kami tawarkan, disesuaikan untuk setiap kebutuhan dan gaya.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          {categories.map((category) => {
            const image = placeholderData.placeholderImages.find(p => p.id === category.id);
            const images = [
              image,
              ...placeholderData.placeholderImages.filter(p => p.id.startsWith(`${category.id}-slide-`))
            ].filter(Boolean);
            
            return (
              <Dialog key={category.id}>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-0">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={category.name}
                          width={400}
                          height={500}
                          className="object-cover w-full h-full aspect-[4/5] transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 font-headline text-xl font-bold text-white md:text-2xl">{category.name}</h3>
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
                                  alt={`${category.name} - view ${index + 1}`}
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
                            <DialogTitle className="font-headline text-2xl">{category.name}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                            <p className="text-muted-foreground">{category.description}</p>
                            <p className="text-sm text-muted-foreground">Temukan lebih banyak inspirasi dan produk terkait di platform kami.</p>
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

export default ProductCategories;
