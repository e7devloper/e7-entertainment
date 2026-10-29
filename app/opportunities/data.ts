export type Opportunity = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  /** Matching category under /products, for the "from the catalogue" strip. */
  productCategory: string;
  intro: string[];
  delivers: string[];
};

export const opportunities: Opportunity[] = [
  {
    slug: "amusement-dinosaur-parks",
    title: "Amusement & Dinosaur Parks, Game Zones",
    shortTitle: "Parks & game zones",
    description:
      "Theme parks, water parks, dino and adventure attractions, arcades and VR zones — turnkey concepts built for the next generation of visitors.",
    image: "/images/water-park.jpg",
    alt: "Aerial view of a water park's pools and slides at golden hour",
    productCategory: "amusement-dinosaur-parks",
    intro: [
      "Outside the metros, a family day out often still means a long drive to the nearest big park. Land owners and developers in growing cities are well placed to change that, and the right park can become a regional destination.",
      "We plan and deliver parks of every size, from a one-acre kids' zone to a multi-attraction destination. Rides, slides and animatronics come direct from the factories we work with, and our own team installs, tests and commissions them.",
    ],
    delivers: [
      "Concept, master plan and attraction mix sized to your land and budget",
      "Rides, water slides and dinosaur animatronics sourced direct from the factory",
      "Shipping, customs and on-site installation by our own technicians",
      "Safety testing, commissioning and operator training",
      "Spare parts and maintenance support after opening",
    ],
  },
  {
    slug: "lighting-festival-party",
    title: "Lighting, Festival, Party & Seasonal Products",
    shortTitle: "Lighting & festival",
    description:
      "Decorative, stage and festival lighting plus seasonal and celebration products — moving at scale across fast-growing markets.",
    image: "/images/festival-crowd.jpg",
    alt: "A crowd with hands raised before a lit festival stage at night",
    productCategory: "lighting-festival-party",
    intro: [
      "Festivals, weddings and evening attractions run on light. Demand peaks hard around a few seasons each year, and buyers need stock that arrives on time and works the first night.",
      "We supply decorative, landscape and festival lighting at factory volume, and design and install larger illuminations for organisers, parks and venues.",
    ],
    delivers: [
      "LED motifs, arches, light sculptures and landscape lighting",
      "Festival and seasonal décor, including Diwali, Christmas and wedding ranges",
      "Lighting design for streets, gardens and building façades",
      "Installation, on-site support through the event, and takedown",
    ],
  },
  {
    slug: "sports-tents-outdoor",
    title: "Sports, Tents & Outdoor",
    shortTitle: "Sports & outdoor",
    description:
      "Playground, fitness, camping and glamping gear, and event tents — built for active, outdoor experiences.",
    image: "/images/camping-tents.jpg",
    alt: "Tents pitched across a misty outdoor camping field at dawn",
    productCategory: "sports-tents-outdoor",
    intro: [
      "Hill stations and green spaces draw more visitors every year who want to stay outdoors, not just pass through. Schools and townships are upgrading their play and fitness areas too.",
      "We supply and install outdoor equipment that stands up to sun and monsoon, from playgrounds and open-air gyms to glamping tents and event structures.",
    ],
    delivers: [
      "Playground and outdoor fitness equipment for schools, parks and townships",
      "Glamping tents, decks and fittings for resorts and campsites",
      "Event and marquee tents for hire businesses and venues",
      "Site layout, installation and safety surfacing",
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Setups",
    shortTitle: "Food & beverage",
    description:
      "Food courts, kiosks, food trucks and commercial kitchen equipment for parks, malls and cafés. From layout to daily operations, we deliver ready-to-run setups built for high footfall.",
    image: "/images/container-cafe.jpg",
    alt: "A dockside café and kiosk setup on a waterfront boardwalk",
    productCategory: "food-beverage",
    intro: [
      "At a park or a mall, food is often what decides whether visitors stay for another hour. A well-planned food setup also earns more for every square foot it uses.",
      "We plan and fit out food courts, kiosks, container cafés and food trucks, with commercial kitchen equipment sourced direct from the factory.",
    ],
    delivers: [
      "Food court and kiosk layouts planned around visitor flow",
      "Container cafés, food trucks and carts, fully fitted",
      "Commercial kitchen and beverage equipment",
      "Installation, commissioning and staff orientation",
    ],
  },
  {
    slug: "movies-ott-cinema",
    title: "Movies, Content & OTT, Cinema, Events & Media, Cultural Exchange",
    shortTitle: "Cinema, media & culture",
    description:
      "Cinema and live events, film and content distribution, and cultural exchange programs that turn moments into memories and bridge markets. Connecting screens and stages worldwide.",
    image: "/images/cultural-dance.jpg",
    alt: "A traditional dragon dance performance moving through a city street",
    productCategory: "movies-ott-cinema",
    intro: [
      "Tamil Nadu has one of the strongest film and live-performance cultures anywhere. Screens outside the big cities need modern seating and projection to keep audiences coming, and live events need equipment they can rely on.",
      "Alongside cinema and event equipment, we work on content distribution and cultural exchange, using our offices in Hong Kong, China and India to connect audiences across borders.",
    ],
    delivers: [
      "Cinema seating, projection and sound for single screens and auditoriums",
      "LED walls, stage and sound equipment for concerts and events",
      "Film distribution, licensing, dubbing and subtitling across markets",
      "Cultural exchange events and student programmes between India and China",
    ],
  },
];

export function getOpportunity(slug: string) {
  return opportunities.find((o) => o.slug === slug);
}
