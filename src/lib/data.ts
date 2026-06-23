/**
 * Kayigi Tours & Travel — content source of truth.
 * Ported from kayigi-tours-design-system/project/ui_kits/website/data.jsx.
 * No CMS yet; this is the single read-only data store.
 */

export type ExperienceCategory = "Gorilla Trek" | "Chimps" | "Game Drive";

export type ExperienceCatClass = "forest" | "gold";

export type ItineraryDay = {
  /** Day label, e.g. "Day 1", "Day 2", "Days 4–6". */
  d: string;
  /** Day title, e.g. "Kampala → Bwindi". */
  t: string;
  /** Day body / description. */
  b: string;
};

export type Experience = {
  id: string;
  /** URL slug for /safaris/[slug]. Kebab-case of the title. */
  slug: string;
  title: string;
  cat: ExperienceCategory;
  catClass: ExperienceCatClass;
  /** lucide-react icon name; resolved at render site. */
  icon: string;
  park: string;
  days: string;
  group: string;
  grade: string;
  /** Display price string — currently "Contact for rate" pending client rates. */
  price: string;
  /** Photo variant key (`photo--forest`) or local asset path beginning with `/`. */
  photo: string;
  blurb: string;
  days_list: ItineraryDay[];
  includes: string[];
};

export type Vehicle = {
  id: string;
  name: string;
  seats: string;
  trans: string;
  drive: string;
  roof: string;
  /** Display price string — currently "Contact for rate" pending client rates. */
  price: string;
  photo: string;
  specs: string[];
};

export const EXPERIENCES: readonly Experience[] = [
  {
    id: "bwindi",
    slug: "bwindi-gorilla-trek",
    title: "Bwindi Gorilla Trek",
    cat: "Gorilla Trek",
    catClass: "forest",
    icon: "trees",
    park: "Bwindi Impenetrable Forest",
    days: "3 days",
    group: "Max 8",
    grade: "Moderate",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-forest-road.png",
    blurb:
      "Climb misted hills to spend a permitted hour with a mountain gorilla family.",
    days_list: [
      {
        d: "Day 1",
        t: "Kampala → Bwindi",
        b: "Scenic drive south through tea country and the Switzerland-of-Africa hills, arriving at your forest-edge lodge by dusk.",
      },
      {
        d: "Day 2",
        t: "Gorilla trek",
        b: "An early briefing, then into the forest with trackers. Reach the family, spend your permitted hour, and return for a hot lunch.",
      },
      {
        d: "Day 3",
        t: "Community walk → return",
        b: "A morning Batwa cultural walk before the drive back to Kampala or onward to Queen Elizabeth.",
      },
    ],
    includes: [
      "Gorilla permit",
      "Park transfers in a 4×4",
      "Driver-guide",
      "2 nights lodge",
      "Daily breakfast & packed lunch",
    ],
  },
  {
    id: "kibale",
    slug: "kibale-chimp-tracking",
    title: "Kibale Chimp Tracking",
    cat: "Chimps",
    catClass: "forest",
    icon: "leaf",
    park: "Kibale Forest",
    days: "2 days",
    group: "Max 6",
    grade: "Easy–Moderate",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-kibale-forest.png",
    blurb:
      "Follow the calls of 1,500 chimpanzees through one of Africa's richest rainforests.",
    days_list: [
      {
        d: "Day 1",
        t: "Arrive Kibale",
        b: "Afternoon transfer and a guided wetland walk at Bigodi, alive with birds and monkeys.",
      },
      {
        d: "Day 2",
        t: "Chimp tracking",
        b: "Morning permit walk to habituated chimps, then transfer onward.",
      },
    ],
    includes: [
      "Chimp permit",
      "Driver-guide",
      "1 night lodge",
      "Bigodi wetland walk",
      "Breakfast & lunch",
    ],
  },
  {
    id: "queen",
    slug: "queen-elizabeth-game-drive",
    title: "Queen Elizabeth Game Drive",
    cat: "Game Drive",
    catClass: "gold",
    icon: "sun",
    park: "Queen Elizabeth N.P.",
    days: "3 days",
    group: "Max 7",
    grade: "Easy",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-rwenzori-gate.png",
    blurb:
      "Tree-climbing lions, elephants and a boat cruise on the wildlife-packed Kazinga Channel.",
    days_list: [
      {
        d: "Day 1",
        t: "Into the park",
        b: "Afternoon game drive across the Kasenyi plains for lions, kob and buffalo.",
      },
      {
        d: "Day 2",
        t: "Kazinga cruise",
        b: "Morning drive and an afternoon boat cruise past hippos, elephants and a thousand birds.",
      },
      {
        d: "Day 3",
        t: "Ishasha → out",
        b: "Search the Ishasha sector for famous tree-climbing lions before departure.",
      },
    ],
    includes: [
      "Park fees",
      "Boat cruise",
      "Driver-guide",
      "2 nights lodge",
      "All breakfasts & lunches",
    ],
  },
  {
    id: "murchison",
    slug: "murchison-falls-safari",
    title: "Murchison Falls Safari",
    cat: "Game Drive",
    catClass: "gold",
    icon: "sun",
    park: "Murchison Falls N.P.",
    days: "3 days",
    group: "Max 7",
    grade: "Easy",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-nile-sunset.png",
    blurb:
      "Where the Nile explodes through a 7-metre gap. Giraffe, lion and a falls-base cruise.",
    days_list: [
      {
        d: "Day 1",
        t: "Kampala → Murchison",
        b: "Drive north with a stop at Ziwa Rhino Sanctuary for a tracked rhino walk.",
      },
      {
        d: "Day 2",
        t: "Game drive & cruise",
        b: "Morning drive on the northern bank, afternoon cruise to the foot of the falls.",
      },
      {
        d: "Day 3",
        t: "Top of the Falls",
        b: "Hike to the dramatic top of the falls before the return drive.",
      },
    ],
    includes: [
      "Park fees",
      "Nile boat cruise",
      "Rhino trek",
      "Driver-guide",
      "2 nights lodge",
    ],
  },
  {
    id: "kidepo",
    slug: "kidepo-valley-wilderness",
    title: "Kidepo Valley Wilderness",
    cat: "Game Drive",
    catClass: "gold",
    icon: "sun",
    park: "Kidepo Valley N.P.",
    days: "4 days",
    group: "Max 6",
    grade: "Easy",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-savanna-front.png",
    blurb:
      "Uganda's most remote, most cinematic park — golden plains rimmed by mountains.",
    days_list: [
      {
        d: "Day 1",
        t: "Fly to Kidepo",
        b: "Charter flight over the Karamoja plains to the Narus Valley.",
      },
      {
        d: "Day 2–3",
        t: "Game drives",
        b: "Lions, cheetah, ostrich and vast herds across an empty, golden wilderness.",
      },
      {
        d: "Day 4",
        t: "Karamojong visit → out",
        b: "A morning cultural visit before the flight back.",
      },
    ],
    includes: [
      "Charter flights",
      "Park fees",
      "Driver-guide",
      "3 nights lodge",
      "Full board",
    ],
  },
  {
    id: "grand",
    slug: "grand-uganda-10-days",
    title: "Grand Uganda — 10 Days",
    cat: "Gorilla Trek",
    catClass: "forest",
    icon: "compass",
    park: "Bwindi · Kibale · Queen Elizabeth",
    days: "10 days",
    group: "Private",
    grade: "Moderate",
    price: "Contact for rate",
    photo: "/images/safaris/safari-landcruiser-game-drive.png",
    blurb:
      "Gorillas, chimps and savanna in one unforgettable private journey across the south-west.",
    days_list: [
      {
        d: "Days 1–3",
        t: "Kibale chimps",
        b: "Rainforest tracking and wetland walks to begin.",
      },
      {
        d: "Days 4–6",
        t: "Queen Elizabeth",
        b: "Kazinga cruise and the Ishasha tree-climbing lions.",
      },
      {
        d: "Days 7–10",
        t: "Bwindi gorillas",
        b: "The grand finale — two gorilla treks and a community day.",
      },
    ],
    includes: [
      "Gorilla + chimp permits",
      "All park fees",
      "Private 4×4 & guide",
      "9 nights lodges",
      "Boat cruise",
      "Full board",
    ],
  },
];

export const VEHICLES: readonly Vehicle[] = [
  {
    id: "range-rover-svr",
    name: "Range Rover SVR",
    seats: "5 seats",
    trans: "Automatic · petrol",
    drive: "AWD",
    roof: "Panoramic sunroof",
    price: "Contact for rate",
    photo: "/images/vehicles/range-rover-svr-navy-front.jpeg",
    specs: [
      "V8 Supercharged",
      "Air suspension",
      "Premium interior",
      "Seating for 5",
    ],
  },
  {
    id: "range-rover-sport",
    name: "Range Rover Sport",
    seats: "5 seats",
    trans: "Automatic · diesel",
    drive: "Terrain Response 4×4",
    roof: "Panoramic sunroof",
    price: "Contact for rate",
    photo: "/images/vehicles/range-rover-sport-grey-rear.jpeg",
    specs: [
      "Terrain Response",
      "Meridian sound",
      "Self-levelling suspension",
      "Panoramic roof",
    ],
  },
  {
    id: "mercedes-g63",
    name: "Mercedes-AMG G63",
    seats: "5 seats",
    trans: "Automatic · petrol",
    drive: "4×4 full off-road",
    roof: "Sunroof",
    price: "Contact for rate",
    photo: "/images/vehicles/mercedes-g63-silver-front.jpeg",
    specs: [
      "AMG V8 Biturbo",
      "3 locking differentials",
      "Iconic G-Wagen design",
      "Premium sound system",
    ],
  },
  {
    id: "mercedes-gle350",
    name: "Mercedes-Benz GLE350",
    seats: "5 seats",
    trans: "Automatic · diesel",
    drive: "4MATIC AWD",
    roof: "Panoramic roof",
    price: "Contact for rate",
    photo: "/images/vehicles/mercedes-gle350-black-front.jpeg",
    specs: [
      "4MATIC all-wheel drive",
      "Coupé SUV silhouette",
      "Ambient lighting",
      "Air suspension",
    ],
  },
  {
    id: "toyota-noah",
    name: "Toyota Noah",
    seats: "8 seats",
    trans: "Automatic · petrol",
    drive: "2WD",
    roof: "Standard",
    price: "Contact for rate",
    photo: "/images/vehicles/toyota-noah-white-front.jpeg",
    specs: [
      "8 passenger seats",
      "Sliding rear doors",
      "Ideal for groups",
      "Generous luggage space",
    ],
  },
];
