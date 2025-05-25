
import type { LucideIcon } from 'lucide-react';
import { Home, Award, GalleryThumbnails, CalendarDays, Mail } from 'lucide-react';

export const SITE_NAME = "SGBNM High School Armori";
export const SITE_NAME_SHORT = "SGBNM High School";
export const SITE_DESCRIPTION = "Sanyt Gadge baba Niwasi Matimand High School Armori - Helping students overcome limitations and excel.";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Success Stories", href: "/success-stories", icon: Award },
  { name: "Gallery", href: "/gallery", icon: GalleryThumbnails },
  { name: "Events", href: "/events", icon: CalendarDays },
  { name: "Contact", href: "/contact", icon: Mail },
];

export const CONTACT_EMAIL = "info@sgbnmarmori.edu";
export const CONTACT_PHONE = "+91 123 456 7890";
export const SCHOOL_ADDRESS = "Sanyt Gadge baba Niwasi Matimand High School, Armori, Gadchiroli, Maharashtra, India";
export const SCHOOL_COORDINATES = { lat: 20.4649, lng: 79.9773 }; // Example coordinates for Armori
