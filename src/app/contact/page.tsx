
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import ContactForm from '@/components/contact-form';
// import MapComponent from '@/components/map'; // Removed MapComponent import
import { CONTACT_EMAIL, CONTACT_PHONE, SCHOOL_ADDRESS } from '@/lib/constants'; // Removed SCHOOL_COORDINATES
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with SGBNM High School Armori. Find our address, contact details, and send us a message. Location: ${SCHOOL_ADDRESS}`,
};

export default function ContactPage() {
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
        <div className="aspect-[4/3] md:aspect-video w-full rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14951.724934225529!2d79.98310769999999!3d20.4680174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2c8d30398483b5%3A0x53e4006d8fbd7b68!2sSant%20Gadgebaba%20Nivasi%20Matimand%20Vidhyalay%20Armori%2C%20Dist%20-gadchiroli!5e0!3m2!1sen!2sin!4v1748176157401!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen={true} // React uses boolean for allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
