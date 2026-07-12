export type Testimonial = {
  name: string;
  location: string;
  service: string;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael & Dana R.",
    location: "Cranston, RI",
    service: "Roof Replacement",
    text: "From the first inspection to the final walkthrough, Summit was the most professional contractor we've ever hired. The crew finished our entire roof in one day and the yard was cleaner when they left than when they arrived.",
    initials: "MR",
  },
  {
    name: "Sarah K.",
    location: "Warwick, RI",
    service: "Storm Damage & Insurance",
    text: "After a nor'easter tore up our roof, our insurance initially approved half of what it needed. Summit met the adjuster on our roof, documented everything, and the full replacement was approved. They handled it all — we just paid our deductible.",
    initials: "SK",
  },
  {
    name: "James T.",
    location: "Pawtucket, RI",
    service: "Roof Repair",
    text: "Two other companies told me I needed a full replacement. Summit's inspector showed me photos proving it was a flashing issue and fixed it for $700. That honesty earned them our siding project the next spring.",
    initials: "JT",
  },
  {
    name: "The Nguyen Family",
    location: "East Providence, RI",
    service: "Siding Installation",
    text: "Our 1990s house looks brand new. The James Hardie siding, new trim, and color consultation completely transformed it — neighbors keep stopping to ask who did the work.",
    initials: "TN",
  },
  {
    name: "Robert & Ellen M.",
    location: "Barrington, RI",
    service: "Deck Construction",
    text: "The 3D design process sold us. We revised the layout three times before building and the finished deck matched the renders exactly. Best money we've spent on this house.",
    initials: "RM",
  },
  {
    name: "Priya D.",
    location: "North Kingstown, RI",
    service: "Roof Inspection",
    text: "I expected a sales pitch and got the opposite — a 21-point report showing my roof has 8-10 good years left, with two small maintenance items. When it IS time to replace, there's only one company I'm calling.",
    initials: "PD",
  },
];

export const generalFaqs = [
  {
    q: "Do you really offer free inspections with no obligation?",
    a: "Yes. Our 21-point inspection, drone imagery, and written report are 100% free whether you hire us or not. Roughly a third of the roofs we inspect need nothing at all — and we tell you that.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully. Summit Roofing & Exterior is licensed, bonded, and carries both general liability and workers' compensation insurance. Certificates are provided with every estimate.",
  },
  {
    q: "What warranties do you offer?",
    a: "Every installation carries two layers of protection: our own lifetime workmanship warranty covering the labor for as long as you own your home, stacked on top of a 30-year manufacturer shingle warranty covering materials. Repairs carry a 2-year written guarantee.",
  },
  {
    q: "How fast can you start my project?",
    a: "Inspections are typically scheduled within 48 hours. Most repairs happen the same week. Replacement projects usually begin within 2–3 weeks of a signed agreement, weather permitting.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "End to end. We document damage to carrier standards, meet your adjuster on the roof, prepare Xactimate scopes, and file supplements when the first approval falls short. Most customers pay only their deductible.",
  },
  {
    q: "What happens to my landscaping during a roof replacement?",
    a: "We protect it. Tarps cover plantings, plywood shields windows and AC units, and our crews run magnetic sweeps across your entire yard for nails before final walkthrough.",
  },
  {
    q: "Do you use subcontractors?",
    a: "Our core crews are dedicated Summit teams led by a Summit project manager who is on-site daily and reachable by cell. You'll know your PM's name before work begins.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Free Inspection",
    body: "A certified inspector evaluates your roof with drone imagery and a 21-point checklist, then walks you through the findings the same day.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Detailed Estimate",
    body: "You receive a fixed, line-item estimate with material options and photos — no vague allowances, no pressure tactics.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Project Planning",
    body: "We handle permits, HOA approvals, material orders, and insurance paperwork, and lock in your installation date.",
    icon: "CalendarCheck",
  },
  {
    step: 4,
    title: "Installation",
    body: "A dedicated crew protects your property, completes the work — most roofs in a single day — and your project manager stays on-site.",
    icon: "Hammer",
  },
  {
    step: 5,
    title: "Final Inspection",
    body: "A supervisor walks every plane of the roof, runs magnetic nail sweeps, and reviews the finished project with you in person.",
    icon: "ClipboardCheck",
  },
  {
    step: 6,
    title: "Warranty",
    body: "Your lifetime workmanship warranty is registered on top of a 30-year manufacturer shingle warranty — both delivered in writing.",
    icon: "ShieldCheck",
  },
];

export const whyChooseUs = [
  {
    title: "Premium Materials",
    body: "GAF, Owens Corning, CertainTeed, James Hardie, and Trex — installed to manufacturer spec by certified crews.",
    icon: "Gem",
  },
  {
    title: "Licensed Contractors",
    body: "Licensed, bonded, and insured with certificates provided up front. Our license number is on every truck.",
    icon: "BadgeCheck",
  },
  {
    title: "Fast Scheduling",
    body: "Inspections within 48 hours, repairs the same week, and replacement dates you can plan around.",
    icon: "Zap",
  },
  {
    title: "Honest Pricing",
    body: "Fixed line-item estimates. If a repair beats a replacement, that's what we'll recommend.",
    icon: "HandCoins",
  },
  {
    title: "Insurance Assistance",
    body: "Adjuster meetings, Xactimate scopes, and supplement filings handled by claim specialists.",
    icon: "ShieldCheck",
  },
  {
    title: "Excellent Communication",
    body: "A named project manager, daily updates, and a live-answered phone. You'll never chase us for a callback.",
    icon: "MessageSquare",
  },
  {
    title: "Lifetime Workmanship",
    body: "Our labor warranty lasts as long as you own your home, on top of a 30-year manufacturer shingle warranty — and it's transferable once.",
    icon: "Award",
  },
  {
    title: "Emergency Service",
    body: "24/7 storm response with emergency tarping to stop damage the night it happens.",
    icon: "Siren",
  },
];
