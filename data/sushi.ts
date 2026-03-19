import type { Product, Testimonial } from '@/types'

// Données factices — à remplacer par les vraies infos du client

export const products: Product[] = [
  {
    id: 'salmon-nigiri',
    name: 'Salmon Nigiri',
    description: 'Saumon frais du Pacifique sur riz vinaigré, légèrement flambé.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
    isPopular: true,
  },
  {
    id: 'dragon-roll',
    name: 'Dragon Roll',
    description: 'Avocat, crevette tempura, concombre, sauce anguille et sésame.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80',
    isPopular: true,
  },
  {
    id: 'spicy-tuna-roll',
    name: 'Spicy Tuna Roll',
    description: 'Thon rouge, mayo sriracha, concombre, tobiko. Pour les amateurs de piquant.',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80',
    isPopular: false,
  },
  {
    id: 'rainbow-roll',
    name: 'Rainbow Roll',
    description: 'California roll recouvert de saumon, thon, avocat et crevette. Notre signature.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80',
    isPopular: true,
  },
  {
    id: 'edamame',
    name: 'Edamame',
    description: 'Fèves de soja vapeur, fleur de sel de mer. Simple et irrésistible.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
    isPopular: false,
  },
  {
    id: 'miso-soup',
    name: 'Soupe Miso',
    description: 'Bouillon dashi traditionnel, tofu soyeux, wakamé et oignons verts.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    isPopular: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    rating: 5,
    text: "BlasianHalal a géré le traiteur pour notre mariage et c'était parfait. Les sushis étaient frais, la cuisine haïtienne savoureuse, et tout était 100% halal. Nos invités ont adoré !",
    author: 'Fatima & Youssef M.',
  },
  {
    id: 'testimonial-2',
    rating: 5,
    text: "Pour notre célébration de l'Eid, nous avons commandé un buffet complet. Présentation magnifique, saveurs incroyables, service impeccable. Une équipe de confiance.",
    author: 'Amina K.',
  },
  {
    id: 'testimonial-3',
    rating: 5,
    text: "La fusion sushi-cuisine haïtienne est une idée de génie ! On a découvert BlasianHalal via un ami et maintenant c'est notre traiteur attitré pour tous nos événements privés.",
    author: 'Marcus & Jennifer D.',
  },
]
