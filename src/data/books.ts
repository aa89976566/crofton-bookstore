export type BookCondition =
  | "New"
  | "Near fine"
  | "Very good"
  | "Good"
  | "Reading copy";

export type Binding = "Paperback" | "Hardcover" | "Assorted" | "Ephemera";

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  condition: BookCondition;
  binding: Binding;
  year?: string;
  publisher?: string;
  edition?: string;
  isbn?: string;
  /** Honest secondhand notes: foxing, spine wear, inscriptions, etc. */
  conditionNotes: string;
  description: string;
  stock: number;
  featured?: boolean;
};

export const conditionGuide: { grade: BookCondition; meaning: string }[] = [
  {
    grade: "New",
    meaning: "Unread or as issued. May still carry shop or publisher marks.",
  },
  {
    grade: "Near fine",
    meaning: "Minimal wear. Clean text block, sound binding, only light shelf rubbing.",
  },
  {
    grade: "Very good",
    meaning: "Gently used. Small marks or edge wear possible. No major faults.",
  },
  {
    grade: "Good",
    meaning: "Honestly used and fully readable. May show creases, fading or owner names.",
  },
  {
    grade: "Reading copy",
    meaning: "Worn but intact for reading. Priced for use, not for the collector shelf.",
  },
];

/**
 * Featured shelf for online display.
 * Stock rotates in the shop. These titles show the mix
 * Crofton Books is known for: vintage, literary, rare and new.
 * Replace or extend with live inventory as needed.
 */
export const books: Book[] = [
  {
    id: "penguin-crime-shelf",
    title: "Selected Penguin Crime Classics",
    author: "Various",
    price: 4.5,
    category: "Vintage",
    condition: "Good",
    binding: "Paperback",
    year: "1960s to 1970s",
    publisher: "Penguin",
    edition: "Assorted orange and green covers",
    conditionNotes:
      "Typical paperback wear: creased spines, light edge rubbing. Each copy differs. Ask which titles are in this week.",
    description:
      "A rotating selection of orange and green Penguin Crime paperbacks, the kind that tumble from our street crates.",
    stock: 8,
    featured: true,
  },
  {
    id: "no-looking-back",
    title: "No Looking Back",
    author: "Jason Shelley",
    price: 8,
    category: "Poetry",
    condition: "New",
    binding: "Paperback",
    publisher: "Independent",
    edition: "Shop copy",
    conditionNotes: "New from the shop. Signed copies sometimes available. Ask in store.",
    description:
      "A selection of poetry by Crofton Books owner and local writer Jason Shelley.",
    stock: 4,
    featured: true,
  },
  {
    id: "grey-love",
    title: "Grey Love",
    author: "Jason Shelley",
    price: 9,
    category: "Fiction",
    condition: "New",
    binding: "Paperback",
    publisher: "Independent",
    edition: "Shop copy",
    conditionNotes: "New stock. Urban fiction from the shop founder.",
    description:
      "An urban love story of a struggling writer living in the city, by the shop’s founder.",
    stock: 3,
    featured: true,
  },
  {
    id: "mrs-dalloway",
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    price: 6,
    category: "Fiction",
    condition: "Very good",
    binding: "Paperback",
    year: "Vintage reprint",
    publisher: "Various mid century issues",
    isbn: "9780156628701",
    conditionNotes:
      "Clean pages, sound binding. Light shelf wear to covers. No heavy annotations.",
    description: "A handsome mid century copy of Woolf’s London day in a life masterpiece.",
    stock: 1,
  },
  {
    id: "invisible-man",
    title: "Invisible Man",
    author: "Ralph Ellison",
    price: 7.5,
    category: "Fiction",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780679732761",
    conditionNotes:
      "Readable used copy. Spine crease and light foxing possible. From our Black interest shelves.",
    description:
      "From our Black interest shelves, a cornerstone of twentieth century American fiction.",
    stock: 1,
  },
  {
    id: "beloved",
    title: "Beloved",
    author: "Toni Morrison",
    price: 7,
    category: "Fiction",
    condition: "Very good",
    binding: "Paperback",
    isbn: "9781400033416",
    conditionNotes: "Gently read. Corners lightly rubbed. Interior clean.",
    description:
      "Morrison’s haunting, necessary novel. We restock good copies whenever we find them.",
    stock: 1,
  },
  {
    id: "occult-shelf",
    title: "Occult and Esoterica, Assorted",
    author: "Various",
    price: 12,
    category: "Occult",
    condition: "Good",
    binding: "Assorted",
    edition: "Mixed hardbacks and pamphlets",
    conditionNotes:
      "Odd hardbacks, curious pamphlets, sometimes inscribed. Condition varies by title. Ask what is on the Occult shelf this week.",
    description:
      "Strange inscriptions, odd hardbacks and curious pamphlets from our Occult section.",
    stock: 5,
    featured: true,
  },
  {
    id: "howl",
    title: "Howl and Other Poems",
    author: "Allen Ginsberg",
    price: 5,
    category: "Poetry",
    condition: "Good",
    binding: "Paperback",
    publisher: "City Lights style pocket edition",
    isbn: "9780872860179",
    conditionNotes: "Pocket paperback wear. Creased cover likely. Text complete.",
    description: "City Lights pocket edition energy. Poetry that belongs on a Brockley shelf.",
    stock: 1,
  },
  {
    id: "orlando",
    title: "Orlando",
    author: "Virginia Woolf",
    price: 6.5,
    category: "Fiction",
    condition: "Very good",
    binding: "Paperback",
    isbn: "9780156701600",
    conditionNotes: "Bright copy. Minor edge toning. Binding firm.",
    description:
      "A playful, glittering biography across centuries. Vintage bindings preferred when available.",
    stock: 1,
  },
  {
    id: "the-waste-land",
    title: "The Waste Land and Other Poems",
    author: "T. S. Eliot",
    price: 5.5,
    category: "Poetry",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780156948777",
    conditionNotes: "Used poetry paperback. Light pencil marks possible.",
    description: "Modernist fragments for rainy Overground journeys home.",
    stock: 1,
  },
  {
    id: "native-son",
    title: "Native Son",
    author: "Richard Wright",
    price: 6.5,
    category: "Fiction",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780060837563",
    conditionNotes: "Solid reading copy from the curated Black authors selection.",
    description: "A powerful novel from our curated Black authors selection.",
    stock: 1,
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 5,
    category: "Fiction",
    condition: "Very good",
    binding: "Paperback",
    isbn: "9780486282114",
    conditionNotes: "Clean Dover style classic. Light cover scuffs only.",
    description:
      "Gothic origins, often found among our classics stacks and colour sorted baskets.",
    stock: 1,
  },
  {
    id: "leaves-of-grass",
    title: "Leaves of Grass",
    author: "Walt Whitman",
    price: 8,
    category: "Poetry",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780486456768",
    conditionNotes: "Thicker paperback. Spine may show reading crease.",
    description: "A generous, wandering American epic for the poetry shelves downstairs.",
    stock: 1,
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    price: 7,
    category: "Sci-Fi",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780441172719",
    conditionNotes: "Well loved SF paperback. Edge wear expected. Pages intact.",
    description:
      "From the Science Fiction and Fantasy shelves downstairs. Well loved and ready to travel.",
    stock: 1,
  },
  {
    id: "neuromancer",
    title: "Neuromancer",
    author: "William Gibson",
    price: 6.5,
    category: "Sci-Fi",
    condition: "Good",
    binding: "Paperback",
    isbn: "9780441569595",
    conditionNotes: "Classic cyberpunk paperback. Cover rubs and soft corners likely.",
    description: "Cyberpunk classic, the sort of find that rewards a long browse.",
    stock: 1,
  },
  {
    id: "gardening-vintage",
    title: "Vintage Gardening Manuals",
    author: "Various",
    price: 4,
    category: "Non-fiction",
    condition: "Good",
    binding: "Assorted",
    year: "Assorted decades",
    conditionNotes: "Practical wear, sometimes annotated by previous gardeners.",
    description: "Practical and picturesque gardening titles for SE4 window sills and allotments.",
    stock: 6,
  },
  {
    id: "tiny-books-basket",
    title: "Tiny Books Basket",
    author: "Various",
    price: 2,
    category: "Vintage",
    condition: "Reading copy",
    binding: "Assorted",
    conditionNotes: "Outdoor basket stock. Expect weather kiss and soft covers. Contents change daily.",
    description:
      "The outdoor basket of miniature volumes, perfect for pockets, presents and impulse discoveries.",
    stock: 12,
    featured: true,
  },
  {
    id: "yellow-books",
    title: "Yellow Books, Colour Shelf",
    author: "Various",
    price: 3,
    category: "Vintage",
    condition: "Good",
    binding: "Assorted",
    conditionNotes: "Organised by colour, not by author. Condition varies. Surprise guaranteed.",
    description:
      "Organised chaos: a metal basket or shelf of yellow spines. Contents change with the day.",
    stock: 10,
    featured: true,
  },
  {
    id: "cassette-selection",
    title: "Selected Cassettes and Ephemera",
    author: "Various",
    price: 5,
    category: "Ephemera",
    condition: "Good",
    binding: "Ephemera",
    conditionNotes: "Media condition noted at the counter. Ask to check a specific tape or disc.",
    description:
      "Rare CDs, DVDs, video tapes and cassettes surface regularly. Ask the team what is in today.",
    stock: 4,
  },
  {
    id: "maps-records",
    title: "Maps and Records, Assorted",
    author: "Various",
    price: 6,
    category: "Ephemera",
    condition: "Good",
    binding: "Ephemera",
    conditionNotes: "Fold wear on maps, sleeve wear on records. Inspect in shop when possible.",
    description: "Not just books: folded maps and records appear beside the pavement piles.",
    stock: 3,
  },
  {
    id: "modern-classics-mix",
    title: "Modern Classics Mix",
    author: "Various",
    price: 5,
    category: "Fiction",
    condition: "Very good",
    binding: "Paperback",
    conditionNotes: "Curated mix rather than warehouse sorting. Ask for authors you want.",
    description: "Retro used books and modern classics, curated, not warehouse sorted.",
    stock: 7,
  },
  {
    id: "trending-new",
    title: "Trending New Literary Titles",
    author: "Various",
    price: 12,
    category: "New",
    condition: "New",
    binding: "Assorted",
    conditionNotes: "New books. Titles rotate with what we are reading and recommending.",
    description:
      "A small, considered selection of new literary titles alongside the secondhand and rare stock.",
    stock: 5,
  },
  {
    id: "young-adult",
    title: "Young Adult Finds",
    author: "Various",
    price: 4,
    category: "Young Adult",
    condition: "Good",
    binding: "Paperback",
    conditionNotes: "Downstairs YA shelves. School and library stamps sometimes present.",
    description: "Downstairs YA shelves, for readers growing into their next obsession.",
    stock: 6,
  },
  {
    id: "food-cookery",
    title: "Food and Cookery",
    author: "Various",
    price: 5.5,
    category: "Non-fiction",
    condition: "Good",
    binding: "Assorted",
    conditionNotes: "Kitchen copies may show splash marks. Recipes intact.",
    description: "Recipe books and food writing, from practical to peculiar.",
    stock: 4,
  },
];

export function formatPrice(price: number) {
  return `£${price.toFixed(2).replace(/\.00$/, "")}`;
}

export function getBookById(id: string) {
  return books.find((book) => book.id === id);
}

export function relatedBooks(book: Book, limit = 3) {
  return books
    .filter((b) => b.id !== book.id && b.category === book.category)
    .slice(0, limit);
}

export const categories = [
  "All",
  "Featured",
  "Fiction",
  "Poetry",
  "Vintage",
  "Occult",
  "Sci-Fi",
  "New",
  "Non-fiction",
  "Ephemera",
  "Young Adult",
] as const;
