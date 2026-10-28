export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder, an interior design studio",
    location: "Mumbai, India",
    quote:
      "Anvik Studio understood exactly what we needed. The site went live in two weeks and we started getting enquiries from Google within the first month. The whole process was stress-free.",
  },
  {
    name: "James O'Connor",
    role: "Owner, a specialist plumbing company",
    location: "Manchester, UK",
    quote:
      "We'd been quoted £8,000 by a local agency. Anvik delivered a better site for a fraction of that, and they were available on calls that suited our time zone.",
  },
  {
    name: "Sarah Mitchell",
    role: "Co-founder, a DTC skincare brand",
    location: "Austin, Texas",
    quote:
      "Our Shopify store finally looks and feels like the premium brand we are. The checkout flow they built improved our conversion noticeably. Highly recommend.",
  },
  {
    name: "Rahul Desai",
    role: "Director, a building materials supplier",
    location: "Ahmedabad, India",
    quote:
      "We needed a B2B catalogue site with dealer login. Ankit and the team delivered it on time and the weekly updates kept us in the loop throughout.",
  },
];
