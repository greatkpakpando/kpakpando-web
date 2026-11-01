export const foundation = {
  name: "The Great Kpakpando & Elizabeth Foundation",
  email: "info@greatkpakpandofoundation.com",
  phones: ["+234 706 055 0994", "+234 806 165 7977"],
  address: "Behind NYSC Orientation Camp, Awgu, Enugu State, Nigeria",
};
export const photo = (time: string) =>
  `/assets/WhatsApp Image 2026-10-19 at ${time}.jpeg`;
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our story" },
  { href: "/our-work", label: "Our work" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/gallery", label: "Gallery" },
];
export const programs = [
  {
    id: "education",
    number: "03",
    category: "EDUCATION & SKILLS",
    title: "A brighter start. A world of possibility.",
    shortTitle: "Opening doors through education",
    text: "Opening doors for girls through education, and encouraging both girls and boys to build practical skills, confidence and independent futures.",
    image: photo("17.46.02"),
    alt: "Children in blue school uniforms holding learning materials alongside a foundation representative",
    detail:
      "Our founder's own determination to pursue an education informs our commitment to children. School visits, career encouragement and sharing books, writing materials and uniforms are part of this work. Protecting girls' opportunities to learn is an important aim, alongside skills acquisition for both girls and boys. Contact us to discuss current educational activities and opportunities; no scheduled training courses are advertised here.",
  },
  {
    id: "livelihoods",
    number: "01",
    category: "FAMILY WELFARE & LIVELIHOODS",
    title: "The opportunity to stand stronger.",
    shortTitle: "Standing with widows and families",
    text: "Practical care for widows, orphans and vulnerable families, with farming support and opportunities to build greater independence.",
    image: photo("17.41.04 (1)"),
    alt: "A foundation-supported farmer tending a green maize field",
    detail:
      "Inspired by Elizabeth Eje's experience of raising her family through farming and petty trade, we support economic empowerment for disadvantaged widows and female heads of households. This includes support for crop growing and livestock farming. Advocacy and practical care for widows and their children remain central to our purpose.",
  },
  {
    id: "rights",
    number: "02",
    category: "DIGNITY & WIDOWS’ RIGHTS",
    title: "Bereavement should never mean losing your dignity.",
    shortTitle: "A voice for dignity and fairness",
    text: "Advocating for widows and their children, and standing against harmful practices, discrimination and exploitation.",
    image: photo("17.41.04 (3)"),
    alt: "A woman tending a foundation-supported vegetable garden",
    detail:
      "Our founder's family history gives a personal meaning to the foundation's commitment to widows' rights. The foundation's objectives include advocacy and protecting the wellbeing of women and children. We welcome conversations about rights awareness and appropriate professional support. Legal advice and representation require qualified practitioners; availability and any referral arrangements must be confirmed directly.",
  },
  {
    id: "youth",
    number: "04",
    category: "SUBSTANCE MISUSE & AWARENESS",
    title: "Knowledge today. Better choices tomorrow.",
    shortTitle: "Prevention through understanding",
    text: "Community and school outreach create space for conversations about drug abuse, personal safety and the choices that shape young lives.",
    image: photo("17.46.19"),
    alt: "Young people and foundation representatives gathered beside a drug-awareness banner",
    detail:
      "We are committed to educating young people about the dangers of drug abuse and supporting those affected by addiction. Our school awareness sessions have involved drug law enforcement representatives. We aim to encourage informed help-seeking without stigma, with an interest in mental health awareness and appropriate professional support. The foundation does not advertise clinical treatment, detoxification, residential rehabilitation or an emergency service. Contact us to discuss our awareness work and the availability of support pathways.",
  },
].sort((a, b) => a.number.localeCompare(b.number));
export const galleryPhotos = [
  {
    src: photo("17.46.02 (3)"),
    category: "Education",
    title: "Learning, together",
    alt: "Schoolchildren holding up educational materials during a foundation visit",
  },
  {
    src: photo("17.41.04 (1)"),
    category: "Livelihoods",
    title: "Growing opportunities",
    alt: "A woman working among maize plants on a foundation-supported farm",
  },
  {
    src: photo("17.46.19"),
    category: "Youth outreach",
    title: "Conversations that matter",
    alt: "A group gathered with a banner about drug abuse and trafficking",
  },
  {
    src: photo("17.45.59"),
    category: "Education",
    title: "Encouragement in the schoolyard",
    alt: "A foundation representative speaking to schoolchildren outdoors",
  },
  {
    src: photo("17.41.04 (3)"),
    category: "Livelihoods",
    title: "Practical support for farmers",
    alt: "A farmer tending leafy vegetables",
  },
  {
    src: photo("17.46.11"),
    category: "Youth outreach",
    title: "Sharing knowledge",
    alt: "An awareness session with students in a school classroom",
  },
  {
    src: photo("17.46.02 (2)"),
    category: "Education",
    title: "A visit to remember",
    alt: "Children gathered outside their school during foundation outreach",
  },
  {
    src: photo("17.42.45 (4)"),
    category: "Livelihoods",
    title: "Supporting livestock farming",
    alt: "A farmer caring for pigs in a livestock enclosure",
  },
];
