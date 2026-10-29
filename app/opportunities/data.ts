// PLACEHOLDER CONTENT: the projects below are illustrative and were written to fill the layout.
// Replace them with real E7 projects (or remove them) before this goes live.

export type ProjectStatus = "Completed" | "Under construction" | "In design" | "Ongoing" | "Installing";

export type Project = {
  name: string;
  location: string;
  client: string;
  status: ProjectStatus;
  timeline: string;
  scope: string;
  summary: string;
};

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
  projects: Project[];
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
    projects: [
      {
        name: "Family water park",
        location: "Madurai district",
        client: "Private developer",
        status: "Under construction",
        timeline: "Opening planned for 2027",
        scope: "6 acres · wave pool, 4 slide towers, children's splash zone",
        summary:
          "A day-trip water park on the outskirts of the city. E7 prepared the master plan and is supplying and installing all slides and water play equipment.",
      },
      {
        name: "Dinosaur trail and edutainment zone",
        location: "Salem",
        client: "Resort operator",
        status: "Completed",
        timeline: "Opened March 2026",
        scope: "14 animatronic figures along a shaded walking trail, plus a fossil dig pit",
        summary:
          "A walk-through attraction added to an existing resort to bring in school groups on weekdays.",
      },
      {
        name: "Indoor game zone",
        location: "Coimbatore",
        client: "Retail mall",
        status: "In design",
        timeline: "Layout approval in progress",
        scope: "9,000 sq ft · arcade, VR bays and a toddler soft play area",
        summary: "A family entertainment centre on an upper floor of a mall, planned to anchor its food court.",
      },
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
    projects: [
      {
        name: "Festival-season street illumination",
        location: "Madurai",
        client: "Private event organiser",
        status: "Completed",
        timeline: "April 2026",
        scope: "LED arches and motif lighting along a 2 km route",
        summary: "Supplied, installed and maintained for the full festival period, then taken down within three days.",
      },
      {
        name: "Illuminated evening garden",
        location: "Coimbatore",
        client: "Leisure park",
        status: "Installing",
        timeline: "Opening for the 2026 holiday season",
        scope: "Light sculptures, a walk-through tunnel and pathway lighting",
        summary: "Turns an existing daytime park into an evening attraction with a separate ticket.",
      },
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
    projects: [
      {
        name: "Glamping site",
        location: "The Nilgiris",
        client: "Resort owner",
        status: "Completed",
        timeline: "Phase 1 opened 2026",
        scope: "12 safari tents on raised decks, with a common dining tent",
        summary: "A tented stay on a hillside estate. A second phase of eight tents is in planning.",
      },
      {
        name: "School playground and open-air gym",
        location: "Tiruchirappalli",
        client: "School group",
        status: "Completed",
        timeline: "Handed over June 2026",
        scope: "Two play areas with safety surfacing, and 10 outdoor fitness stations",
        summary: "Installed during the summer break across two campuses.",
      },
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
    projects: [
      {
        name: "Water park food court",
        location: "Madurai district",
        client: "Private developer",
        status: "In design",
        timeline: "Opening with the park in 2027",
        scope: "8 counters around a shared central kitchen, seating for 250",
        summary: "Planned alongside the family water park E7 is building on the same site.",
      },
      {
        name: "Container café",
        location: "East Coast Road, near Mahabalipuram",
        client: "Independent café owner",
        status: "Completed",
        timeline: "Opened 2026",
        scope: "Two 20 ft containers with a kitchen, service counter and deck seating",
        summary: "Built off-site and installed in under two weeks.",
      },
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
    projects: [
      {
        name: "Single-screen cinema upgrade",
        location: "Pollachi",
        client: "Independent cinema owner",
        status: "Completed",
        timeline: "Reopened January 2026",
        scope: "Recliner seating, laser projection and a new sound system for 180 seats",
        summary: "Upgraded in stages so the cinema only closed for three weeks.",
      },
      {
        name: "India–China student cultural exchange",
        location: "Coimbatore and Shaoxing",
        client: "College partners",
        status: "In design",
        timeline: "First exchange planned for 2027",
        scope: "Music and dance performances, workshops and campus visits in both countries",
        summary: "Developed with our representative office in Shaoxing.",
      },
    ],
  },
];

export function getOpportunity(slug: string) {
  return opportunities.find((o) => o.slug === slug);
}
