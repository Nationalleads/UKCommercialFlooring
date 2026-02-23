import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Fix for default Leaflet markers in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMapComponent = ({ name, lat, lng }) => {
  // Ensure we have valid numbers
  const position = [lat || 52.4862, lng || -1.8904];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-6 mb-8"
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-96 z-0">
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false} 
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup className="font-sans font-medium text-sm">
              <div className="text-center">
                <strong className="text-[#1a2a4a] text-base block mb-1">{name}</strong>
                <span className="text-gray-500">Birmingham, UK</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        
        {/* Overlay Label */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 z-[1000] flex items-center gap-2">
          <MapPin size={16} className="text-[#ff8c42]" />
          <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Area Map</span>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-right">Map data © OpenStreetMap contributors</p>
    </motion.div>
  );
};

export default LocationMapComponent;