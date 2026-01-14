export type Category = 'STARTERS' | 'SALADS' | 'MAINS' | 'DESSERTS' | 'DRINKS';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: Category;
  alt: string;
}

export const CATEGORIES: Category[] = ['STARTERS', 'SALADS', 'MAINS', 'DESSERTS', 'DRINKS'];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: '1',
    name: 'Avocado Toast',
    price: '₹1400',
    description: 'Artisan sourdough bread topped with smashed avocado, poached organic egg, chili flakes, and locally sourced micro-greens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVv8zkMInRNg-rmGDFYEuK5gpFuAneZihYpM7cOlx26sMAYdwVN0PGEUnqVhOUWSB_eNITGR3LLXwSiFSs3MLJhroBR325Lj84paCN4-eXC4dlVrFA7Rp-IsE9pDs3x3W4UNG3RVCuIQtb4PZsdGITyDXnmbUgm49u2Zie91VpjXpzriCnbLajYS-1se4jFfnjBGVEUPzDOVqvcJzDQ81mKk3DxgkKYr_IOYfoEz3atbEzCArLlju81ej5g0CYngg2YYodeKLSdQoy',
    category: 'STARTERS',
    alt: 'Avocado toast with poached egg on dark plate'
  },
  {
    id: '2',
    name: 'Bruschetta Trio',
    price: '₹950',
    description: 'Grilled ciabatta topped with tomato-basil, mushroom-truffle, and goat cheese-fig compote.',
    image: 'https://images.unsplash.com/photo-1572695157363-bc31cafd7219?auto=format&fit=crop&q=80&w=800', // Verified Unsplash ID
    category: 'STARTERS',
    alt: 'Three types of bruschetta on a wooden board'
  },
  {
    id: '12',
    name: 'Stuffed Mushrooms',
    price: '₹850',
    description: 'Button mushrooms stuffed with cream cheese, herbs, and toasted breadcrumbs.',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=800',
    category: 'STARTERS',
    alt: 'Golden baked stuffed mushrooms'
  },
  {
    id: '13',
    name: 'Caprese Skewers',
    price: '₹750',
    description: 'Fresh mozzarella balls, cherry tomatoes, and basil leaves drizzled with balsamic glaze.',
    image: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?auto=format&fit=crop&q=80&w=800',
    category: 'STARTERS',
    alt: 'Caprese salad skewers'
  },
  {
    id: '14',
    name: 'Crispy Calamari',
    price: '₹1100',
    description: 'Lightly battered fried squid rings served with spicy marinara dipping sauce.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800',
    category: 'STARTERS',
    alt: 'Plate of crispy fried calamari'
  },
  
  // SALADS
  {
    id: '3',
    name: 'Quinoa Power Bowl',
    price: '₹1100',
    description: 'Mixed quinoa, roasted chickpeas, kale, avocado, and tahini dressing.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'SALADS',
    alt: 'Healthy quinoa salad bowl'
  },
  {
    id: '4',
    name: 'Mediterranean Salad',
    price: '₹1000',
    description: 'Crisp cucumbers, cherry tomatoes, kalamata olives, feta cheese, and extra virgin olive oil.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    category: 'SALADS',
    alt: 'Fresh greek salad'
  },
  {
    id: '15',
    name: 'Caesar Salad',
    price: '₹950',
    description: 'Romaine lettuce, parmesan cheese, house-made croutons, and creamy Caesar dressing.',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800',
    category: 'SALADS',
    alt: 'Classic Caesar salad'
  },
  {
    id: '16',
    name: 'Roasted Beetroot Salad',
    price: '₹1050',
    description: 'Roasted beets, walnuts, goat cheese, and arugula with a honey mustard vinaigrette.',
    image: 'https://images.unsplash.com/photo-1599021404115-374697921a97?auto=format&fit=crop&q=80&w=800',
    category: 'SALADS',
    alt: 'Colorful beetroot salad'
  },
  {
    id: '17',
    name: 'Asian Sesame Salad',
    price: '₹1000',
    description: 'Napa cabbage, carrots, bell peppers, edamame, and crispy wontons with sesame ginger dressing.',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=800',
    category: 'SALADS',
    alt: 'Asian style salad with sesame'
  },

  // MAINS
  {
    id: '5',
    name: 'Truffle Risotto',
    price: '₹2400',
    description: 'Arborio rice slow-cooked with wild mushrooms, white truffle oil, and aged parmesan cheese. Finished with fresh parsley.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACNLPd_cybGu0WvbtUHl2k9z4DJvRnyBVSH9frOMcTVkxL0eZ1yzclFQGhXT-7vldgE6-_-zPnS2LWFhSVZm2CyoZLZ1TkliJc-0OeYpLbMHSSOHXVRO2gSm44eRWw3P2TR_E-EpFECctYGC_q084z5_dlNay9i7TyqsMDfCbEStTAcChwxAZVeXaBwayQgAkHKBof2iuDQy6-OanRyMbBOe4YPOlY7LC9kAy45ke_KlO2lF72DHMK9rabU0r3U-FwxGV0F25CnxIB',
    category: 'MAINS',
    alt: 'Creamy truffle risotto in a white bowl'
  },
  {
    id: '6',
    name: 'Classic Wagyu',
    price: '₹2800',
    description: 'Premium Wagyu beef patty, caramelized onions, gruyère cheese, and house sauce on a brioche bun. Served with truffle fries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEBlGGGuZCXG5fddXqX-F5LmRkFaAoCuq2aWxXF45cNAxD1W-ijGnEuEvdF2Qeu9153XwM5aDQTu0VCbm5jFlA43cYWzbPlMl24NbV9LymXS1kAVy1M-q6OIp2awRuSeyNsm8YwuzKmoZSwF_uD4irZ8Zkhqh3XOYVopqiZW07E38JocJ1cn8qrjuAldIMyP_bfTdJwUqv9lxhpFRUfvvmw2rP1xg-m7FvBwcyTJ_Fd0ZlqNX2R0i-eQZSVO4c9EhX8CAFmB3CIrvN',
    category: 'MAINS',
    alt: 'Gourmet beef burger with melted cheese'
  },
  {
    id: '7',
    name: 'Pan-Seared Salmon',
    price: '₹2200',
    description: 'Atlantic salmon fillet with lemon butter sauce, asparagus, and roasted baby potatoes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=800',
    category: 'MAINS',
    alt: 'Grilled salmon dish'
  },
  {
    id: '18',
    name: 'Margherita Pizza',
    price: '₹1400',
    description: 'Classic Neapolitan pizza with San Marzano tomato sauce, fresh buffalo mozzarella, and basil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    category: 'MAINS',
    alt: 'Fresh margherita pizza'
  },
  {
    id: '19',
    name: 'Lamb Chops',
    price: '₹3000',
    description: 'Herb-crusted lamb chops served with mint chimichurri and garlic mash.',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800',
    category: 'MAINS',
    alt: 'Grilled lamb chops'
  },

  // DESSERTS
  {
    id: '8',
    name: 'Matcha Cheesecake',
    price: '₹1200',
    description: 'Creamy matcha infused cheesecake on a black sesame crust. Served with a dollop of yuzu whipped cream.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJeL-gFF5tiQ_JcLG92btIowuSjK8W8b7apk5jeG4Qllo-N32RxTz5wpxyulACpFAqZGxv8HRmzYIPPEbHZCMCRpXTbBWFEnwwuopyteqbV6l6ehzsF4ha5NWyacZRmkm06U6KeOjab-0XO1M23FAb6Q7YjjN4S6PQPZWI66suMLoh30_OY7Sjc02ZgpkztYEMtripAvwARaR2nF5y6_drgki_WEii34zZTgWNc6tBQeopdrCB6I0ahkjOHZDJBHVjv9fyxRqi8b-f',
    category: 'DESSERTS',
    alt: 'Slice of matcha cheesecake'
  },
  {
    id: '9',
    name: 'Berry Delight',
    price: '₹1000',
    description: 'House-churned strawberry ice cream served with fresh seasonal berries and a drizzle of balsamic glaze.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKFb7sYpR3VPMmhbXTYG7ELOLM2C3F1U7uJgj-37RztWWMuPDChlEFYO4eFAOwE7XKllwePL0oNdOKy-2bEPc_K04hO6u0XEkuNv0Ydz3pKWQ08InFIG5xPCFh89EVXzG5HeAIrC9p6kJMvY0ckkcLuNgbubQIbyHxYN8NwfLO1EtYExqixWqt4R0HX8iR7ueycI4a9A8Cc2c2HsGrau2yf-iWs3jHaxKMP-dM8eTRB_mCcAK2cb0fPlS89yvSHF5796utuGP5TnvT',
    category: 'DESSERTS',
    alt: 'Bowl of strawberry ice cream'
  },
  {
    id: '20',
    name: 'Chocolate Lava Cake',
    price: '₹1100',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800',
    category: 'DESSERTS',
    alt: 'Molten chocolate lava cake'
  },
  {
    id: '21',
    name: 'Tiramisu',
    price: '₹1150',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    category: 'DESSERTS',
    alt: 'Classic tiramisu slice'
  },
  {
    id: '22',
    name: 'Panna Cotta',
    price: '₹950',
    description: 'Vanilla bean panna cotta topped with passion fruit coulis.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    category: 'DESSERTS',
    alt: 'Vanilla panna cotta'
  },

  // DRINKS
  {
    id: '10',
    name: 'Signature Green Detox',
    price: '₹600',
    description: 'A refreshing blend of spinach, apple, cucumber, lemon, and ginger.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800',
    category: 'DRINKS',
    alt: 'Green detox juice'
  },
  {
    id: '11',
    name: 'Hibiscus Iced Tea',
    price: '₹550',
    description: 'Cold-brewed hibiscus tea infused with mint and a hint of honey.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
    category: 'DRINKS',
    alt: 'Red hibiscus iced tea'
  },
  {
    id: '23',
    name: 'Mango Lassi',
    price: '₹500',
    description: 'Traditional yogurt-based drink blended with sweet alphonso mangoes.',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800',
    category: 'DRINKS',
    alt: 'Yellow mango lassi drink'
  },
  {
    id: '24',
    name: 'Espresso Tonic',
    price: '₹450',
    description: 'Double shot of espresso poured over ice and tonic water with a slice of orange.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c7faaf?auto=format&fit=crop&q=80&w=800',
    category: 'DRINKS',
    alt: 'Iced espresso tonic'
  },
  {
    id: '25',
    name: 'Fresh Lime Soda',
    price: '₹350',
    description: 'Sparkling soda water with fresh lime juice, mint, and sea salt.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    category: 'DRINKS',
    alt: 'Refreshing lime soda with mint'
  }
];
