
"use client";

import { APIProvider as GoogleMapsAPIProvider } from '@vis.gl/react-google-maps';
import type { ReactNode } from 'react';

interface MapsApiProviderProps {
  children: ReactNode;
}

export default function MapsApiProvider({ children }: MapsApiProviderProps) {
  return (
    <GoogleMapsAPIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      {children}
    </GoogleMapsAPIProvider>
  );
}
