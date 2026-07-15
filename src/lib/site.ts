import { towns } from "./towns";

export const site = {
  name: "Summit Roofing & Exterior",
  legalName: "Summit Roofing & Exterior LLC",
  tagline: "Roofing Built to Last",
  url: "https://summitroofing.work",
  phone: "(401) 585-8878",
  phoneHref: "tel:+14015858878",
  address: {
    street: "",
    city: "Glocester",
    state: "RI",
    zip: "02814",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Emergency service only" },
  ],
  emergency: "24/7 Emergency Storm Response",
  license: "Licensed, Bonded & Insured · RI Reg. #45213",
  social: {
    facebook: "https://facebook.com/summitroofingexterior",
    instagram: "https://instagram.com/summitroofingexterior",
    google: "https://g.page/summitroofingexterior",
  },
  stats: {
    yearsExperience: 22,
    projectsCompleted: 500,
    fiveStarReviews: 345,
    warrantyYears: 30,
  },
  serviceAreas: towns.map((t) => t.name),
};
