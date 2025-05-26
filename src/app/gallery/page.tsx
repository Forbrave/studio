
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

const initialGalleryItems: GalleryItem[] = [
  { id: "1", type: "image", src: "/images/SponMarble2.webp", alt: "Students playing spoon and marble race at SGBNM High School Armori sports day", description: "Exciting moments from our sports day, featuring students in a fun spoon and marble race at SGBNM High School Armori.", aiHint: "students sports day spoon marble race" },
  { id: "2", type: "image", src: "/images/Spoon Marble.webp", alt: "Students participating in outdoor activities at SGBNM High School Armori playground", description: "Outdoor fun and games on the school playground at SGBNM High School Armori.", aiHint: "school playground outdoor activities" },
  { id: "3", type: "image", src: "/images/Playing.webp", alt: "Students performing during the School Annual Day celebration at SGBNM High School Armori", description: "Capturing vibrant performances and highlights from the SGBNM High School Armori Annual Day celebration.", aiHint: "school annual day student performance" }, // Placeholder for video
  { id: "4", type: "image", src: "/images/Plays.webp", alt: "Students showcasing creative artworks at the SGBNM High School Armori art exhibition", description: "A display of students' talent at the SGBNM High School Armori art and craft exhibition.", aiHint: "student art exhibition creative artwork" },
  { id: "5", type: "image", src: "/images/Events.webp", alt: "Students learning hands-on skills in a vocational training workshop at SGBNM High School Armori", description: "Practical learning experiences in our vocational training workshops at SGBNM High School Armori.", aiHint: "vocational training workshop hands-on skills" },
  { id: "6", type: "image", src: "/images/TEACHING.jpg", alt: "Dedicated teacher explaining a concept to students at SGBNM High School Armori", description: "Our dedicated teachers providing engaging and personalized learning experiences in the classroom at SGBNM High School Armori.", aiHint: "teacher explaining concept classroom" },
  { id: "7", type: "image", src: "/images/Teaching (2).webp", alt: "Interactive group teaching session with students and teacher at SGBNM High School Armori", description: "Interactive group learning sessions led by experienced teachers at SGBNM High School Armori.", aiHint: "group teaching interactive learning" },
  { id: "8", type: "image", src: "/images/Teaching (3).jpg", alt: "Teacher helping a student with their work at SGBNM High School Armori", description: "Personalized attention and support from our caring teachers at SGBNM High School Armori.", aiHint: "teacher helping student personalized attention" },
  { id: "9", type: "image", src: "/images/Teaching (4).jpg", alt: "Teacher writing on the blackboard during a lesson at SGBNM High School Armori", description: "Effective traditional teaching methods used by our educators at SGBNM High School Armori.", aiHint: "teacher blackboard traditional teaching" },
  { id: "10", type: "image", src: "/images/Teaching (5).jpg", alt: "Teacher engaging with the class during a lesson at SGBNM High School Armori", description: "Engaging classroom interaction fostering a positive learning environment at SGBNM High School Armori.", aiHint: "teacher class interaction engaging classroom" },
  { id: "11", type: "image", src: "/images/All Staff.webp", alt: "Faculty and staff of SGBNM High School Armori", description: "Meet the dedicated team of faculty and staff at SGBNM High School Armori.", aiHint: "SGBNM High School Armori staff faculty" },
  { id: "12", type: "image", src: "/images/Flag osting.webp", alt: "Flag hoisting ceremony at SGBNM High School Armori", description: "Patriotic moments during the flag hoisting ceremony at SGBNM High School Armori.", aiHint: "flag hoisting ceremony SGBNM High School Armori" },
  { id: "13", type: "image", src: "/images/HomePage.webp", alt: "Entrance and building of SGBNM High School Armori", description: "A welcoming view of the SGBNM High School Armori campus and entrance.", aiHint: "SGBNM High School Armori building campus entrance" },
  { id: "14", type: "image", src: "/images/Independence Standing.webp", alt: "Students standing during Independence Day celebration at SGBNM High School Armori", description: "Students participating in the Independence Day celebration at SGBNM High School Armori.", aiHint: "students independence day celebration SGBNM High School Armori" },
  { id: "15", type: "image", src: "/images/Pic with Flag.webp", alt: "Students proudly posing with the Indian flag at SGBNM High School Armori", description: "Students showing their patriotism with the Indian flag at SGBNM High School Armori.", aiHint: "students indian flag patriotism SGBNM High School Armori" },
];

const flagHostingItem = initialGalleryItems.find(item => item.src === "/images/Flag osting.webp");
const otherItems = initialGalleryItems.filter(item => item.src !== "/images/Flag osting.webp");

// Simple shuffle function (Fisher-Yates)
function shuffleArray(array: GalleryItem[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const galleryItems: GalleryItem[] = flagHostingItem ? [flagHostingItem, ...shuffleArray(otherItems)] : shuffleArray(initialGalleryItems);

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
