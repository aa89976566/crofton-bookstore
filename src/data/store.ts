export const store = {
  name: "Crofton Books",
  tagline: "in Brockley",
  shortPitch:
    "A bookshop for everyone: secondhand, antiquarian, rare, and a few new titles worth finding.",
  philosophy:
    "Class free browsing, creative displays, and curated collections that feel as much museum as shop.",
  address: {
    line1: "315 Brockley Road",
    line2: "London SE4 2QZ",
    country: "United Kingdom",
  },
  phone: "020 7998 8387",
  phoneHref: "tel:+442079988387",
  /**
   * Placeholder inbox for mailto reserve requests.
   * Replace with the shop’s real address before going live.
   */
  reserveEmail: "hello@croftonbooks.co.uk",
  instagram: "https://www.instagram.com/croftonbooks/",
  instagramHandle: "@croftonbooks",
  threads: "https://www.threads.com/@croftonbooks",
  mapsUrl: "https://maps.app.goo.gl/UskgfnzA5LR82B5Y6?g_st=ic",
  owner: "Jason Shelley",
  established: 2021,
  hours: [
    { day: "Monday", time: "12:00 to 18:00" },
    { day: "Tuesday", time: "10:00 to 18:00" },
    { day: "Wednesday", time: "10:00 to 18:00" },
    { day: "Thursday", time: "10:00 to 19:00" },
    { day: "Friday", time: "10:00 to 18:00" },
    { day: "Saturday", time: "10:00 to 18:00" },
    { day: "Sunday", time: "10:00 to 18:00" },
  ],
  hoursNote:
    "Hours can shift for events and heatwaves. Check Instagram for the week’s times.",
  transport: [
    "Brockley station, Windrush line (Overground), about 20 minutes from central London",
    "Crofton Park, Thameslink / trains from London Blackfriars",
  ],
  accessibility: "Fully accessible shop floor.",
  about: [
    "Crofton Books opened in Brockley in 2021, founded by local poet and writer Jason Shelley with a team of fellow book addicts.",
    "We sell a mix of secondhand, antiquarian and rare books alongside trending new literary titles. Expect colour shelves, hand drawn floor plans, and stacks that spill onto the pavement.",
    "Come for the Penguin classics and Occult curiosities. Stay for the armchairs, book clubs, poetry nights, and the blackboard questions outside.",
  ],
  events:
    "Regular book clubs (they sell out fast) and poetry open mic nights for the local community.",
  reserveHow: [
    "Browse the online shelf. Only a slice of the shop is listed. Stock turns quickly.",
    "Open a title to read condition notes, binding, edition details and availability.",
    "Add titles to your reserve list, then email us. We confirm what we can hold.",
    "Collect in Brockley, or ask about postage when you write. No online payment and no account.",
  ],
} as const;
