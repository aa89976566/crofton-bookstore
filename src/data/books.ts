export type BookCondition = "New" | "Near fine" | "Very good" | "Good" | "Reading copy";

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  condition: BookCondition;
  year?: string;
  publisher?: string;
  isbn?: string;
  description: string;
  featured?: boolean;
};

/**
 * Featured shelf for online display.
 * Stock rotates in-shop — these titles represent the kind of mix
 * Crofton Books is known for: vintage, literary, rare, and new.
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
    year: "1960s–70s",
    description:
      "A rotating selection of orange and green Penguin Crime paperbacks — the kind that tumble from our street crates.",
    featured: true,
  },
  {
    id: "no-looking-back",
    title: "No Looking Back",
    author: "Jason Shelley",
    price: 8,
    category: "Poetry",
    condition: "New",
    publisher: "Independent",
    description:
      "A selection of poetry by Crofton Books owner and local writer Jason Shelley.",
    featured: true,
  },
  {
    id: "grey-love",
    title: "Grey Love",
    author: "Jason Shelley",
    price: 9,
    category: "Fiction",
    condition: "New",
    description:
      "An urban love story of a struggling writer living in the city — by the shop’s founder.",
    featured: true,
  },
  {
    id: "mrs-dalloway",
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    price: 6,
    category: "Fiction",
    condition: "Very good",
    year: "Vintage reprint",
    isbn: "9780156628701",
    description: "A handsome mid-century copy of Woolf’s London day-in-a-life masterpiece.",
  },
  {
    id: "invisible-man",
    title: "Invisible Man",
    author: "Ralph Ellison",
    price: 7.5,
    category: "Fiction",
    condition: "Good",
    isbn: "9780679732761",
    description: "From our Black interest shelves — a cornerstone of twentieth-century American fiction.",
  },
  {
    id: "beloved",
    title: "Beloved",
    author: "Toni Morrison",
    price: 7,
    category: "Fiction",
    condition: "Very good",
    isbn: "9781400033416",
    description: "Morrison’s haunting, necessary novel — regularly restocked when we can find good copies.",
  },
  {
    id: "occult-shelf",
    title: "Occult & Esoterica — Assorted",
    author: "Various",
    price: 12,
    category: "Occult",
    condition: "Good",
    description:
      "Strange inscriptions, odd hardbacks, and curious pamphlets from our Occult section. Ask what’s in this week.",
    featured: true,
  },
  {
    id: "howl",
    title: "Howl and Other Poems",
    author: "Allen Ginsberg",
    price: 5,
    category: "Poetry",
    condition: "Good",
    isbn: "9780872860179",
    description: "City Lights pocket edition energy — poetry that belongs on a Brockley shelf.",
  },
  {
    id: "orlando",
    title: "Orlando",
    author: "Virginia Woolf",
    price: 6.5,
    category: "Fiction",
    condition: "Very good",
    isbn: "9780156701600",
    description: "A playful, glittering biography across centuries — vintage binding preferred when available.",
  },
  {
    id: "the-waste-land",
    title: "The Waste Land and Other Poems",
    author: "T. S. Eliot",
    price: 5.5,
    category: "Poetry",
    condition: "Good",
    isbn: "9780156948777",
    description: "Modernist fragments for rainy Overground journeys home.",
  },
  {
    id: "native-son",
    title: "Native Son",
    author: "Richard Wright",
    price: 6.5,
    category: "Fiction",
    condition: "Good",
    isbn: "9780060837563",
    description: "A powerful novel from our curated Black authors selection.",
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 5,
    category: "Fiction",
    condition: "Very good",
    isbn: "9780486282114",
    description: "Gothic origins — often found among our classics stacks and colour-sorted baskets.",
  },
  {
    id: "leaves-of-grass",
    title: "Leaves of Grass",
    author: "Walt Whitman",
    price: 8,
    category: "Poetry",
    condition: "Good",
    isbn: "9780486456768",
    description: "A generous, wandering American epic for the poetry shelves downstairs.",
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    price: 7,
    category: "Sci-Fi",
    condition: "Good",
    isbn: "9780441172719",
    description: "From the Science Fiction & Fantasy shelves downstairs — well-loved and ready to travel.",
  },
  {
    id: "neuromancer",
    title: "Neuromancer",
    author: "William Gibson",
    price: 6.5,
    category: "Sci-Fi",
    condition: "Good",
    isbn: "9780441569595",
    description: "Cyberpunk classic — the sort of find that rewards a long browse.",
  },
  {
    id: "gardening-vintage",
    title: "Vintage Gardening Manuals",
    author: "Various",
    price: 4,
    category: "Non-fiction",
    condition: "Good",
    year: "Assorted",
    description: "Practical and picturesque gardening titles for SE4 window sills and allotments.",
  },
  {
    id: "tiny-books-basket",
    title: "Tiny Books Basket",
    author: "Various",
    price: 2,
    category: "Vintage",
    condition: "Reading copy",
    description:
      "The outdoor basket of miniature volumes — perfect for pockets, presents, and impulse discoveries.",
    featured: true,
  },
  {
    id: "yellow-books",
    title: "Yellow Books — Colour Shelf",
    author: "Various",
    price: 3,
    category: "Vintage",
    condition: "Good",
    description:
      "Organised chaos: a metal basket or shelf of yellow spines. Contents change with the day.",
    featured: true,
  },
  {
    id: "cassette-selection",
    title: "Selected Cassettes & Ephemera",
    author: "Various",
    price: 5,
    category: "Ephemera",
    condition: "Good",
    description:
      "Rare CDs, DVDs, video tapes and cassettes surface regularly — ask the team what’s in today.",
  },
  {
    id: "maps-records",
    title: "Maps & Records — Assorted",
    author: "Various",
    price: 6,
    category: "Ephemera",
    condition: "Good",
    description: "Not just books: folded maps and records appear beside the pavement piles.",
  },
  {
    id: "modern-classics-mix",
    title: "Modern Classics Mix",
    author: "Various",
    price: 5,
    category: "Fiction",
    condition: "Very good",
    description: "Retro used books and modern classics — curated, not warehouse-sorted.",
  },
  {
    id: "trending-new",
    title: "Trending New Literary Titles",
    author: "Various",
    price: 12,
    category: "New",
    condition: "New",
    description:
      "A small, considered selection of new literary titles alongside the secondhand and rare stock.",
  },
  {
    id: "young-adult",
    title: "Young Adult Finds",
    author: "Various",
    price: 4,
    category: "Young Adult",
    condition: "Good",
    description: "Downstairs YA shelves — for readers growing into their next obsession.",
  },
  {
    id: "food-cookery",
    title: "Food & Cookery",
    author: "Various",
    price: 5.5,
    category: "Non-fiction",
    condition: "Good",
    description: "Recipe books and food writing — from practical to peculiar.",
  },
];

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

export function formatPrice(price: number) {
  return `£${price.toFixed(2).replace(/\.00$/, "")}`;
}

export function getBookById(id: string) {
  return books.find((book) => book.id === id);
}
