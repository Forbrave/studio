
"use client";

import { Map as GoogleMap, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { Pin } from 'lucide-react';

interface MapProps {
  coordinates: { lat: number; lng: number };
  zoom?: number;
  apiKey?: string | null; 
}

export default function MapComponent({ coordinates, zoom = 15, apiKey }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // To prevent SSR issues with map components or window access
    return <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Loading map...</div>;
  }
  
  if (!apiKey) {
    return (
        <div className="w-full h-96 bg-muted rounded-lg flex flex-col items-center justify-center text-center p-4">
            <p className="text-destructive-foreground bg-destructive p-2 rounded-md">Google Maps API Key is missing.</p>
            <p className="text-muted-foreground mt-2 text-sm">Please provide NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables to display the map.</p>
        </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <GoogleMap
        defaultCenter={coordinates}
        defaultZoom={zoom}
        mapId="sgbnm_school_map" // Optional: for Cloud-based map styling
        className="w-full h-full"
        gestureHandling="greedy"
        disableDefaultUI={false}
      >
        <AdvancedMarker position={coordinates} title="SGBNM High School">
          <Pin className="text-primary h-10 w-10 transform -translate-y-full" />
        </AdvancedMarker>
      </GoogleMap>
    </div>
  );
}
