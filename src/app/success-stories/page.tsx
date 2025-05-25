
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Success Stories',
  description: 'Read inspiring stories of achievement from students at SGBNM High School Armori.',
};

interface SuccessStory {
  id: string;
  name: string;
  achievement: string;
  story: string;
  imageUrl: string;
  tags: string[];
  imageHint: string;
}

const stories: SuccessStory[] = [
  {
    id: "1",
    name: "Rohan P.",
    achievement: "Won Regional Art Competition",
    story: "Rohan discovered his passion for art at our school. With guidance from our dedicated art teacher, he honed his skills and created a stunning piece that won first place in the regional art competition. His creativity and determination are an inspiration to us all.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Art", "Creativity", "Competition"],
    imageHint: "student painting",
  },
  {
    id: "2",
    name: "Priya S.",
    achievement: "Mastered Independent Living Skills",
    story: "Priya joined us with challenges in daily activities. Through our tailored life skills program, she has learned to cook, manage her chores, and navigate public transport independently. Priya's journey showcases incredible resilience and growth.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Life Skills", "Independence", "Growth"],
    imageHint: "student cooking",
  },
  {
    id: "3",
    name: "Amit K.",
    achievement: "Secured Internship at Local Bakery",
    story: "Amit developed a keen interest in baking through our vocational training. He worked hard, improved his skills, and with our support, successfully secured an internship at a local bakery. He's now learning on the job and loving it!",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Vocational Training", "Career", "Baking"],
    imageHint: "student baking",
  },
   {
    id: "4",
    name: "Sunita M.",
    achievement: "Became a Confident Public Speaker",
    story: "Sunita was initially very shy. Our communication workshops and drama club helped her build confidence. She recently delivered a moving speech at our school assembly, showcasing her remarkable transformation.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Communication", "Confidence", "Public Speaking"],
    imageHint: "student speaking",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Student Success Stories</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Celebrating the remarkable achievements and personal growth of our students.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-56">
              <Image
                src={story.imageUrl}
                alt={`Image of ${story.name}`}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={story.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Star className="text-accent h-6 w-6" />
                {story.name}
              </CardTitle>
              <CardDescription className="text-base !mt-1">{story.achievement}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/70 text-sm leading-relaxed">{story.story}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
