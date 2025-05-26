
import type { LucideIcon } from 'lucide-react';
import { Home, Award, GalleryThumbnails, CalendarDays, Mail } from 'lucide-react';

export const SITE_NAME = "SGBNM High School Armori";
export const SITE_NAME_SHORT = "SGBNM High School";
export const SITE_DESCRIPTION = "Sant Gadge baba Niwasi Matimand High School Armori - Helping students overcome limitations and excel.";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  // { name: "Success Stories", href: "/success-stories", icon: Award }, // Removed this line
  { name: "Gallery", href: "/gallery", icon: GalleryThumbnails },
  { name: "Events", href: "/events", icon: CalendarDays },
  { name: "Contact", href: "/contact", icon: Mail },
];

export const CONTACT_EMAIL = "santgadgebaba318@gmail.com";
export const CONTACT_PHONE = "+91 8605795849";
export const SCHOOL_ADDRESS = "Sant Gadge baba Niwasi Matimand High School, Armori, Gadchiroli, Maharashtra, India";
export const SCHOOL_COORDINATES = { lat: 20.4649, lng: 79.9773 }; // Example coordinates for Armori
