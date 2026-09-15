import { withBase } from '../utils/paths';

export type PhotoOrientation = 'landscape' | 'portrait';

export interface Photo {
  /** Permanent internal identifier. Keep this unchanged after publishing. */
  id: string;
  /** Human-readable URL segment, for example: delta-a350-atl-01. */
  slug: string;
  /** Local public path, for example: /images/photography/delta-a350-atl-01.jpg. */
  image: string;
  title: string;
  aircraftType: string;
  registration: string;
  airline: string;
  airport: string;
  location: string;
  date: string;
  camera: string;
  lens: string;
  alt: string;
  featured: boolean;
  description?: string;
  orientation?: PhotoOrientation;
}

/**
 * HOW TO ADD A PHOTOGRAPH
 *
 * 1. Put the image in /public/images/photography/.
 * 2. Copy the example object below into `photos` and remove the leading `//`.
 * 3. Give `id` and `slug` unique, stable values. Once published, do not rename
 *    the slug: it is the permanent detail-page URL at /gallery/{slug}.
 * 4. Set `featured: true` only when the image should be eligible for the Home hero.
 *
 * Example:
 * {
 *   id: 'photo-delta-a350-atl-01',
 *   slug: 'delta-a350-atl-01',
 *   image: '/images/photography/delta-a350-atl-01.jpg',
 *   title: 'Delta Airbus A350 at Atlanta',
 *   aircraftType: 'Airbus A350-900',
 *   registration: 'N501DN',
 *   airline: 'Delta Air Lines',
 *   airport: 'ATL',
 *   location: 'Atlanta, Georgia',
 *   date: '2026-09-15',
 *   camera: 'Nikon Z8',
 *   lens: 'NIKKOR Z 180-600mm f/5.6-6.3 VR',
 *   alt: 'Delta Airbus A350 taxiing at Atlanta',
 *   featured: false,
 *   description: 'Late-afternoon departure from the south runway.', // optional
 *   orientation: 'landscape', // optional; defaults to landscape in the grid
 * },
 */
export const photos: Photo[] = [
  {
    id: 'photo-arrival-a350-atl-01',
    slug: 'team-usa-special-livery',
    image: '/images/photography/detla-a350-atl-01.JPG',
    title: 'Delta Team USA Spevial Livery',
    aircraftType: 'Airbus A350-900',
    registration: 'N-531DN',
    airline: 'Delta Air Lines',
    airport: 'ATL',
    location: 'Atlanta, Georgia',
    date: '2026-07-26',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Delta Team USA Special Livery Airbus A350-900 taxiing at Atlanta',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 'photo-arrival-a350-atl-02',
    slug: 'team-usa-special-livery-02',
    image: '/images/photography/delta-a350-atl-02.JPG',
    title: 'Delta Team USA Spevial Livery',
    aircraftType: 'Airbus A350-900',
    registration: 'N-531DN',
    airline: 'Delta Air Lines',
    airport: 'ATL',
    location: 'Atlanta, Georgia',
    date: '2026-07-26',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Delta Team USA Special Livery Airbus A350-900 taxiing at Atlanta',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-arrival-a350-atl-03',
    slug: 'sas-a350-900-landing',
    image: '/images/photography/sas-a350-atl-01.JPG',
    title: 'SAS A350-900 Landing',
    aircraftType: 'Airbus A350-900',
    registration: 'SE-RSF',
    airline: 'Scandinavian Airlines',
    airport: 'ATL',
    location: 'Atlanta, Georgia',
    date: '2026-07-26',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'SAS A350-900 landing at Atlanta',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-arrival-b777-atl-01',
    slug: 'afr-b777-landing',
    image: '/images/photography/afr-b772-atl-01.JPG',
    title: 'Air France B777 Landing',
    aircraftType: 'Boeing B777-200ER',
    registration: 'F-GSPJ',
    airline: 'Air France',
    airport: 'ATL',
    location: 'Atlanta, Georgia',
    date: '2026-07-26',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Air France B777 landing at Atlanta',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-arrival-crj-dtw-01',
    slug: 'aal-crj-landing',
    image: '/images/photography/aal-crj-dtw-01.JPG',
    title: 'American Airlines CRJ Landing',
    aircraftType: 'CRJ-900',
    registration: 'N-600NN',
    airline: 'American Airlines',
    airport: 'DTW',
    location: 'Detroit, Michigan',
    date: '2026-01-19',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'American Airlines CRJ landing at Detroit',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-taxi-a350-hnd-01',
    slug: 'jal-a350-taxi',
    image: '/images/photography/jal-a350-hnd-02.jpeg',
    title: 'Japan Airlines One World Livery B777 Taxiing',
    aircraftType: 'Airbus B777-300ER',
    registration: 'JA-732J:',
    airline: 'Japan Airlines',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2025-12-22',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Japan Airlines B777 One World Livery taxiing at Tokyo Haneda alongside B734 and A350',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-taxi-b777-hnd-01',
    slug: 'jal-b777-taxi',
    image: '/images/photography/jal-b777-hnd-01.jpeg',
    title: 'Japan Airlines One World Livery B777 Taxiing with Mt. Fuji',
    aircraftType: 'Airbus B777-300ER',
    registration: 'JA-732J:',
    airline: 'Japan Airlines',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2025-12-22',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Japan Airlines B777 One World Livery taxiing at Tokyo Haneda with Mt. Fuji in the background',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-park-b747-ngo-01',
    slug: 'boeing-b747-park',
    image: '/images/photography/boeing-b747-ngo-01.jpeg',
    title: 'Boeing B747 Dream-Lifter Parked at Nagoya Chubu Airport',
    aircraftType: 'Boeing B747-400 LCF',
    registration: 'N-747BC:',
    airline: 'Boeing',
    airport: 'NGO',
    location: 'Nagoya, Japan',
    date: '2025-8-1',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Boeing B747 Dream-Lifter parked at Nagoya Chubu Airport',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-arrival-b777-xmn-01',
    slug: 'ual-b777-arrival',
    image: '/images/photography/ual-b777-xmn-01.jpeg',
    title: 'United Airlines B777 Arrival at Xiamen Airport for Maintenance',
    aircraftType: 'Boeing B777-300ER',
    registration: 'N-747BC:',
    airline: 'United Airlines',
    airport: 'XMN',
    location: 'Xiamen, China',
    date: '2024-1-12',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'United Airlines B777 arriving at Xiamen Airport for Maintenance',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-takeoff-a350-hnd-01',
    slug: 'jal-a350-takeoff',
    image: '/images/photography/jal-a350-hnd-01.jpeg',
    title: 'Japan Airlines A350 Shohei Otani Livery Takeoff from Haneda Airport',
    aircraftType: 'Airbus A350-900',
    registration: 'JA-08XJ:',
    airline: 'Japan Airlines',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2024-12-22',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Japan Airlines A350 Shohei Otani Livery taking off from Haneda Airport',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-asiana-a330-hnd-01',
    slug: 'asiana-a330-haneda-01',
    image: '/images/photography/aar-a330-hnd-01.jpeg',
    title: 'Asiana Airlines A330 at Haneda',
    aircraftType: 'Airbus A330',
    registration: 'Unknown',
    airline: 'Asiana Airlines',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2025-12-22',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Asiana Airlines Airbus A330 taxiing at Tokyo Haneda',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-ana-b777-hnd-01',
    slug: 'ana-b777-night-operations-hnd-01',
    image: '/images/photography/ana-b777-hnd-01.jpeg',
    title: 'ANA Night Operations at Haneda',
    aircraftType: 'Boeing 777',
    registration: 'Unknown',
    airline: 'All Nippon Airways',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2024-07-29',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'ANA widebody aircraft being towed at night at Tokyo Haneda',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-ana-b777-hnd-02',
    slug: 'ana-pokemon-livery-hnd-01',
    image: '/images/photography/ana-b777-hnd-02.jpeg',
    title: 'ANA Pokémon Special Livery',
    aircraftType: 'Boeing 777-300ER',
    registration: 'JA784A',
    airline: 'All Nippon Airways',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2024-07-29',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'ANA Boeing 777 in Pokémon special livery taxiing at Tokyo Haneda',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-ana-b787-hnd-01',
    slug: 'ana-b787-departure-hnd-01',
    image: '/images/photography/ana-b787-hnd-01.jpeg',
    title: 'ANA Boeing 787 Departure',
    aircraftType: 'Boeing 787 Dreamliner',
    registration: 'Unknown',
    airline: 'All Nippon Airways',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2024-07-29',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'ANA Boeing 787 departing Tokyo Haneda over the bay',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-blue-angels-sfo-01',
    slug: 'blue-angels-formation-sfo-01',
    image: '/images/photography/cnv-fa18-sfo-01.jpeg',
    title: 'Blue Angels Formation over San Francisco',
    aircraftType: 'Boeing F/A-18 Super Hornet',
    registration: 'Blue Angels Formation',
    airline: 'United States Navy',
    airport: 'SFO',
    location: 'San Francisco, California',
    date: '2023-10-09',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'United States Navy Blue Angels flying in formation over San Francisco',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-delta-a350-atl-03',
    slug: 'delta-a350-atl-03',
    image: '/images/photography/delta-a350-atl-03.JPG',
    title: 'Delta Airbus A350 at Atlanta',
    aircraftType: 'Airbus A350-900',
    registration: 'Unknown',
    airline: 'Delta Air Lines',
    airport: 'ATL',
    location: 'Atlanta, Georgia',
    date: '2026-07-25',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Delta Airbus A350 taxiing past the concourse at Atlanta',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-jal-b787-hnd-02',
    slug: 'jal-b787-night-taxi-hnd-01',
    image: '/images/photography/jal-b787-hnd-02.jpeg',
    title: 'Japan Airlines 787 at Dusk',
    aircraftType: 'Boeing 787 Dreamliner',
    registration: 'Unknown',
    airline: 'Japan Airlines',
    airport: 'HND',
    location: 'Tokyo, Japan',
    date: '2024-07-29',
    camera: 'Nikon Z6',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Japan Airlines Boeing 787 taxiing at dusk at Tokyo Haneda',
    featured: false,
    orientation: 'landscape',
  },
  {
    id: 'photo-jal-b787-lax-01',
    slug: 'jal-oneworld-b787-lax-01',
    image: '/images/photography/jal-b787-lax-01.JPG',
    title: 'Japan Airlines oneworld 787 at Los Angeles',
    aircraftType: 'Boeing 787-9 Dreamliner',
    registration: 'JA861J',
    airline: 'Japan Airlines',
    airport: 'LAX',
    location: 'Los Angeles, California',
    date: '2026-07-26',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
    alt: 'Japan Airlines Boeing 787 in oneworld livery landing at Los Angeles',
    featured: false,
    orientation: 'landscape',
  },
];

const ids = new Set<string>();
const slugs = new Set<string>();

for (const photo of photos) {
  if (ids.has(photo.id)) throw new Error(`Duplicate photo id: ${photo.id}`);
  if (slugs.has(photo.slug)) throw new Error(`Duplicate photo slug: ${photo.slug}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(photo.slug)) {
    throw new Error(`Photo slug must be lowercase and hyphenated: ${photo.slug}`);
  }
  ids.add(photo.id);
  slugs.add(photo.slug);
}

export const photoDetailUrl = (photo: Photo) => withBase(`gallery/${photo.slug}`);
export const photoImageUrl = (photo: Photo) => withBase(photo.image);
export const featuredPhoto = photos.find((photo) => photo.featured) ?? photos[0];
