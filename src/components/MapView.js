import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function MapView({ formData }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // default location
        zoom: 10,
      });

      formData.forEach((contact) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: contact.address }, (results, status) => {
          if (status === 'OK') {
            const marker = new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
            });
          } else {
            console.log(`Geocode was not successful for the following reason: ${status}`);
          }
        });
      });
    });
  }, [formData]);

  return <div ref={mapRef} style={{ height: '400px' }} />;
}