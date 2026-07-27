import type { Product } from "@/lib/products"

const unsplash = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`

export const siteImages = {
  heroRitual: unsplash("photo-1781080922537-7d5338f96e95", 1800),
  soapBotanicals: unsplash("photo-1755716274949-8cb03b086302", 1400),
  soapMaking: unsplash("photo-1605264964528-06403738d6dc", 1400),
  candleRitual: unsplash("photo-1585641689080-2e530457803b", 1400),
  candleShelf: unsplash("photo-1602607202950-a06a2a03cb9d", 1400),
  giftSet: unsplash("photo-1566813326586-741374c2caa7", 1400),
  bathTools: unsplash("photo-1781388466821-609b24f7e12c", 1400),
}

const categoryFallbacks: Record<Product["category"], string> = {
  soaps: siteImages.soapBotanicals,
  candles: siteImages.candleRitual,
  goodies: siteImages.giftSet,
}

const productImages: Record<string, string> = {
  "Honey + Oatmeal Bar Soap": unsplash("photo-1600857544200-b2f666a9a2ec"),
  "Lavender Aromatherapy Bar Soap": unsplash("photo-1755716274949-8cb03b086302"),
  "Turmeric Bar Soap": unsplash("photo-1781080922537-7d5338f96e95"),
  "Rose Clay & Charcoal Bar Soap": unsplash("photo-1603533627544-4b256401b1ee"),
  "Coffee Soap - Scrub Bar": unsplash("photo-1605265058749-78af14a1be2b"),
  "Charcoal Detox Soap Bar": unsplash("photo-1607006344380-b6775a0824a7"),
  "Lemongrass + Poppy Seeds - Exfoliating Bar Soap": unsplash("photo-1614806687007-2215a9db3b1c"),
  "Sake Kasu Soap": unsplash("photo-1785014532040-ca3b47375ac9"),
  "Butterfly Pea Tea Bar Soap": unsplash("photo-1474625121024-7595bfbc57ac"),
  "Icelandic Kelp Bar Soap - Collab w/Burlap & Barrel": unsplash("photo-1774434923581-91ed9d8ee79b"),
  "Sandalwood + Amber Soap Bar": unsplash("photo-1584305574647-0cc949a2bb9f"),
  "Whiskey Bar Soap": unsplash("photo-1546552768-9e3a94b38a59"),
  "Unicorn Rainbow Magic Soap": unsplash("photo-1454873019514-eae2f086587a"),
  "Bar Soap Ends Bundle - Zero Waste": unsplash("photo-1781080922537-7d5338f96e95"),
  "The New Yorker Bar Soap": unsplash("photo-1551978245-67f1c131ac55"),
  "Tomato Leaf + Mint Soy Candle": unsplash("photo-1603897076223-17f346f02a03"),
  "Cactus Flower + Jade Soy Candle": unsplash("photo-1602607202436-d1b8db3b7b32"),
  "Sea Salt + Orchid Soy Candle": unsplash("photo-1602607202679-d4a5e8d2b524"),
  "White Birch Soy Candle": unsplash("photo-1602607202950-a06a2a03cb9d"),
  "NYC Sunset Candle": unsplash("photo-1605718699793-075babe700f3"),
  "Oakmoss + Amber Soy Candle": unsplash("photo-1602607203304-b57d80a65791"),
  "Cranberry Woods Soy Candle": unsplash("photo-1602607203475-c5e99918dfc5"),
  "Peppermint + Eucalyptus Soy Candle": unsplash("photo-1602607203559-d38903b80507"),
  "Tonka Bean + Oud Soy Candle": unsplash("photo-1602607203588-d6d0eda790e3"),
  "Ocean Mist Soy Candle": unsplash("photo-1620915789294-c972b1b1af7c"),
  "Amber Citrus+ Sea Salt Soy Candle": unsplash("photo-1643716991951-285e23e35961"),
  "Lavender + Sage Soy Candle": unsplash("photo-1659440508882-9202c080e573"),
  "Custom Gift Set": siteImages.giftSet,
  "The New Yorker Gift Set": unsplash("photo-1578426875450-06641dbfe363"),
  "Natural Sea Wool Sponge": siteImages.bathTools,
  "Bath Tub Soap Dish Gift Set": unsplash("photo-1578426720323-6d3b67133446"),
  "Bubble Soap Dish": unsplash("photo-1621483942908-fc9e22adb397"),
  "leaf soap dish": unsplash("photo-1621483943942-6189d19154c5"),
  "Hand Sanitizer": unsplash("photo-1638131163592-f91c859ac4fa"),
  "Soap Terrarium": unsplash("photo-1638131164217-c240e7627611"),
}

export function getProductImage(product: Pick<Product, "name" | "category">) {
  return productImages[product.name] ?? categoryFallbacks[product.category]
}
