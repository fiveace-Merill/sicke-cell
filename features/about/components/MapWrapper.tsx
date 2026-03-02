"use client"
import dynamic from "next/dynamic"
const MapView = dynamic(
  () => import('@/features/about/components/MapView'),
  { ssr: false }
)

export default function MapWrapper() {
  const defaultPosition = [-1.2833, 36.8167];
  const defaultZoom = 13;
  const markerPopup = "sample location";

  return (
    <>
      <MapView position={defaultPosition} zoom={defaultZoom} popupText={markerPopup} />
    </>
  );
}

