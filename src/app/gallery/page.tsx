
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Video, Image as ImageIconLucide } from 'lucide-react'; // Renamed Image to avoid conflict
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore photos and videos showcasing activities, events, and facilities at SGBNM High School Armori.',
};

interface GalleryItem {
  id: string;
  type: 'image';
  src: string;
  alt: string;
  description: string;
  aiHint: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", type: "image", src: "/images/SponMarble2.webp", alt: "Students in a classroom", description: "Engaging classroom sessions", aiHint: "classroom students" },
  { id: "2", type: "image", src: "/images/Spoon Marble.webp", alt: "School playground", description: "Outdoor activities and play", aiHint: "school playground" },
  { id: "3", type: "image", src: "/images/Playing.webp", alt: "School Annual Day celebration", description: "Highlights from our Annual Day", aiHint: "school event" }, // Placeholder for video
  { id: "4", type: "image", src: "/images/Plays.webp", alt: "Art and craft exhibition", description: "Students' creative artworks", aiHint: "student art" },
  { id: "5", type: "image", src: "/images/Events.webp", alt: "Vocational training workshop", description: "Hands-on vocational skills", aiHint: "vocational training" },
  { id: "6", type: "image", src: "/images/SponMarble2.webp", alt: "Sports day event", description: "Students participating in sports", aiHint: "school sports" }, // Placeholder for video
  { id: "7", type: "image", src: "/images/SponMarble2.webp", alt: "School building exterior", description: "Our welcoming school campus", aiHint: "school building" },
  { id: "8", type: "image", src: "/images/SponMarble2.webp", alt: "Students learning computers", description: "Digital literacy program", aiHint: "students computers" },
  { id: "9", type: "image", src: "/images/TEACHING.jpg", alt: "Teacher explaining a concept", description: "Dedicated teachers in action", aiHint: "teacher explaining" },
  { id: "10", type: "image", src: "/images/Teaching (2).webp", alt: "Group teaching session", description: "Interactive group learning", aiHint: "group teaching" },
  { id: "11", type: "image", src: "/images/Teaching (3).jpg", alt: "Teacher helping a student", description: "Personalized attention from teachers", aiHint: "teacher helping student" },
  { id: "12", type: "image", src: "/images/Teaching (4).jpg", alt: "Teacher writing on blackboard", description: "Traditional teaching methods", aiHint: "teacher blackboard" },
  { id: "13", type: "image", src: "/images/Teaching (5).jpg", alt: "Teacher interacting with class", description: "Engaging classroom interaction", aiHint: "teacher class interaction" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Photo & Video Gallery</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          A glimpse into the vibrant life at SGBNM High School.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 relative aspect-video">
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.aiHint}
                />
              ) : (
                // Basic placeholder for video. In a real app, use an iframe for YouTube/Vimeo or <video> tag.
                <div className="w-full h-full bg-muted flex items-center justify-center">
                   <Image
                    src={item.src} // Using placeholder image for video thumbnail
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-70"
                    data-ai-hint={item.aiHint}
                  />
                  <Video className="h-16 w-16 text-foreground/50 absolute" />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 bg-card">
              <div className="flex items-center gap-2">
                {item.type === 'image' ? <ImageIconLucide className="h-5 w-5 text-primary" /> : ""}
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
