"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, GraduationCap, Briefcase } from "lucide-react"

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false,
})
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), {
  ssr: false,
})
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), {
  ssr: false,
})
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
})

// Location data
const locations = [
  {
    id: 1,
    name: "BAE Systems Digital Intelligence",
    type: "work",
    position: [3.1319, 101.6841] as [number, number], // Kuala Lumpur
    period: "Sept 2018 - May 2021 & Feb 2023 - Present",
    role: "Full Stack Developer",
    description: "Currently working on large-scale microservices and microfrontends architecture.",
    icon: <Briefcase className="h-4 w-4" />,
    color: "bg-teal-500",
  },
  {
    id: 2,
    name: "Configura Pacific Sdn Bhd",
    type: "work",
    position: [3.1591, 101.7197] as [number, number], // Kuala Lumpur
    period: "May 2021 - Feb 2023",
    role: "Developer",
    description: "Primary Front-End Developer for CAD software companion web application.",
    icon: <Briefcase className="h-4 w-4" />,
    color: "bg-teal-600",
  },
  {
    id: 4,
    name: "Universiti Kuala Lumpur Malaysia France Institute",
    type: "education",
    position: [2.9285, 101.7584] as [number, number], // Bangi, Selangor
    period: "Sept 2013 - Jan 2017",
    role: "Bachelor Degree",
    description: "Industrial Automation & Robotics. Founded UniKL Robotique Society.",
    icon: <GraduationCap className="h-4 w-4" />,
    color: "bg-blue-500",
  },
  {
    id: 5,
    name: "Korea University of Technology and Education",
    type: "education",
    position: [36.7635, 127.2816] as [number, number], // Cheonan, South Korea
    period: "Feb 2016 - July 2016",
    role: "Exchange Student",
    description: "School of Computer Science exchange program.",
    icon: <GraduationCap className="h-4 w-4" />,
    color: "bg-blue-600",
  },
  {
    id: 6,
    name: "Universitas Airlangga",
    type: "volunteer",
    position: [-7.2575, 112.7521] as [number, number], // Surabaya, Indonesia
    period: "January 2016",
    role: "Volunteer",
    description: "Community Empowerment Program - educating children on hygiene and English.",
    icon: <Building2 className="h-4 w-4" />,
    color: "bg-green-500",
  },
]

interface CustomMarkerProps {
  location: (typeof locations)[0]
  onMarkerClick: (location: (typeof locations)[0]) => void
}

function CustomMarker({ location, onMarkerClick }: CustomMarkerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet.default ?? leaflet)
    })
  }, [])

  if (!L) return null

  // Create custom icon
  const customIcon = L.divIcon({
    html: `
      <div class="relative">
        <div class="w-8 h-8 ${location.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            ${location.type === "work"
        ? '<path d="M20 6h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8 4h8v2H8V4zm12 16H4V8h16v12z"/>'
        : location.type === "education"
          ? '<path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>'
          : '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>'
      }
          </svg>
        </div>
        <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-white"></div>
      </div>
    `,
    className: "custom-marker",
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  })

  return (
    <Marker
      position={location.position}
      icon={customIcon}
      eventHandlers={{
        click: () => onMarkerClick(location),
      }}
    >
      <Popup>
        <div className="p-2 min-w-[250px]">
          <div className="flex items-start gap-2 mb-2">
            <div className={`p-1 ${location.color} rounded text-white`}>{location.icon}</div>
            <div>
              <h3 className="font-semibold text-sm">{location.name}</h3>
              <p className="text-xs text-gray-500">{location.period}</p>
            </div>
          </div>
          <p className="text-sm font-medium mb-1">{location.role}</p>
          <p className="text-xs text-gray-600">{location.description}</p>
          <Badge
            variant="secondary"
            className={`mt-2 text-xs ${location.type === "work"
              ? "bg-teal-100 text-teal-800"
              : location.type === "education"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
              }`}
          >
            {location.type.charAt(0).toUpperCase() + location.type.slice(1)}
          </Badge>
        </div>
      </Popup>
    </Marker>
  )
}

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null)

  useEffect(() => {
    // Dynamically add Leaflet CSS once (avoids MIME/type & CSP issues)
    const leafletCssId = "leaflet-css"
    if (!document.getElementById(leafletCssId)) {
      const link = document.createElement("link")
      link.id = leafletCssId
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      link.crossOrigin = ""
      document.head.appendChild(link)
    }
    setMounted(true)
  }, [])

  const handleMarkerClick = (location: (typeof locations)[0]) => {
    setSelectedLocation(location)
  }

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-400" />
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Map */}
        <div className="relative">
          <MapContainer
            center={[15, 100]}
            zoom={4}
            style={{ height: "500px", width: "100%" }}
            className="rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <CustomMarker key={location.id} location={location} onMarkerClick={handleMarkerClick} />
            ))}
          </MapContainer>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">My Journey</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Click on the map markers to explore the places where I&apos;ve worked, studied, and volunteered.
            </p>
          </div>

          {selectedLocation ? (
            <Card className="p-4 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-start gap-3">
                <div className={`p-2 ${selectedLocation.color} rounded text-white`}>{selectedLocation.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold">{selectedLocation.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{selectedLocation.period}</p>
                  <p className="text-sm font-medium mb-2">{selectedLocation.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{selectedLocation.description}</p>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${selectedLocation.type === "work"
                      ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                      : selectedLocation.type === "education"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}
                  >
                    {selectedLocation.type.charAt(0).toUpperCase() + selectedLocation.type.slice(1)}
                  </Badge>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-4 dark:bg-gray-900 dark:border-gray-800">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Select a location on the map to see details</p>
              </div>
            </Card>
          )}

          {/* Legend */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Legend</h4>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Work Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Education</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Volunteer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
