export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide icon name, resolved in components
  excerpt: string;
  heroImage: string;
  cardImage: string;
  headline: string;
  subheadline: string;
  description: string[];
  features: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services: Service[] = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Replacement",
    icon: "Home",
    excerpt:
      "Complete tear-off and replacement with premium architectural shingles, metal, or tile — backed by our lifetime workmanship warranty on top of a 30-year shingle warranty.",
    heroImage: u("photo-1632759145351-1d592919f522"),
    cardImage: u("photo-1632759145351-1d592919f522", 900),
    headline: "A New Roof, Done Right the First Time",
    subheadline:
      "Premium materials, factory-certified installers, and a lifetime workmanship warranty on top of a 30-year shingle warranty — most homes completed in a single day.",
    description: [
      "Your roof is your home's first line of defense — and its single most visible feature. When repairs no longer make financial sense, Summit Roofing & Exterior delivers a full replacement engineered for decades of protection, not just the next storm season.",
      "We install premium architectural shingles, standing-seam metal, and designer tile systems from GAF, Owens Corning, and CertainTeed. Every project includes full tear-off, deck inspection, ice-and-water shield, synthetic underlayment, and upgraded ridge ventilation — the details budget contractors skip.",
      "Because we're factory-certified by the manufacturers we install, your new roof qualifies for a 30-year shingle warranty on materials — on top of that, we back our own labor with a separate lifetime workmanship warranty most contractors simply can't offer.",
    ],
    features: [
      {
        title: "Single-Day Installation",
        body: "Dedicated crews complete most residential replacements in one day, with full property protection and magnetic nail sweeps before we leave.",
      },
      {
        title: "Premium Material Options",
        body: "Architectural shingles, Class 4 impact-resistant systems, standing-seam metal, and designer tile — with samples brought to your door.",
      },
      {
        title: "Lifetime Workmanship Warranty",
        body: "Our installation labor is warrantied for as long as you own your home — stacked on top of a 30-year manufacturer shingle warranty on materials.",
      },
      {
        title: "Transparent, Fixed Pricing",
        body: "Your detailed estimate is the price you pay. No surprise change orders, no hidden line items.",
      },
    ],
    faqs: [
      {
        q: "How long does a roof replacement take?",
        a: "Most single-family homes are completed in one day. Larger or steep-slope homes may take two to three days. Your project manager gives you an exact schedule before work begins.",
      },
      {
        q: "How do I know if I need a replacement instead of a repair?",
        a: "If your roof is over 18–20 years old, has widespread granule loss, curling shingles, or recurring leaks, replacement is usually the smarter investment. Our free inspection gives you an honest answer either way — we repair roofs that don't need replacing.",
      },
      {
        q: "What does a new roof cost?",
        a: "Most asphalt replacements in our service area run between $9,000 and $25,000 depending on size, pitch, and material. We provide fixed, line-item estimates so you know the full cost upfront.",
      },
    ],
    cta: "Get a free, no-pressure replacement estimate",
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Repair",
    icon: "Wrench",
    excerpt:
      "Fast, permanent repairs for leaks, missing shingles, flashing failures, and storm damage — with same-week scheduling.",
    heroImage: u("photo-1635424710928-0544e8512eae"),
    cardImage: u("photo-1635424710928-0544e8512eae", 900),
    headline: "Small Problems Shouldn't Become Big Ones",
    subheadline:
      "Same-week repair scheduling, upfront pricing, and fixes that last — not patches that fail next season.",
    description: [
      "A missing shingle or slow ceiling stain rarely stays small. Water finds its way into decking, insulation, and framing — turning a $600 repair into a $6,000 problem. Our repair crews diagnose the true source of the leak, not just the symptom.",
      "Every repair starts with a full roof assessment and photo documentation, so you see exactly what we see. We fix flashing, valleys, pipe boots, ridge caps, skylights, and storm damage with manufacturer-matched materials.",
      "If a repair isn't in your best interest, we'll tell you — and show you why. Roughly 70% of the roofs we inspect need a repair, not a replacement.",
    ],
    features: [
      {
        title: "Same-Week Scheduling",
        body: "Active leaks are prioritized. Emergency tarping is available 24/7 to stop damage immediately.",
      },
      {
        title: "Photo-Documented Diagnosis",
        body: "You get before-and-after photos of every repair, so you never wonder what you paid for.",
      },
      {
        title: "Manufacturer-Matched Materials",
        body: "Color-matched shingles and OEM components keep your roof uniform and your warranty intact.",
      },
      {
        title: "2-Year Repair Guarantee",
        body: "Every repair is backed in writing. If it fails, we return and make it right at no cost.",
      },
    ],
    faqs: [
      {
        q: "How much does a roof repair cost?",
        a: "Most repairs run between $350 and $1,500 depending on scope. You'll receive a fixed quote before any work begins.",
      },
      {
        q: "Can you repair a roof that another company installed?",
        a: "Absolutely. We repair all roof types and brands, regardless of who installed them.",
      },
      {
        q: "I have an active leak right now. How fast can you come?",
        a: "Call us. Emergency tarping crews respond 24/7, and most active leaks receive permanent repairs within the week.",
      },
    ],
    cta: "Schedule a repair assessment",
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    shortName: "Inspection",
    icon: "Search",
    excerpt:
      "Free 21-point roof inspections with drone imagery and a written condition report — no obligation, no pressure.",
    heroImage: u("photo-1635424709845-3a85ad5e1f5e"),
    cardImage: u("photo-1635424709845-3a85ad5e1f5e", 900),
    headline: "Know Exactly What's Happening on Your Roof",
    subheadline:
      "A free 21-point inspection with drone imagery, photo documentation, and a straight answer about what your roof needs — even when that answer is 'nothing.'",
    description: [
      "Most homeowners never see their roof up close — which is exactly what bad contractors count on. Our free 21-point inspection documents your roof's true condition with high-resolution drone imagery and on-roof evaluation by a certified inspector.",
      "We examine shingles, flashing, valleys, ventilation, gutters, penetrations, decking, and attic moisture. You receive a written condition report with photos the same day — yours to keep whether you hire us or not.",
      "Inspections are ideal before buying or selling a home, after major storms, when your roof passes the 10-year mark, or before your manufacturer warranty deadline.",
    ],
    features: [
      {
        title: "21-Point Certified Inspection",
        body: "A systematic evaluation of every roof component, from ridge caps to attic ventilation.",
      },
      {
        title: "Drone + On-Roof Assessment",
        body: "High-resolution aerial imagery catches damage that's invisible from the ground — safely.",
      },
      {
        title: "Same-Day Written Report",
        body: "Photo-documented findings with honest recommendations and no-pressure next steps.",
      },
      {
        title: "Always 100% Free",
        body: "No fee, no obligation, no sales pitch. Most inspections take under 45 minutes.",
      },
    ],
    faqs: [
      {
        q: "Is the inspection really free?",
        a: "Yes — completely. We earn business by being the company that told you the truth, not by charging for a clipboard visit.",
      },
      {
        q: "How often should a roof be inspected?",
        a: "Once a year, and always after significant hail or wind events. Insurance carriers often require documented storm dates, so timely inspections protect your claim rights.",
      },
      {
        q: "Do I need to be home for the inspection?",
        a: "It helps but isn't required. We can complete the exterior evaluation and email your report, then walk you through findings by phone.",
      },
    ],
    cta: "Book your free inspection",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    shortName: "Storm Damage",
    icon: "CloudLightning",
    excerpt:
      "24/7 emergency response for nor'easter, hurricane, and wind damage — tarping, documentation, and full restoration handled end to end.",
    heroImage: u("photo-1761959166803-ed952543eeae"),
    cardImage: u("photo-1761959166803-ed952543eeae", 900),
    headline: "After the Storm, We've Got You Covered",
    subheadline:
      "24/7 emergency tarping, thorough damage documentation, and complete restoration — we handle everything from first call to final shingle.",
    description: [
      "New England doesn't negotiate. Nor'easters, coastal winds, and the occasional hurricane remnant hit Rhode Island roofs hard, and the hours after matter: undocumented damage weakens insurance claims, and open roof penetrations turn into interior water damage fast.",
      "Our storm response team provides 24/7 emergency tarping and board-up, then documents every impact point with drone imagery and test squares — the evidence insurance adjusters require.",
      "We're storm-restoration specialists, not storm chasers. We're local year-round, our license number is on every truck, and we'll still be here when your warranty needs us in year fifteen.",
    ],
    features: [
      {
        title: "24/7 Emergency Response",
        body: "Live answer, day or night. Emergency tarping crews stop active water intrusion before it spreads.",
      },
      {
        title: "Insurance-Grade Documentation",
        body: "Drone imagery, chalked test squares, and itemized damage reports formatted for your carrier.",
      },
      {
        title: "Full Exterior Restoration",
        body: "Roofing, siding, gutters, windows, and paint — one contractor, one schedule, one warranty.",
      },
      {
        title: "Local, Licensed, Year-Round",
        body: "We've served Rhode Island for 22 years. No out-of-state crews that vanish after the storm season.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my roof has storm or wind damage?",
        a: "From the ground, you often can't — wind lift and hail bruise shingle mats in ways that only show up close. If your neighborhood took a hit from a nor'easter or high winds, get a free inspection. Damage left unclaimed past your carrier's filing deadline becomes your cost.",
      },
      {
        q: "What should I do immediately after a storm?",
        a: "Document the date, photograph any visible damage or interior leaks, and schedule an inspection before filing. Avoid door-knockers who pressure you to sign on the spot.",
      },
      {
        q: "Will a claim raise my insurance rates?",
        a: "Weather claims are 'acts of God' and typically don't affect your individual rates the way at-fault claims do. Regional rates adjust after major storms whether you file or not.",
      },
    ],
    cta: "Request a storm damage assessment",
  },
  {
    slug: "insurance-claims",
    name: "Insurance Claims",
    shortName: "Insurance",
    icon: "ShieldCheck",
    excerpt:
      "We document, meet your adjuster, and manage your claim paperwork so you get the full restoration your policy covers.",
    heroImage: u("photo-1454165804606-c3d57bc86b40"),
    cardImage: u("photo-1454165804606-c3d57bc86b40", 900),
    headline: "Your Policy Covers More Than You Think",
    subheadline:
      "We document the damage, meet your adjuster on the roof, and manage the paperwork — so your claim reflects what restoration actually costs.",
    description: [
      "Insurance claims fail for one reason: documentation gaps. Adjusters work from what they can see and prove — and a homeowner alone on the ground is at a serious information disadvantage.",
      "Summit's claim specialists photograph and chalk every impact point, prepare an independent line-item scope using the same Xactimate software carriers use, and meet your adjuster on the roof to walk the damage together.",
      "We are not public adjusters and never touch your settlement — we're your contractor, making sure the approved scope actually restores your home. From first notice of loss to depreciation recovery, we handle the process you were never trained for.",
    ],
    features: [
      {
        title: "Adjuster Meetings, Handled",
        body: "A certified specialist meets your insurance adjuster on-site and walks the documented damage point by point.",
      },
      {
        title: "Xactimate Line-Item Scopes",
        body: "We speak the carrier's language — our scopes use the same estimating platform your insurer uses.",
      },
      {
        title: "Supplement Management",
        body: "When the first approval misses code-required items, we file the supplements and evidence to correct it.",
      },
      {
        title: "Deductible-Only Clarity",
        body: "In most approved claims, your out-of-pocket cost is your deductible. We put that in writing.",
      },
    ],
    faqs: [
      {
        q: "Should I file a claim before or after an inspection?",
        a: "After. If damage doesn't justify a claim, filing creates a record for nothing. Our free inspection tells you whether a claim makes sense first.",
      },
      {
        q: "What if my claim was already denied?",
        a: "Denials are frequently reversed with better documentation. We review your denial letter, re-inspect, and if the evidence supports it, help you request a re-adjustment.",
      },
      {
        q: "Are you public adjusters?",
        a: "No — we're a licensed contractor. We never negotiate your settlement amount; we document damage and ensure the approved scope restores your home correctly. You always deal directly with your carrier.",
      },
    ],
    cta: "Get help with your claim",
  },
  {
    slug: "siding",
    name: "Siding Installation",
    shortName: "Siding",
    icon: "Layers",
    excerpt:
      "James Hardie fiber cement, LP SmartSide, and premium vinyl — transform curb appeal and cut energy costs.",
    heroImage: u("photo-1773101883541-42a4881daef3"),
    cardImage: u("photo-1773101883541-42a4881daef3", 900),
    headline: "Siding That Transforms Your Entire Home",
    subheadline:
      "James Hardie fiber cement, LP SmartSide, and premium vinyl — installed by certified crews with whole-home insulation upgrades.",
    description: [
      "New siding is the single most dramatic upgrade a home exterior can get — and one of the highest-ROI projects in remodeling, returning up to 80% of its cost at resale.",
      "We install James Hardie fiber cement, LP SmartSide engineered wood, and premium insulated vinyl. Every project includes moisture barrier replacement, insulation evaluation, and color-matched trim, soffit, and fascia work.",
      "Our installers are manufacturer-certified, which means your siding qualifies for the strongest warranties available — including James Hardie's 30-year non-prorated coverage.",
    ],
    features: [
      {
        title: "James Hardie Certified",
        body: "Factory-trained installation that qualifies for Hardie's 30-year non-prorated warranty.",
      },
      {
        title: "Complete Envelope Upgrade",
        body: "House wrap, moisture barriers, and insulation evaluated and upgraded during every install.",
      },
      {
        title: "Designer Color Consultation",
        body: "See finished combinations of siding, trim, and accent colors on photos of your actual home before you commit.",
      },
      {
        title: "Trim, Soffit & Fascia Included",
        body: "We finish the details that make the difference — no mismatched trim or exposed old fascia.",
      },
    ],
    faqs: [
      {
        q: "Which siding material is best?",
        a: "Fiber cement (James Hardie) offers the best durability against coastal humidity and salt air. LP SmartSide gives a warmer wood look at lower weight. Insulated vinyl is the value leader. We'll show you all three with real samples.",
      },
      {
        q: "How long does siding installation take?",
        a: "Most homes take 5–10 working days depending on size and material. Your crew works consecutive days until complete — no disappearing mid-project.",
      },
      {
        q: "Can new siding lower my energy bills?",
        a: "Yes. Insulated siding and proper house wrap typically improve exterior wall R-value noticeably; many customers report meaningfully lower heating and cooling costs.",
      },
    ],
    cta: "Get a free siding consultation",
  },
  {
    slug: "decks",
    name: "Deck Design & Construction",
    shortName: "Decks",
    icon: "Fence",
    excerpt:
      "Custom composite and wood decks designed in 3D, engineered for New England weather, and built to be lived on.",
    heroImage: u("photo-1613544723412-b331bda01e87"),
    cardImage: u("photo-1613544723412-b331bda01e87", 900),
    headline: "Outdoor Living, Built to Last Decades",
    subheadline:
      "Custom composite and cedar decks designed in 3D before we build — engineered footings, hidden fasteners, and railing systems that make the neighbors stare.",
    description: [
      "A great deck isn't lumber and screws — it's an outdoor room. Our design team builds your deck in 3D first, so you walk through the finished space before we set a single footing.",
      "We build with Trex and TimberTech composite, and premium-grade cedar and redwood. Every structure is engineered for New England snow loads with properly-sized footings, flashing at the ledger (where most deck failures start), and hidden fastener systems.",
      "Multi-level layouts, pergolas, privacy walls, built-in lighting, and cable or glass railing — designed around how your family actually uses the space.",
    ],
    features: [
      {
        title: "3D Design Before You Commit",
        body: "Walk through a photorealistic model of your deck and revise the design until it's exactly right.",
      },
      {
        title: "Trex & TimberTech Pro Builders",
        body: "Certified composite installation with 25–50 year material warranties and hidden fasteners.",
      },
      {
        title: "Engineered for Snow Load",
        body: "Stamped structural design where required, code-compliant footings, and correctly flashed ledgers.",
      },
      {
        title: "Permits Pulled, Inspections Passed",
        body: "We manage the full permit process with your city — you never stand in line at the building department.",
      },
    ],
    faqs: [
      {
        q: "Composite or wood — which should I choose?",
        a: "Composite costs more upfront but is essentially maintenance-free for 25+ years. Cedar costs less initially but needs staining every 2–3 years. Over 15 years, composite usually wins on total cost.",
      },
      {
        q: "Do I need a permit for a new deck?",
        a: "Almost always, yes — and unpermitted decks create problems at resale. We handle permits, engineering, and inspections as part of every project.",
      },
      {
        q: "How long does a deck build take?",
        a: "Design and permitting take 2–4 weeks; construction typically takes 1–2 weeks once materials arrive. Most projects go from first call to first barbecue in about 6 weeks.",
      },
    ],
    cta: "Start your deck design",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
