
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import MapComponent from '@/components/map';
import { CONTACT_EMAIL, CONTACT_PHONE, SCHOOL_ADDRESS, SCHOOL_COORDINATES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with SGBNM High School Armori. Find our address, contact details, and send us a message. Location: ${SCHOOL_ADDRESS}`,
};

export default function ContactPage() {
  // The API key should be set as an environment variable NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  // It's accessed here to pass to the client component, but it's better if MapComponent handles it internally if possible.
  // For this setup, passing it from server component to client component.
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || null;

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or want to learn more about our school, please don't hesitate to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Get in Touch</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary" />
              Our Address
            </h3>
            <p className="text-foreground/80 flex items-start">
              <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
              <span>{SCHOOL_ADDRESS}</span>
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Details</h3>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center text-foreground mb-8">Find Us on the Map</h2>
        <MapComponent coordinates={SCHOOL_COORDINATES} apiKey={googleMapsApiKey} />
         {!googleMapsApiKey && (
          <p className="text-center text-sm text-destructive mt-4">
            Map display requires a Google Maps API Key. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
          </p>
        )}
      </section>
    </div>
  );
}
