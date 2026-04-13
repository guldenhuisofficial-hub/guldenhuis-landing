import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { Card } from '../ui/card';

const heroImage = placeholderData.placeholderImages.find(p => p.id === 'hero-image');

const stats = [
    { value: '10+', label: 'Tahun Pengalaman' },
    { value: '100+', label: 'Proyek Selesai' },
    { value: '99%', label: 'Kepuasan Klien' },
];

const Hero = () => {
    return (
        <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-foreground overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                            MENGUBAH INSPIRASI MENJADI <span className="text-primary">REALITA</span>
                        </h1>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Kami berkomitmen menghadirkan desain interior yang tidak hanya indah, tetapi juga fungsional dan nyaman untuk Anda nikmati setiap hari.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" asChild>
                                <a href="#portofolio">
                                    Lihat Portofolio <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://wa.me/6281271190800" target="_blank" rel="noopener noreferrer">
                                    <Phone className="mr-2 h-5 w-5" /> Konsultasi via WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
                        <Card className="absolute top-1/2 left-0 -translate-y-1/2 w-80 p-4 bg-background/50 backdrop-blur-sm shadow-lg z-20">
                             <div className="grid grid-cols-3 gap-2 text-center">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-2xl md:text-3xl font-bold font-headline text-primary">{stat.value}</p>
                                        <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        
                        {/* Image with Frames */}
                        <div className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] lg:w-[400px] lg:h-[600px]">
                            <div className="absolute -top-4 -left-4 w-full h-full bg-card rounded-xl transform -rotate-6"></div>
                            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-primary rounded-xl transform -rotate-3"></div>
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                               {heroImage && (
                                    <Image
                                        src={heroImage.imageUrl}
                                        alt={heroImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={heroImage.imageHint}
                                        sizes="(max-width: 768px) 80vw, 40vw"
                                        priority
                                    />
                               )}
                               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
