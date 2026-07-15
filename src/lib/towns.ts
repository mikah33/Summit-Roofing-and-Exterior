export type County =
  | "Bristol County"
  | "Kent County"
  | "Newport County"
  | "Providence County"
  | "Washington County";

export type Region =
  | "East Bay"
  | "Aquidneck Island"
  | "Sakonnet"
  | "Block Island"
  | "South County"
  | "Kent County"
  | "Greater Providence"
  | "Blackstone Valley";

export type Town = {
  slug: string;
  name: string;
  /** How the town is commonly referred to in search, if different from name. */
  akaName?: string;
  county: County;
  region: Region;
  /** Short, factual, defensible one-line description — no invented specifics. */
  blurb: string;
  /** Only set for logistically distinct areas (currently: Block Island). */
  ferryOnly?: boolean;
};

// All 39 Rhode Island cities/towns, minus Providence, Pawtucket, and
// Central Falls per business decision — those three do not get dedicated
// service-area pages.
export const towns: Town[] = [
  // ---------------------------------- East Bay ----------------------------------
  {
    slug: "barrington",
    name: "Barrington",
    county: "Bristol County",
    region: "East Bay",
    blurb: "a coastal Bristol County suburb along Narragansett Bay",
  },
  {
    slug: "bristol",
    name: "Bristol",
    county: "Bristol County",
    region: "East Bay",
    blurb: "a historic waterfront town on Narragansett Bay",
  },
  {
    slug: "warren",
    name: "Warren",
    county: "Bristol County",
    region: "East Bay",
    blurb: "a small coastal town between Bristol and East Providence",
  },

  // -------------------------------- Kent County --------------------------------
  {
    slug: "coventry",
    name: "Coventry",
    county: "Kent County",
    region: "Kent County",
    blurb: "one of Rhode Island's largest towns by land area, spanning suburban and rural Kent County",
  },
  {
    slug: "east-greenwich",
    name: "East Greenwich",
    county: "Kent County",
    region: "Kent County",
    blurb: "a historic waterfront town on Greenwich Cove",
  },
  {
    slug: "warwick",
    name: "Warwick",
    county: "Kent County",
    region: "Kent County",
    blurb: "Rhode Island's second-largest city, with miles of Narragansett Bay shoreline",
  },
  {
    slug: "west-greenwich",
    name: "West Greenwich",
    county: "Kent County",
    region: "Kent County",
    blurb: "a rural, wooded Kent County town",
  },
  {
    slug: "west-warwick",
    name: "West Warwick",
    county: "Kent County",
    region: "Kent County",
    blurb: "a compact, densely built Kent County community",
  },

  // ------------------------------ Aquidneck Island ------------------------------
  {
    slug: "jamestown",
    name: "Jamestown",
    county: "Newport County",
    region: "Aquidneck Island",
    blurb: "an island community on Conanicut Island in Narragansett Bay",
  },
  {
    slug: "middletown",
    name: "Middletown",
    county: "Newport County",
    region: "Aquidneck Island",
    blurb: "a coastal town on Aquidneck Island, between Newport and Portsmouth",
  },
  {
    slug: "newport",
    name: "Newport",
    county: "Newport County",
    region: "Aquidneck Island",
    blurb: "a historic coastal city on Aquidneck Island, known for its mansions and working harbor",
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    county: "Newport County",
    region: "Aquidneck Island",
    blurb: "a coastal town on Aquidneck Island",
  },

  // ---------------------------------- Sakonnet ----------------------------------
  {
    slug: "little-compton",
    name: "Little Compton",
    county: "Newport County",
    region: "Sakonnet",
    blurb: "a rural, coastal town on the Sakonnet Peninsula",
  },
  {
    slug: "tiverton",
    name: "Tiverton",
    county: "Newport County",
    region: "Sakonnet",
    blurb: "a rural, coastal town on the Sakonnet Peninsula bordering Massachusetts",
  },

  // -------------------------------- Block Island --------------------------------
  {
    slug: "new-shoreham",
    name: "New Shoreham",
    akaName: "Block Island",
    county: "Newport County",
    region: "Block Island",
    blurb: "an island community reachable only by ferry or small plane, about 13 miles off the Rhode Island coast",
    ferryOnly: true,
  },

  // ----------------------------- Greater Providence -----------------------------
  {
    slug: "cranston",
    name: "Cranston",
    county: "Providence County",
    region: "Greater Providence",
    blurb: "Rhode Island's third-largest city, bordering Providence to the south",
  },
  {
    slug: "east-providence",
    name: "East Providence",
    county: "Providence County",
    region: "Greater Providence",
    blurb: "a riverside city directly across the Seekonk River from Providence",
  },
  {
    slug: "johnston",
    name: "Johnston",
    county: "Providence County",
    region: "Greater Providence",
    blurb: "a suburban town bordering Providence to the west",
  },
  {
    slug: "north-providence",
    name: "North Providence",
    county: "Providence County",
    region: "Greater Providence",
    blurb: "a densely populated suburb bordering Providence",
  },

  // ------------------------------ Blackstone Valley ------------------------------
  {
    slug: "burrillville",
    name: "Burrillville",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a large, wooded town in Rhode Island's northwest corner",
  },
  {
    slug: "cumberland",
    name: "Cumberland",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a suburban Blackstone Valley town bordering Massachusetts",
  },
  {
    slug: "foster",
    name: "Foster",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a small, rural town in western Rhode Island",
  },
  {
    slug: "glocester",
    name: "Glocester",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a rural, wooded town in northern Rhode Island",
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a suburban Blackstone Valley town just north of Providence",
  },
  {
    slug: "north-smithfield",
    name: "North Smithfield",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a small suburban-to-rural town in the Blackstone Valley",
  },
  {
    slug: "scituate",
    name: "Scituate",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a large, mostly rural town home to the Scituate Reservoir",
  },
  {
    slug: "smithfield",
    name: "Smithfield",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a suburban town northwest of Providence",
  },
  {
    slug: "woonsocket",
    name: "Woonsocket",
    county: "Providence County",
    region: "Blackstone Valley",
    blurb: "a historic mill city in the Blackstone Valley, bordering Massachusetts",
  },

  // --------------------------------- South County ---------------------------------
  {
    slug: "charlestown",
    name: "Charlestown",
    county: "Washington County",
    region: "South County",
    blurb: "a rural, coastal South County town along the Atlantic shoreline",
  },
  {
    slug: "exeter",
    name: "Exeter",
    county: "Washington County",
    region: "South County",
    blurb: "a large, rural South County town",
  },
  {
    slug: "hopkinton",
    name: "Hopkinton",
    county: "Washington County",
    region: "South County",
    blurb: "a rural South County town bordering Connecticut",
  },
  {
    slug: "narragansett",
    name: "Narragansett",
    county: "Washington County",
    region: "South County",
    blurb: "a coastal South County town known for its beaches and the landmark Narragansett Towers",
  },
  {
    slug: "north-kingstown",
    name: "North Kingstown",
    county: "Washington County",
    region: "South County",
    blurb: "a coastal South County town on Narragansett Bay",
  },
  {
    slug: "richmond",
    name: "Richmond",
    county: "Washington County",
    region: "South County",
    blurb: "a rural South County town",
  },
  {
    slug: "south-kingstown",
    name: "South Kingstown",
    county: "Washington County",
    region: "South County",
    blurb: "a large coastal South County town that includes the village of Wakefield",
  },
  {
    slug: "westerly",
    name: "Westerly",
    county: "Washington County",
    region: "South County",
    blurb: "a coastal South County town bordering Connecticut, home to Watch Hill and Misquamicut",
  },
];

export const getTown = (slug: string) => towns.find((t) => t.slug === slug);

/** Supplemental cross-link towns for regions with fewer than `count` peers. */
const supplementalNeighbors: Partial<Record<Region, string[]>> = {
  "East Bay": ["east-providence", "portsmouth", "tiverton"],
  Sakonnet: ["portsmouth", "middletown", "newport"],
  "Block Island": ["narragansett", "westerly", "north-kingstown"],
  "Aquidneck Island": ["tiverton"],
  "Greater Providence": ["lincoln", "smithfield"],
};

/** Returns up to `count` other towns for the "Nearby Areas" cross-link
 * section — same region first, then supplemental picks for small regions. */
export function nearbyTowns(slug: string, count = 5): Town[] {
  const current = getTown(slug);
  if (!current) return [];

  const sameRegion = towns.filter(
    (t) => t.region === current.region && t.slug !== slug,
  );

  const picks = [...sameRegion];
  if (picks.length < count) {
    const supplement = supplementalNeighbors[current.region] ?? [];
    for (const s of supplement) {
      if (picks.length >= count) break;
      if (s === slug) continue;
      const town = getTown(s);
      if (town && !picks.includes(town)) picks.push(town);
    }
  }

  return picks.slice(0, count);
}
