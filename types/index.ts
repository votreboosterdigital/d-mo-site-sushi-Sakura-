// Types principaux du site sushi

export type Product = {
  id: string
  name: string
  description: string
  price: number        // en dollars CAD
  image: string        // URL Unsplash (placeholder)
  isPopular?: boolean
}

export type Testimonial = {
  id: string
  rating: number       // 1–5 étoiles
  text: string
  author: string
}
