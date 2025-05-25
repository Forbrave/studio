
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
    {
      id: "1",
      title: "Annual Sports Day",
      date: addDays(monthStart, 5),
      description: "Join us for a day of fun, games, and friendly competition.",
      type: "Celebration",
      icon: PartyPopper,
    },
    {
      id: "2",
      title: "Parent-Teacher Meeting",
      date: addDays(monthStart, 12),
      description: "Discuss student progress and school activities with teachers.",
      type: "Academic",
      icon: GraduationCap,
    },
    {
      id: "3",
      title: "Art & Craft Workshop",
      date: addDays(monthStart, 19),
      description: "A creative workshop for students to explore their artistic talents.",
      type: "Workshop",
      icon: SchoolIcon,
    },
    {
      id: "4",
      title: "Mid-term Break",
      date: addDays(monthStart, 25),
      description: "School closed for mid-term break.",
      type: "Holiday",
      icon: PartyPopper,
    },
     {
      id: "5",
      title: "Science Fair",
      date: addDays(monthStart, 35), // Next month
      description: "Showcasing innovative science projects by our students.",
      type: "Academic",
      icon: GraduationCap,
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
