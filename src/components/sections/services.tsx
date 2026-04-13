import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Building, Users } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'Desain Interior',
    description: 'Solusi desain kreatif dan personal untuk menciptakan ruang yang indah dan sesuai dengan gaya hidup Anda.',
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Build & Renovasi',
    description: 'Konstruksi dan renovasi berkualitas tinggi dengan manajemen proyek yang efisien dan hasil akhir yang memuaskan.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Konsultasi & Perencanaan',
    description: 'Bimbingan ahli untuk perencanaan ruang, pemilihan material, dan anggaran proyek Anda dari awal hingga akhir.',
  }
];

const Services = () => {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Personalitas Anda, Inspirasi Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dengan kombinasi keahlian dan material terbaik, GULDENHUIS menghadirkan solusi yang memadukan keindahan dan fungsionalitas untuk setiap sudut rumah atau ruang kerja Anda.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              {service.icon}
              
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;