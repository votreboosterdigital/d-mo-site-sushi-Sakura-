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
    text: 'Le meilleur sushi de Montréal, sans exagération. Le Rainbow Roll est exceptionnel, et la livraison était là en 28 minutes chrono. Je recommande à tous mes amis.',
    author: 'Marie-Claude B.',
  },
  {
    id: 'testimonial-2',
    rating: 5,
    text: "Fraîcheur incroyable, présentation soignée. On sent que c'est fait à la main avec amour. Les nigiri fondent en bouche. Un vrai coup de coeur.",
    author: 'Jonathan P.',
  },
  {
    id: 'testimonial-3',
    rating: 5,
    text: 'Commander ici est devenu notre rituel du vendredi soir. Qualité constante, portions généreuses, et le service est toujours souriant. Merci !',
    author: 'Sophie & Alex R.',
  },
]
