import { MapContainer, TileLayer, Marker, Circle, Tooltip } from 'react-leaflet';
import "./map.css";

interface MapProps {
    lat: number;
    lng: number;
    countryName: string;
    fullscreen?: boolean; // Add an optional prop for fullscreen mode
}

export default function Map({ lat, lng, countryName, fullscreen = false }: MapProps) {
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={4}
            scrollWheelZoom={false}
            className={fullscreen ? "fullscreen-map" : "responsive-map"} // Apply the appropriate class
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Tooltip permanent direction="top" offset={[0, -15]} className="map-tooltip">
                    {countryName}
                </Tooltip>
            </Marker>
            <Circle
                center={[lat, lng]}
                radius={50000} // Adjust the radius as needed (in meters)
                color="blue"
                fillColor="blue"
                fillOpacity={0.2}
            />
        </MapContainer>
    );
}
