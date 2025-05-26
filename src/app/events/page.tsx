
"use client"; // Calendar component and state management make this a client component

import { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { PartyPopper, GraduationCap, School as SchoolIcon } from 'lucide-react';
import { format, addDays, startOfMonth } from 'date-fns';

interface SchoolEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: 'Holiday' | 'Academic' | 'Celebration' | 'Workshop';
  icon: React.ElementType;
}

const generateMockEvents = (currentDate: Date): SchoolEvent[] => {
  const monthStart = startOfMonth(currentDate);
  return [
    // Existing events
    {
      id: "1",
      title: "Annual Sports Day",
      date: addDays(monthStart, 5),
      description: "Join us for a day of fun, games, and friendly competition.",
      type: "Celebration",
      icon: PartyPopper, // Consider using a different icon for sports day?
    },
    {
      id: "2",
      title: "Parent-Teacher Meeting",
      date: addDays(monthStart, 12),
      description: "Discuss student progress and school activities with teachers.",
      type: "Academic", // Keep as Academic
      icon: GraduationCap,
    },
    {
      id: "3",
      title: "Art & Craft Workshop",
      date: addDays(monthStart, 19),
      description: "A creative workshop for students to explore their artistic talents.", // Keep as Workshop
      type: "Workshop", 
      icon: SchoolIcon,
    },
    {
      id: "4",
      title: "Mid-term Break",
      date: addDays(monthStart, 25),
      description: "School closed for mid-term break.", // Keep as Holiday
      type: "Holiday", 
      icon: PartyPopper, // Keep as PartyPopper or find a different holiday icon
    },
     {
      id: "5",
      title: "Science Fair",
      date: addDays(monthStart, 35), // Next month
      description: "Showcasing innovative science projects by our students.",
      type: "Academic", // Keep as Academic
      icon: GraduationCap,
    },
    // Maharashtra Public Holidays 2025
    {
      id: "holiday-2025-01-26",
      title: "Republic Day",
      date: new Date("2025-01-26"),
      description: "Republic Day of India",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-02-19",
      title: "Chhatrapati Shivaji Maharaj Jayanti",
      date: new Date("2025-02-19"),
      description: "Birth anniversary of Chhatrapati Shivaji Maharaj",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-02-26",
      title: "Maha Shivaratri",
      date: new Date("2025-02-26"),
      description: "Religious observance",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-03-14",
      title: "Holi",
      date: new Date("2025-03-14"),
      description: "Festival of Colors",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-03-30",
      title: "Gudi Padwa",
      date: new Date("2025-03-30"),
      description: "Marathi New Year",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-03-31",
      title: "Idul Fitr",
      date: new Date("2025-03-31"),
      description: "End of Ramadan",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-04-06",
      title: "Ram Navami",
      date: new Date("2025-04-06"),
      description: "Birth of Lord Rama",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-04-10",
      title: "Mahavir Jayanti",
      date: new Date("2025-04-10"),
      description: "Birth anniversary of Mahavir",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-04-14",
      title: "Dr Ambedkar Jayanti",
      date: new Date("2025-04-14"),
      description: "Birth anniversary of Dr. B.R. Ambedkar",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-04-18",
      title: "Good Friday",
      date: new Date("2025-04-18"),
      description: "Religious observance",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-05-01",
      title: "Maharashtra Day",
      date: new Date("2025-05-01"),
      description: "Formation of Maharashtra state",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-05-12",
      title: "Buddha Purnima",
      date: new Date("2025-05-12"),
      description: "Birth of Gautama Buddha",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-06-07",
      title: "Bakrid / Eid al Adha",
      date: new Date("2025-06-07"),
      description: "Feast of Sacrifice",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-07-06",
      title: "Muharram",
      date: new Date("2025-07-06"),
      description: "Islamic New Year and Remembrance",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-08-15",
      title: "Independence Day",
      date: new Date("2025-08-15"),
      description: "Independence Day of India",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-08-16",
      title: "Parsi New Year",
      date: new Date("2025-08-16"),
      description: "Navroz - Parsi New Year",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-08-27",
      title: "Ganesh Chaturthi",
      date: new Date("2025-08-27"),
      description: "Birth of Lord Ganesha",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-09-05",
      title: "Eid e Milad",
      date: new Date("2025-09-05"),
      description: "Birth of Prophet Muhammad",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-10-02-vijayadashami", // Unique ID for Vijaya Dashami
      title: "Vijaya Dashami",
      date: new Date("2025-10-02"),
      description: "Dussehra",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-10-02-gandhi", // Unique ID for Gandhi Jayanti
      title: "Gandhi Jayanti",
      date: new Date("2025-10-02"),
      description: "Birth anniversary of Mahatma Gandhi",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-10-21",
      title: "Diwali",
      date: new Date("2025-10-21"),
      description: "Festival of Lights",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-10-22",
      title: "Deepavali Holiday",
      date: new Date("2025-10-22"),
      description: "Day after Diwali",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-11-05",
      title: "Guru Nanak Jayanti",
      date: new Date("2025-11-05"),
      description: "Birth anniversary of Guru Nanak Dev",
      type: "Holiday",
      icon: PartyPopper,
    },
    {
      id: "holiday-2025-12-25",
      title: "Christmas Day",
      date: new Date("2025-12-25"),
      description: "Christmas celebration",
      type: "Holiday",
      icon: PartyPopper,
    },
  ];
};


export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<SchoolEvent[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate events based on the initial date (current month)
    setEvents(generateMockEvents(new Date()));
  }, []);

  useEffect(() => {
    if (date) {
      // Regenerate or filter events when the selected month in the calendar changes
      setEvents(generateMockEvents(date));
    }
  }, [date]);

  if (!isMounted) {
     return (
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Events Calendar</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay updated with our school's important dates and upcoming events.
          </p>
        </section>
        <div className="text-center py-10">Loading calendar and events...</div>
      </div>
    );
  }

  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5); // Show next 5 upcoming events

  const getBadgeVariant = (type: SchoolEvent['type']): "default" | "secondary" | "destructive" | "outline" => {
    switch (type) {
      case 'Celebration': return 'default'; // Uses primary color
      case 'Academic': return 'secondary';
      case 'Workshop': return 'outline'; // Will use accent if styled further
      case 'Holiday': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Events Calendar</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Stay updated with our school's important dates and upcoming events.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardContent className="p-2 md:p-4 flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
                modifiers={{
                  highlighted: events.map(event => event.date),
                }}
                modifiersStyles={{
                  highlighted: { backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', borderRadius: 'var(--radius)' },
                }}
                onMonthChange={(month) => setDate(month)} // Update displayed events when month changes
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <event.icon className="h-5 w-5 text-primary" />
                      {event.title}
                    </CardTitle>
                    <Badge variant={getBadgeVariant(event.type)} className={event.type === 'Celebration' ? 'bg-primary text-primary-foreground' : ''}>
                      {event.type}
                    </Badge>
                  </div>
                  <CardDescription className="!mt-1">
                    {format(event.date, "PPP")} {/* e.g., Jun 20, 2024 */}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{event.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-foreground/70">No upcoming events for the selected period. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  );
}
