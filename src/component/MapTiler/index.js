import React, { Children, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import useGeoLocation from "../../hooks/useGeoLocation";
import ButtonForm from "../UI/Button";

const initialCenterMap = {
  lat: 44.957024,
  lng: 34.101906,
};

const MapContainerRef = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <MapContainer {...props} inputRef={ref}>
      {children}
    </MapContainer>
  );
});

export const MapTiler = () => {
  const [center, setCenter] = useState(initialCenterMap);
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <ButtonForm onClick={showMyLocation}>Locate Me</ButtonForm>
      <div>My map tiller</div>

      <MapContainerRef
        scrollWheelZoom={true}
        style={{
          height: "100vh",
          width: "100vw",
        }}
        center={initialCenterMap}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />

        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapContainerRef>
    </>
  );
};
