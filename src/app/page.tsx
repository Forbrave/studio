
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { SITE_DESCRIPTION } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-primary/10 rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sanyt Gadge baba Niwasi Matimand High School Armori
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            {SITE_DESCRIPTION}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Mission</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Our mission is to provide a nurturing and stimulating environment where students with intellectual challenges can discover their potential, develop essential life skills, and achieve personal excellence. We are committed to fostering independence, confidence, and a love for learning in every student.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We believe in a holistic approach to education, addressing the academic, social, emotional, and vocational needs of our students, preparing them for a fulfilling life.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Students engaged in learning"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="students classroom"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-foreground mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Respect", description: "Valuing each individual's uniqueness and dignity." },
            { title: "Inclusion", description: "Creating a welcoming and supportive community for all." },
            { title: "Empowerment", description: "Encouraging students to take charge of their learning and future." },
            { title: "Compassion", description: "Fostering empathy, understanding, and kindness." },
            { title: "Growth", description: "Promoting continuous development and lifelong learning." },
            { title: "Collaboration", description: "Working together with students, families, and the community." },
          ].map((value) => (
            <Card key={value.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <CheckCircle className="text-accent h-6 w-6" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Explore Our School</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Discover the vibrant life at SGBNM High School. See our students' achievements, browse our facilities, and learn about upcoming events.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/success-stories">
            <Button variant="outline" size="lg">Success Stories</Button>
          </Link>
          <Link href="/gallery">
            <Button variant="outline" size="lg">Photo Gallery</Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" size="lg">Upcoming Events</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
