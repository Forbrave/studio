
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
    name: "Akash V.",
    achievement: "Achieved Academic Growth in Reading",
    story: "Akash found reading challenging initially. Through personalized support and engaging learning materials, he significantly improved his reading comprehension and now enjoys exploring new books.",
    imageUrl: "/images/Teaching (3).jpg",
    tags: ["Academics", "Reading"],
    imageHint: "student reading in class",
  },
  {
    id: "2",
    name: "Shruti D.",
    achievement: "Developed Confidence in Daily Activities",
    story: "Shruti gained confidence in performing everyday tasks through our structured life skills program. She actively participates in preparing meals and managing personal responsibilities, fostering greater independence.",
    imageUrl: "/images/Spoon Marble.webp",
    tags: ["Life Skills", "Independence"],
    imageHint: "student doing life skills activity",
  },
   {
    id: "3",
    name: "Kunal M.",
    achievement: "Showcased Teamwork on the Playground",
    story: "Kunal thrived in our recreational activities, demonstrating excellent teamwork and positive sportsmanship during group games. His enthusiasm encourages others to participate and build friendships.",
    imageUrl: "/images/Playing.webp",
    tags: ["Recreation", "Teamwork"],
    imageHint: "student playing outdoors",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24"> {/* Increased vertical spacing */}
      <section className="relative text-center py-20 md:py-28 bg-primary/10 rounded-lg shadow-sm"> {/* Increased padding, added relative and overflow-hidden */}
        <Image
src="/images/HomePage.webp"
          alt="School campus background"
          layout="fill"
          objectFit="cover"
          className="opacity-40 z-0" // Low opacity and behind content
          data-ai-hint="school campus"
        />
        <div className="relative z-10 container mx-auto px-4"> {/* Ensure content is above background */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8"> {/* Increased margin-bottom */}
            Sant Gadge baba Niwasi Matimand High School Armori
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12"> {/* Increased margin-bottom */}
            {SITE_DESCRIPTION}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl"> {/* Increased padding and text size */}
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Our Mission</h2> {/* Increased margin-bottom */}
            <p className="text-foreground/80 mb-6 leading-relaxed text-lg"> {/* Increased margin-bottom */}
              Our mission is to provide a nurturing and stimulating environment where students with intellectual challenges can discover their potential, develop essential life skills, and achieve personal excellence. We are committed to fostering independence, confidence, and a love for learning in every student.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              We believe in a holistic approach to education, addressing the academic, social, emotional, and vocational needs of our students, preparing them for a fulfilling life.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
          src="/images/HomePage.webp" // Placeholder background image
          alt="SGBNM High School building exterior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="school building"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">Our Core Values</h2> {/* Increased margin-bottom */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
          {[
            { title: "Respect", description: "Valuing each individual's uniqueness and dignity." },
            { title: "Inclusion", description: "Creating a welcoming and supportive community for all." },
            { title: "Empowerment", description: "Encouraging students to take charge of their learning and future." },
            { title: "Compassion", description: "Fostering empathy, understanding, and kindness." },
            { title: "Growth", description: "Promoting continuous development and lifelong learning." },
            { title: "Collaboration", description: "Working together with students, families, and the community." },
          ].map((value) => (
            <Card key={value.title} className="text-center hover:shadow-xl transition-shadow duration-300 p-4"> {/* Increased padding */}
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">Inspiring Success Stories</h2> {/* Increased margin-bottom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
          {homePageStories.map((story) => (
            <Card key={story.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-56"> {/* Adjusted height slightly */}
                <Image
                  src={story.imageUrl}
                  alt={`Image of ${story.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={story.imageHint}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3 pt-5"> {/* Adjusted padding */}
                <CardTitle className="text-xl flex items-center gap-2">
                  <Star className="text-accent h-5 w-5" />
                  {story.name}
                </CardTitle>
                <CardDescription className="text-md !mt-1.5">{story.achievement}</CardDescription> {/* Adjusted margin */}
              </CardHeader>
              <CardContent className="flex-grow pt-2 pb-4"> {/* Adjusted padding */}
                <p className="text-foreground/70 text-sm leading-relaxed">{story.story}</p>
              </CardContent>
              <CardFooter className="pt-3 pb-5"> {/* Adjusted padding */}
                <div className="flex flex-wrap gap-2">
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
        <div className="text-center mt-12"> {/* Increased margin-top */}
          <Link href="/success-stories">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">View All Success Stories</Button> {/* Increased padding and text size */}
          </Link>
        </div>
      </section>

       <section className="container mx-auto px-4 py-16 text-center bg-card rounded-lg shadow-sm mt-16"> {/* Increased padding and margin */}
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Explore Our School</h2> {/* Increased margin-bottom */}
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10"> {/* Increased margin-bottom */}
          Discover the vibrant life at SGBNM High School. See our students' achievements, browse our facilities, and learn about upcoming events.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8"> {/* Increased gap */}
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">Photo Gallery</Button> {/* Increased padding and text size */}
          </Link>
          <Link href="/events">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">Upcoming Events</Button> {/* Increased padding and text size */}
          </Link>
           <Link href="/contact">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">Contact Us</Button> {/* Increased padding and text size */}
          </Link>
        </div>
      </section>
    </div>
  );
}
