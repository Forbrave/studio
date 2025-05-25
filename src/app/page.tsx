
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { SITE_DESCRIPTION } from '@/lib/constants';

interface SuccessStory {
  id: string;
  name: string;
  achievement: string;
  story: string;
  imageUrl: string;
  tags: string[];
  imageHint: string;
}

const homePageStories: SuccessStory[] = [
  {
    id: "1",
    name: "Rohan P.",
    achievement: "Won Regional Art Competition",
    story: "Rohan discovered his passion for art at our school. With guidance from our dedicated art teacher, he honed his skills and created a stunning piece that won first place...",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Art", "Creativity"],
    imageHint: "student painting",
  },
  {
    id: "2",
    name: "Priya S.",
    achievement: "Mastered Independent Living Skills",
    story: "Priya joined us with challenges in daily activities. Through our tailored life skills program, she has learned to cook, manage her chores, and navigate public transport independently...",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Life Skills", "Independence"],
    imageHint: "student cooking",
  },
   {
    id: "3",
    name: "Amit K.",
    achievement: "Secured Internship at Local Bakery",
    story: "Amit developed a keen interest in baking through our vocational training. He worked hard, improved his skills, and with our support, successfully secured an internship...",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Vocational", "Career"],
    imageHint: "student baking",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-16 md:py-20 bg-primary/10 rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Sanyt Gadge baba Niwasi Matimand High School Armori
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            {SITE_DESCRIPTION}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Our Mission</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed text-lg">
              Our mission is to provide a nurturing and stimulating environment where students with intellectual challenges can discover their potential, develop essential life skills, and achieve personal excellence. We are committed to fostering independence, confidence, and a love for learning in every student.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-10">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Respect", description: "Valuing each individual's uniqueness and dignity." },
            { title: "Inclusion", description: "Creating a welcoming and supportive community for all." },
            { title: "Empowerment", description: "Encouraging students to take charge of their learning and future." },
            { title: "Compassion", description: "Fostering empathy, understanding, and kindness." },
            { title: "Growth", description: "Promoting continuous development and lifelong learning." },
            { title: "Collaboration", description: "Working together with students, families, and the community." },
          ].map((value) => (
            <Card key={value.title} className="text-center hover:shadow-xl transition-shadow duration-300 p-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <CheckCircle className="text-accent h-7 w-7" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-base">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-10">Inspiring Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageStories.map((story) => (
            <Card key={story.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-52"> {/* Adjusted height slightly */}
                <Image
                  src={story.imageUrl}
                  alt={`Image of ${story.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={story.imageHint}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Star className="text-accent h-5 w-5" />
                  {story.name}
                </CardTitle>
                <CardDescription className="text-md !mt-1">{story.achievement}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <p className="text-foreground/70 text-sm leading-relaxed">{story.story}</p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/success-stories">
            <Button variant="outline" size="lg">View All Success Stories</Button>
          </Link>
        </div>
      </section>

       <section className="container mx-auto px-4 py-12 text-center bg-card rounded-lg shadow-sm mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Explore Our School</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Discover the vibrant life at SGBNM High School. See our students' achievements, browse our facilities, and learn about upcoming events.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="px-6">Photo Gallery</Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" size="lg" className="px-6">Upcoming Events</Button>
          </Link>
           <Link href="/contact">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
