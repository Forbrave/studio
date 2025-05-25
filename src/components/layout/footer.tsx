
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/70">
        <p>
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
        <p className="mt-1">
          Empowering students, building futures.
        </p>
      </div>
    </footer>
  );
}
