import { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, Filter, Star, Clock, MapPin, Menu, Download } from "lucide-react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Type definitions
interface MenuItem {
  name: string;
  price: number | { veg?: number; chicken?: number; prawns?: number };
  description: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface MenuData {
  [key: string]: MenuItem[];
}

// Complete Uncle's Chinese Menu - Comprehensive Data
const menuData: MenuData = {
  beverages: [
    { name: "Fresh Lime Soda", price: 129, description: "Refreshing lime with sparkling soda", image: "/1.jpg" },
    { name: "Ice Tea Lemon/Peach", price: 129, description: "Cool and refreshing iced tea varieties", image: "/2.jpg" },
    { name: "Fresh Lime Water", price: 99, description: "Pure fresh lime water", image: "/3.jpg" },
    { name: "Softdrinks", price: 30, description: "Assorted carbonated beverages", image: "/4.jpg" }
  ],
  mocktails: [
    { name: "Strawberry Passion", price: 159, description: "Sweet strawberry passion fruit blend", image: "/5.jpg" },
    { name: "Virgin Mojito", price: 159, description: "Classic mint and lime refresher", image: "/6.jpg" },
    { name: "Ginger And Basil Mojito", price: 159, description: "Fresh Ginger Basil lime wedges Muddled with Lime, Sugar & Ice", image: "/7.jpg" },
    { name: "Ruthless", price: 159, description: "Litchi cranberry juice, lemon Slice mint leaves ice", image: "/8.jpg" },
    { name: "Wild Cat Cooler", price: 159, description: "Blueberry & lime Juice with light Sugar & Soda added as per Taste", image: "/9.jpg" },
    { name: "Sweet Sunrise", price: 159, description: "Orange Cranberry & lemon juice, added with icecubes", image: "/10.jpg" }
  ],
  boba: [
    { name: "Mango Boba Tea", price: 189, description: "A tropical fusion of creamy milk and luscious mango flavor, complemented by the delightful burst of popping boba. Served chilled over ice for a refreshing and indulgent treat", image: "/11.jpg" },
    { name: "Strawberry Boba Tea", price: 189, description: "A refreshing fusion of creamy milk and vibrant strawberry flavor, enhanced by the playful burst of popping boba. Served chilled over ice for a delightful treat", image: "/12.jpg" }
  ],
  soups: [
    { name: "Spicy Tomyum Soup", price: { veg: 159, chicken: 169 }, description: "A Tangy Thai Clear Soup made Spicy With Thai Herbs And Lemony Flavoured", image: "/13.jpg" },
    { name: "Laksa Ma Soup (Malaysian)", price: { veg: 179, chicken: 189 }, description: "A Glourious Aromatic Curry Soup With Fried Tofu And Noodles To Tatalise Your Taste Buds", image: "/14.jpg" },
    { name: "Tom Kha Soup (Thai)", price: { veg: 179, chicken: 189 }, description: "Thai Coconut milk broth flavoured With Zesty Galangal And Lemongrass with Touch Of Lime", image: "/15.jpg" },
    { name: "Spicy Garlic Coriander", price: { veg: 149, chicken: 159 }, description: "An Oriental thick preparation of chopped coriander with veggies/chicken/prawns, garlic and green chillies", image: "/16.jpg" },
    { name: "Manchow Soup", price: { veg: 149, chicken: 159 }, description: "All Time Favourite Medium Spicy Thick Soup With Minced Veg/Chicken, Fresh Green Chillies And dash of Soya", image: "/17.jpg" },
    { name: "Hot & Sour Soup", price: { veg: 149, chicken: 159 }, description: "All Time Favourite Medium Spicy Thick Soup With shredded Veg/Chicken, Fresh Green Chillies And dash of Soya", image: "/18.jpg" },
    { name: "Sweetcorn Soup", price: { veg: 149, chicken: 159 }, description: "Dice mix veg/chicken And Egg With Creamy Corn Tastes Mild", image: "/19.jpg" },
    { name: "Sotyam Soup", price: { veg: 159, chicken: 169 }, description: "Shredded Chicken In A Broth Soup Indo Style", image: "/20.jpg" },
    { name: "Beijing Spicy Soup", price: { veg: 149, chicken: 159 }, description: "Thick Soup With Chopped Veg/chicken From Beijing, Tastes Medium Spicy", image: "/21.jpg" },
    { name: "Garden Soup", price: { veg: 149, chicken: 159 }, description: "A Chinese Style Clear Stock With Veg/chicken, Mildly Flavoured", image: "/22.jpg" },
    { name: "Phek Soup (Thai)", price: { veg: 179, chicken: 189 }, description: "Rich Stew Coconut milk Soup Flavoured with lemongrass and Thai Basil, Medium Spicy", image: "/23.jpg" },
    { name: "Wanton Noodles Soup", price: { veg: 149, chicken: 159 }, description: "Wontons filled with mince Veg/Chicken serve in a clear soup with Noodles", image: "/24.jpg" },
    { name: "Talumain Soup", price: { veg: 149, chicken: 159 }, description: "Classic non spicy thick soup prepared with chunks of veggies/chicken and topped with Soft Noodles", image: "/25.jpg" },
    { name: "Momo's Soup", price: { veg: 149, chicken: 159 }, description: "Clear soup Immersed with momo and flavoured with sesame oil and celery leaf", image: "/26.jpg" },
    { name: "Thukpa Soup", price: { veg: 149, chicken: 159 }, description: "A Speciality Soup From Tibet Along With Noodles And Shredded Veg/Chicken, Medium Spicy", image: "/27.jpg" },
    { name: "Seafood Spicy Soup", price: 199, description: "Chef's Special soup with assorted seafood and vegetables", image: "/28.jpg" },
    { name: "Chef Special Soup", price: 179, description: "Rich & Flavoured of Full Minced and Cube Chicken With Asparagus, Red Pepper, Fresh Red Chilli N Egg Drop", image: "/29.jpg" }
  ],
  momos: [
    { name: "Classic Momos (6 Pcs)", price: { veg: 199, chicken: 209, prawns: 309 }, description: "All Time Favourite Classic Momos Stuffed To Satiation, From Southern China, Enjoy...!!!", image: "/1.jpg" },
    { name: "Shanghai Momos (6 Pcs)", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Minced Veg/Chicken/seafood Stuffed Momos Served In Shanghai Style With Spicy Sauce, Must Try...", image: "/2.jpg" },
    { name: "Crispy Fried Momos (6 Pcs)", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Crispy fried Classic Momos Served along with Sweet Garlic Sauce", image: "/3.jpg" },
    { name: "Schezwan Momos (6 Pcs)", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Classic Momos tossed in spicy Schezwan sauce", image: "/4.jpg" },
    { name: "Steam / Fried Wonton (6 Pcs)", price: { veg: 179, chicken: 199, prawns: 309 }, description: "A Glamorous Preparation Of Minced Veg/Chicken wrapped In Wanton, Steamed/Fried and Served With Sweet Garlic Sauce", image: "/5.jpg" },
    { name: "Chicken Jhol Momo", price: { chicken: 249 }, description: "Delight in the spicy and savoury flavors of our dish, tender and juicy Chi-filled in momos served in a rich and aromatic jhol broth", image: "/6.jpg" },
    { name: "Hot Basil Momos (6 Pcs)", price: { veg: 199, chicken: 209 }, description: "Classic Momos flavoured with hot Basil and Steamed Served with Momos Sauce", image: "/7.jpg" },
    { name: "Burmese Chicken Dumpling", price: { chicken: 229 }, description: "A flavorful steamed dumpling inspired by regional spices and herbs, wrapped in a delicate handmade dough", image: "/8.jpg" },
    { name: "Cheese Corn Spinach Momo", price: { veg: 229 }, description: "Creamy vegetarian dumpling sweet corn, spinach, and a touch of garlic, yet flavor in every bite", image: "/9.jpg" },
    { name: "Thai Pattaya Dumpling", price: { chicken: 229 }, description: "Thai-inspired dumpling featuring tender chicken in a fragrant, coconut-based filling", image: "/10.jpg" }
  ],
  grill: [
    { name: "Satay Chicken", price: { chicken: 299 }, description: "Grilled Marinated Chicken Served With Peanut Sauce", image: "/11.jpg" },
    { name: "Satay Prawns", price: { prawns: 369 }, description: "Grilled Marinated Prawns Served With Peanut Sauce", image: "/12.jpg" },
    { name: "Malaysian Grill Chicken", price: { chicken: 309 }, description: "Chicken Thigh Marinated in Malaysian sauce and Grilled to perfection..medium spicy", image: "/13.jpg" },
    { name: "Grill Chicken in Barbeque sauce", price: { chicken: 309 }, description: "Grilled Boneless Chicken Leg Infused With barbeque sauce & served on bed of Bean sprouts", image: "/14.jpg" },
    { name: "Char Grilled Chicken", price: { chicken: 309 }, description: "Grilled Boneless Chicken Infused With Chilly Garlic Sauce", image: "/15.jpg" },
    { name: "Fish in Banana Leaf", price: 389, description: "Dice of Basa marinated in Exotic Thai Herbs, wrapped in Banana leaf and Grilled to perfection", image: "/16.jpg" },
    { name: "Grilled Pomfret", price: 569, description: "A Whole Pomfret marinated with Garlic Ginger, Pepperika & spicy Red chilli Flavour, Medium Spicy", image: "/17.jpg" },
    { name: "Grilled Fish in Barbeque Sauce", price: 359, description: "Marinated in a delicate sweet n spicy Tn Tangy Barbeque sauce and Grilled To Perfection", image: "/18.jpg" }
  ],
  vegStarters: [
    { name: "Mongolian Tofu", price: 279, description: "Crispy tofu stir-fried Combines a Savory, Sweet, And Spicy Sauce. With Onion, Red Yellow Bell Pepper And Sesme Seed", image: "/19.jpg" },
    { name: "Veg Spring Roll", price: 259, description: "Crispy vegetable spring rolls", image: "/20.jpg" },
    { name: "Crispy Corn Garlicky", price: 239, description: "Crispy fried American corn tossed in sweet n spicy chilli garlic sauce", image: "/21.jpg" },
    { name: "Burmese Chilly Potato", price: 239, description: "Finger Cut Crispy Potatoes Wok Tossed in Medium Spicy Burmese Sauce", image: "/22.jpg" },
    { name: "Veg Manchurian Dry", price: 259, description: "Classic vegetable manchurian dry preparation", image: "/23.jpg" },
    { name: "Honey Chilly Potato", price: 239, description: "Crispy Fried Finger Potato Tossed in A Wok with Honey & Chilly Soya, Tastes Yummice...", image: "/24.jpg" },
    { name: "Mushroom Chilly Dry", price: 269, description: "Batter fried Button Mushroom tossed in soya chilli sauce", image: "/25.jpg" },
    { name: "Crispy Chilly Veg", price: 239, description: "Assorted Mix Crispy Fried in Tangy Medium Spicy sauce", image: "/26.jpg" },
    { name: "Paneer Chilly Dry", price: 289, description: "All Time Favorite", image: "/27.jpg" },
    { name: "Kung Pao Potato", price: 239, description: "Crispy Fried Potato cubes Tossed In Wok with Kung Pao sauce and peanuts, Its Tangy...!!!", image: "/28.jpg" },
    { name: "Cheese Chilli Mushroom", price: 289, description: "Fresh button Mushroom stuffed with Cheese, deep fried & Wok tossed with sweet and spicy Garlic sauce", image: "/29.jpg" },
    { name: "Lotus Stem Chilli Basil", price: 259, description: "Crispy Fried Lotus Stem Tossed In A Tangy Tasty Medley Of Thai Bud Chilly and Basil", image: "/1.jpg" }
  ],
  salads: [
    { name: "Sam jam Jhe", price: 229, description: "Finger cut Chinese cabbage, pokchoy, carrot, cucumber, glass noodles tossed in sweet n spicy tangy sauce", image: "/2.jpg" },
    { name: "SomTom Salad", price: 239, description: "Macerated Raw Papaya Spaghetti, Fresh Chilli, lemon, tomato, crushed Peanuts & Dressed Up With Palm Jaggery", image: "/3.jpg" },
    { name: "Gado - Gado", price: 239, description: "Indonesian Salad Of Slightly Boiled Or Steamed Vegetable And Hard Boiled Eggs, Served With Peanut Sauce", image: "/4.jpg" },
    { name: "Stirred Fried Chinese Veg", price: 309, description: "Assorted Chinese Healthy Greens Stir Wok Tossed In Garlic And Sesami Oil", image: "/5.jpg" },
    { name: "Kimchi Salad", price: 229, description: "Traditional Korean fermented cabbage salad", image: "/6.jpg" }
  ],
  nonVegStarters: [
    { name: "Roast Chicken Pepper", price: 279, description: "Roasted Chicken with Bell Pepper Tossed in Chilly Style sprinkled with crushed black pepper", image: "/7.jpg" },
    { name: "Kung Pao Chicken", price: 279, description: "Diced Glazed Chicken With Ginger, Light Chilly Soya, Chinese Vinegar, Sesame Seeds And Nuts, Flavourful but Not Spicy", image: "/8.jpg" },
    { name: "Chicken Burnt Red Chilli Pepper", price: 279, description: "Glazed chicken tossed in burnt chilli flakes, and veggies... Its spicy", image: "/9.jpg" },
    { name: "Cilantro Chicken", price: 289, description: "A flavorful dish featuring chicken marinated in a zesty blend of cilantro, lime juice, garlic, and spices", image: "/10.jpg" },
    { name: "Crispy Crunchy Chicken", price: 269, description: "Shredded Finger Chicken Marinated with Paprika, Pepper, Chilly and Ginger Garlic deep fried... Very Crisp", image: "/11.jpg" },
    { name: "Sticky Korean Wings", price: 309, description: "Chicken wings coated in a sweet and spicy sauce made with ingredients like gochujang soy sauce, honey, and garlic", image: "/12.jpg" },
    { name: "Chicken Lollypop", price: 289, description: "All Time Favourite Classic Preparation", image: "/13.jpg" },
    { name: "Chicken Lollypop Masala", price: 309, description: "All Time Favourite Classic Preparation, tastes Awesome When Served With Schezwan Sauce", image: "/14.jpg" },
    { name: "Dragon Chicken", price: 269, description: "Indo-Chinese crispy fried chicken strips tossed in a spicy, Tangy, and savory sauce with bell peppers, cashews", image: "/15.jpg" },
    { name: "Chicken Chilly Dry", price: 269, description: "All Time Favourite, Need No Introduction", image: "/16.jpg" }
  ],
  seafoodStarters: [
    { name: "Roasted Thai Chilly Prawns", price: 399, description: "Roasted Crispy fried prawns tossed in Thai style", image: "/17.jpg" },
    { name: "Singapore Chilly Prawns", price: 399, description: "Fresh Prawns Cooked In Singaporean Style", image: "/18.jpg" },
    { name: "Kung Pao Prawns", price: 399, description: "Glazed Prawns With Ginger, Dark Light Soya, Chinese Vinegar, Sesame seed and Nuts, Flavourful But Not Spicy", image: "/19.jpg" },
    { name: "Ebi Tempura (6 PCS)", price: 399, description: "Japanese Tempura Crispy Fried Prawns With Japanese And Ginger Infusion/Mayo", image: "/20.jpg" },
    { name: "Basil Garlic Prawns", price: 399, description: "Fresh Prawns Prepared In Tempting Spicy Basil Sauce", image: "/21.jpg" },
    { name: "Dynamite Prawns", price: 399, description: "Golden Fried Crispy Prawns Coated With Sriracha Chilli Sauce N Mayo", image: "/22.jpg" },
    { name: "Crackle Fried Prawns", price: 399, description: "Crumb fried Prawns served with side of sweet Chilli sauce or Mayo", image: "/23.jpg" },
    { name: "Pepper Garlic Fish", price: 369, description: "Stir fry fish tossed with garlic, pepper maggie seasoning and cooking wine", image: "/24.jpg" },
    { name: "Crispy Oyster Pomfret", price: 559, description: "Crispy Crumb Fried Pomfret topped with Oyster Sauce", image: "/25.jpg" }
  ],
  vegGravy: [
    { name: "Veg Manchurian Gravy", price: 249, description: "Classic vegetable manchurian in rich gravy", image: "/26.jpg" },
    { name: "Veg Ball Hot Garlic", price: 249, description: "English Veggies with Balls of Vegetable Wok Tossed in Garlic Sauce", image: "/27.jpg" },
    { name: "Veg Hongkong Gravy", price: 249, description: "Exotic Veggies, Onion, Capsicum tossed in Spicy Dark Soya Sauce", image: "/28.jpg" },
    { name: "Mushroom Chilly Gravy", price: 269, description: "Light Batter Fried Mushroom along with Shredded Capsicum, Onion In special CHilly Sauce", image: "/29.jpg" },
    { name: "Sweet & Sour Veg", price: 249, description: "Dice Mix Vegetables And Chunks of Pineapple Cooked In Sweet N Sour Sauce With Tangy Taste, Loved By Kids", image: "/1.jpg" },
    { name: "Three Treasure Veg", price: 309, description: "Traditional Mangolian Cuisine Features Straw Mushroom, brocolli And Pokchoy Cooked In A Medium Spicy Blackbean Sauce", image: "/2.jpg" },
    { name: "Paneer Chilly Peking Sauce", price: 289, description: "Cube Paneer, Bell Pepper Onion tossed with Chilly Peking Sauce Medium Spicy", image: "/3.jpg" },
    { name: "Exotic Veg in Sambal Sauce", price: 309, description: "Assorted cube Veg, Zuccini, Mushroom, Peas, Carrot, Tomato, Onion, mixed up with Devil's spicy sauce", image: "/4.jpg" }
  ],
  nonVegGravy: [
    { name: "Chicken Chilly Gravy", price: 289, description: "Classic chicken chilly in rich gravy", image: "/5.jpg" },
    { name: "Chicken Hot Garlic/Manchurian", price: 289, description: "Popular chicken preparations in flavorful sauces", image: "/6.jpg" },
    { name: "Chicken Hunan Sauce", price: 309, description: "Chicken in traditional Hunan style sauce", image: "/7.jpg" },
    { name: "Chicken Hong Kong Gravy", price: 289, description: "Chicken in Hong Kong style gravy", image: "/8.jpg" },
    { name: "Chicken Chilli Basil Sauce", price: 299, description: "Dice chicken mingled with Bell Pepper in medium spicy Chilli Basil sauce", image: "/9.jpg" },
    { name: "Mongolian Claypot Chicken", price: 299, description: "Diced Glazed Chicken With Ginger, Dark Light Soy, Chinese Vinegar And Nuts, Sweet n Spicy", image: "/10.jpg" },
    { name: "Chicken Madras Curry", price: 409, description: "Sliced Chicken prepared in Madras curry paste along with Curry leaf and flavoured with Coconut Milk", image: "/11.jpg" },
    { name: "Chicken in Black Bean Sauce", price: 309, description: "A Classic Chinese Preparation With Chicken Chunks Cooked In Fresh Spicy Bean Sauce Made By Our Chef", image: "/12.jpg" }
  ],
  seafoodGravy: [
    { name: "Hong Kong Gravy", price: 409, description: "Premium seafood in Hong Kong style gravy", image: "/13.jpg" },
    { name: "Chilly Peking", price: 409, description: "Spicy Peking style seafood preparation", image: "/14.jpg" },
    { name: "Madras Curry", price: 439, description: "Fresh prawns prepared in Madras curry paste along with curry leaf and flavoured with coconut", image: "/15.jpg" },
    { name: "Chilli Basil Sauce (Prawns/Fish)", price: 409, description: "Fresh Prawns/fish mingled with bell pepper in medium spicy chilli basil sauce", image: "/16.jpg" },
    { name: "Wok Toss Sauce (Prawns/Fish)", price: 409, description: "Fresh prawns/Fish cooked with dark Wok sauce", image: "/17.jpg" },
    { name: "Pomfret (Choice of Sauce)", price: 569, description: "Fresh pomfret with choice of Schezwan or Soya sauce", image: "/18.jpg" }
  ],
  curries: [
    { name: "Malaysian Curry", price: { veg: 399, chicken: 419, prawns: 469 }, description: "A Traditional Malaysian Curry With The Blend Of Exotic Herbs And Nuts, Fresh Red Chilly & Coconut Cream comes along with Roti Kanai 2pc", image: "/19.jpg" },
    { name: "Thai Red/Yellow/Green Curry", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Slow Simmered Spicy Curry With Thai Red Curry Paste, Fresh Sweet Coconut, Sour Tamarind And Fresh Herbs Served with a bowl of Steamed Rice", image: "/20.jpg" },
    { name: "Burmese Khow-suey", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Popular Burmese Cuisine, Burnt Garlic Rice/Noodles Meldly With Rich Creamy Curry On The Side Cum With Garlic/Onion Flakes", image: "/21.jpg" },
    { name: "Kari Kapitan (Malaysian)", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Traditional Malaysian curry preparation", image: "/22.jpg" },
    { name: "Pattaya (Thai)", price: { veg: 319, chicken: 389, prawns: 449 }, description: "Authentic Thai curry preparation", image: "/23.jpg" }
  ],
  vegRice: [
    { name: "Roti Kanai (2Pcs)", price: 109, description: "Traditional Malaysian flatbread", image: "/24.jpg" },
    { name: "Garlic Roti Kanai (2Pcs)", price: 129, description: "Traditional Malaysian flatbread with garlic", image: "/25.jpg" },
    { name: "Steam Rice", price: 189, description: "Simple steamed rice", image: "/26.jpg" },
    { name: "Veg Fried Rice", price: 239, description: "Classic vegetable fried rice", image: "/27.jpg" },
    { name: "Veg Schezwan Fried Rice", price: 259, description: "Spicy Schezwan style fried rice", image: "/28.jpg" },
    { name: "Veg Burnt Garlic Rice", price: 269, description: "Aromatic burnt garlic flavored rice", image: "/29.jpg" },
    { name: "Veg Thai Chilly Rice", price: 259, description: "A Thai Wok Tossed Rice With Exotic Herbs And Julienne Thai Green Chillies", image: "/1.jpg" },
    { name: "Veg Basil Rice", price: 259, description: "Aromatic basil flavored rice", image: "/2.jpg" }
  ],
  chickenRice: [
    { name: "Egg Fried Rice", price: 249, description: "Simple egg fried rice", image: "/3.jpg" },
    { name: "Chicken Fried Rice", price: 259, description: "Classic chicken fried rice", image: "/4.jpg" },
    { name: "Chicken Schezwan Fried Rice", price: 279, description: "Spicy Schezwan chicken fried rice", image: "/5.jpg" },
    { name: "Chicken Burnt Garlic Rice", price: 289, description: "Aromatic chicken rice with burnt garlic", image: "/6.jpg" },
    { name: "Chicken Thai Basil Rice", price: 279, description: "Basil and Garlic Flavoured Chicken Fried rice", image: "/7.jpg" },
    { name: "Chicken Singapore Chilly Rice", price: 279, description: "Singapore style spicy chicken rice", image: "/8.jpg" }
  ],
  noodles: [
    { name: "Veg Hakka Noodles", price: 239, description: "Classic vegetable hakka noodles", image: "/9.jpg" },
    { name: "Chicken Hakka Noodles", price: 259, description: "Classic chicken hakka noodles", image: "/10.jpg" },
    { name: "Veg Schezwan Noodles", price: 259, description: "Spicy Schezwan style noodles", image: "/11.jpg" },
    { name: "Chicken Schezwan Noodles", price: 279, description: "Spicy Schezwan chicken noodles", image: "/12.jpg" },
    { name: "Veg Pad Thai Noodles", price: 269, description: "Traditional Thai Noodles Tossed With Assorted Veg And Garnished With Crushed Peanuts", image: "/13.jpg" },
    { name: "Chicken Pad Thai Noodles", price: 289, description: "Traditional Thai noodles tossed with chicken and garnished with crushed peanuts", image: "/14.jpg" },
    { name: "Singapore Chilly Noodles", price: 269, description: "Thin Rice Noodles Wok Fried with Assorted Veggies And Fresh Chillies, Made Traditional", image: "/15.jpg" },
    { name: "Dan Dan Noodles", price: 319, description: "Spicy Sichuan dish with Fresh noodles, Tossed in Peanuts Sesmi Paste and Red Yellow Pepper", image: "/16.jpg" }
  ],
  desserts: [
    { name: "Brownie with Hot Chocolate Sauce", price: 169, description: "Rich chocolate brownie with warm chocolate sauce", image: "/17.jpg" },
    { name: "Brownie with Vanilla Ice Cream", price: 169, description: "Decadent brownie served with creamy vanilla ice cream", image: "/18.jpg" },
    { name: "Honey Noodle with Ice Cream", price: 169, description: "Sweet honey noodles served with ice cream", image: "/19.jpg" }
  ]
};

const categories: Category[] = [
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'mocktails', name: 'Mocktails', icon: '🍹' },
  { id: 'boba', name: 'Boba Tea', icon: '🧋' },
  { id: 'soups', name: 'Soups', icon: '🍲' },
  { id: 'momos', name: "Momo's", icon: '🥟' },
  { id: 'grill', name: 'Grill', icon: '🔥' },
  { id: 'vegStarters', name: 'Veg Starters', icon: '🥗' },
  { id: 'salads', name: 'Salads', icon: '🥙' },
  { id: 'nonVegStarters', name: 'Non-Veg Starters', icon: '🍗' },
  { id: 'seafoodStarters', name: 'Seafood Starters', icon: '🦐' },
  { id: 'vegGravy', name: 'Veg Gravy', icon: '🍛' },
  { id: 'nonVegGravy', name: 'Non-Veg Gravy', icon: '🍖' },
  { id: 'seafoodGravy', name: 'Seafood Gravy', icon: '🐟' },
  { id: 'curries', name: 'Curries', icon: '🍜' },
  { id: 'vegRice', name: 'Veg Rice & Noodles', icon: '🍚' },
  { id: 'chickenRice', name: 'Non-Veg Rice', icon: '🍗' },
  { id: 'noodles', name: 'Noodles', icon: '🍝' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];

// 3D Ramen Bowl Component
const RamenBowl3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bowlRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const spotLight = new THREE.SpotLight(0xff6b6b, 0.5);
    spotLight.position.set(-5, 5, 2);
    scene.add(spotLight);

    const createFallbackBowl = () => {
      const group = new THREE.Group();
      
      // Bowl geometry
      const bowlGeometry = new THREE.SphereGeometry(1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.7);
      const bowlMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        shininess: 30
      });
      const bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
      bowl.position.y = -0.5;
      group.add(bowl);

      // Broth
      const brothGeometry = new THREE.SphereGeometry(1.1, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.6);
      const brothMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xD2691E,
        transparent: true,
        opacity: 0.8
      });
      const broth = new THREE.Mesh(brothGeometry, brothMaterial);
      broth.position.y = -0.3;
      group.add(broth);

      // Noodles (simplified as curved lines)
      for (let i = 0; i < 8; i++) {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(-0.8 + Math.random() * 1.6, -0.2, -0.8 + Math.random() * 1.6),
          new THREE.Vector3(-0.4 + Math.random() * 0.8, 0.2, -0.4 + Math.random() * 0.8),
          new THREE.Vector3(-0.6 + Math.random() * 1.2, -0.1, -0.6 + Math.random() * 1.2)
        );
        
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
        const noodleMaterial = new THREE.MeshPhongMaterial({ color: 0xFFF8DC });
        const noodle = new THREE.Mesh(tubeGeometry, noodleMaterial);
        group.add(noodle);
      }

      // Chopsticks
      const stickGeometry = new THREE.CylinderGeometry(0.02, 0.02, 2);
      const stickMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
      
      const chopstick1 = new THREE.Mesh(stickGeometry, stickMaterial);
      chopstick1.position.set(0.8, 0.5, 0.2);
      chopstick1.rotation.z = 0.3;
      group.add(chopstick1);
      
      const chopstick2 = new THREE.Mesh(stickGeometry, stickMaterial);
      chopstick2.position.set(0.7, 0.3, 0.1);
      chopstick2.rotation.z = 0.2;
      group.add(chopstick2);

      return group;
    };
    
    // Load GLB model like footer
    const loader = new GLTFLoader();
    loader.load(
      '/stylized_ramen_bowl.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.setScalar(12); // Match footer scale
        model.position.y = -1;
        model.rotation.x = 0.3; // Face up slightly
        scene.add(model);
        bowlRef.current = model;
      },
      undefined,
      (error) => {
        const fallbackBowl = createFallbackBowl();
        fallbackBowl.scale.setScalar(12); // Also scale fallback to match footer
        fallbackBowl.rotation.x = 0.3; // Face up slightly
        scene.add(fallbackBowl);
        bowlRef.current = fallbackBowl;
      }
    );

    camera.position.z = 4;
    camera.position.y = 1;

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !sceneRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      rendererRef.current.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      if (bowlRef.current) {
        bowlRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

// Menu Item Component
interface MenuItemProps {
  item: MenuItem;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const renderPrice = (price: number | { veg?: number; chicken?: number; prawns?: number }) => {
    if (typeof price === 'number') {
      return (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">₹{price}</span>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col gap-1">
        {price.veg && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-sm font-semibold text-green-400">Veg: ₹{price.veg}</span>
          </div>
        )}
        {price.chicken && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span className="text-sm font-semibold text-orange-400">Chicken: ₹{price.chicken}</span>
          </div>
        )}
        {price.prawns && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            <span className="text-sm font-semibold text-red-400">Prawns: ₹{price.prawns}</span>
          </div>
        )}
      </div>
    );
  };

  const getItemEmoji = (name: string) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('momo') || nameLower.includes('wonton')) return '🥟';
    if (nameLower.includes('soup')) return '🍲';
    if (nameLower.includes('rice')) return '🍚';
    if (nameLower.includes('noodle')) return '🍜';
    if (nameLower.includes('chicken')) return '🍗';
    if (nameLower.includes('prawn') || nameLower.includes('seafood')) return '🦐';
    if (nameLower.includes('curry')) return '🍛';
    if (nameLower.includes('beverage') || nameLower.includes('soda') || nameLower.includes('tea')) return '🥤';
    if (nameLower.includes('mocktail')) return '🍹';
    if (nameLower.includes('boba')) return '🧋';
    if (nameLower.includes('dessert') || nameLower.includes('brownie')) return '🍰';
    if (nameLower.includes('tofu') || nameLower.includes('paneer') || nameLower.includes('veg')) return '🥗';
    return '🍽️';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-gray-600/30 rounded-2xl p-6 hover:border-red-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 group overflow-hidden backdrop-blur-sm cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <motion.div 
              className="text-3xl group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              {getItemEmoji(item.name)}
            </motion.div>
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300">
              {item.name}
            </h3>
          </div>
          <div className="ml-4 text-right">
            {renderPrice(item.price)}
          </div>
        </div>
        
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300 pl-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {item.description}
        </motion.p>

        {item.description.toLowerCase().includes('spicy') && (
          <motion.div 
            className="flex items-center gap-2 mt-3 pl-12"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-red-400 text-sm"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🌶️
            </motion.span>
            <span className="text-red-400 text-xs font-medium">Spicy</span>
          </motion.div>
        )}
      </div>

      <motion.div 
        className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? [0, 180, 360] : 0
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      ></motion.div>
    </motion.div>
  );
};

// Category Section Component
interface CategorySectionProps {
  category: Category;
  items: MenuItem[];
}

const CategorySection = ({ category, items }: CategorySectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative group"
    id={category.id}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 rounded-2xl -m-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex items-center gap-6 mb-12">
      <div className="relative">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-light text-transparent bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text tracking-tight uppercase">
          {category.name}
        </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-red-500/40 via-orange-500/40 to-transparent"></div>
          <span className="text-xs text-gray-500 bg-gray-800/60 px-3 py-1 rounded-full backdrop-blur-sm">
            {items.length} items
          </span>
      </div>
        <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-transparent rounded-full"></div>
    </div>
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {items.map((item: MenuItem, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <MenuItem item={item} />
        </motion.div>
      ))}
    </div>

    <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-500/8 to-transparent rounded-full blur-2xl opacity-40"></div>
    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-orange-500/8 to-transparent rounded-full blur-xl opacity-40"></div>
  </motion.section>
);

// Main Menu Component
const EnhancedMenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const openCategoryPopup = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const closeCategoryPopup = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = selectedCategory ? categories.find(cat => cat.id === selectedCategory) : null;
  const selectedItems = selectedCategory ? menuData[selectedCategory] || [] : [];

  const filteredItems = selectedItems.filter((item: MenuItem) => 
    !searchTerm || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with 3D Bowl */}
      <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 text-4xl opacity-5"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            🐼
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-1/4 text-3xl opacity-5"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          >
            🥢
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <span className="text-white">
                  MENU
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-400 mb-8 font-light"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Authentic Thai & Chinese Cuisine Since 2000
              </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>25 Years</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>6 Locations</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openCategoryPopup('beverages')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🍜
                </motion.span>
                Explore Menu
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('#', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Menu
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl animate-spin">🍜</div>
                </div>
              }>
                <RamenBowl3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation - Minimal */}
      <motion.div 
        className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800/50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-full text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => openCategoryPopup(category.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="hidden sm:inline text-xs">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Menu Items Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-light text-white tracking-tight mb-3">
            EXPLORE OUR MENU
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Click on any category to discover our authentic dishes and flavors
          </p>
        </motion.div>

        {/* Creative Category Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const items = menuData[category.id] || [];
            const itemCount = items.length;
            
            // Unique image mapping for each category
            const categoryImages: { [key: string]: string } = {
              'beverages': '/1.jpg',
              'mocktails': '/5.jpg', 
              'boba': '/11.jpg',
              'soups': '/13.jpg',
              'momos': '/2.jpg',
              'grill': '/14.jpg',
              'vegStarters': '/19.jpg',
              'salads': '/3.jpg',
              'nonVegStarters': '/8.jpg',
              'seafoodStarters': '/17.jpg',
              'vegGravy': '/26.jpg',
              'nonVegGravy': '/6.jpg',
              'seafoodGravy': '/15.jpg',
              'curries': '/20.jpg',
              'vegRice': '/27.jpg',
              'chickenRice': '/4.jpg',
              'noodles': '/9.jpg',
              'desserts': '/18.jpg'
            };
            
            const sampleImage = categoryImages[category.id] || '/1.jpg';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => openCategoryPopup(category.id)}
                className="group relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-3xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={sampleImage}
                    alt={category.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-48 flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="text-4xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {category.icon}
                    </motion.div>
                    <div className="bg-red-600/20 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
                      <span className="text-red-300 text-xs font-semibold">{itemCount} items</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-500 mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.name}
                    </h3>
                    <div className="w-full h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Click to explore
                    </span>
                    <motion.div
                      className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white text-lg">→</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {categories.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-light text-gray-300 mb-3">No items found</h3>
            <p className="text-gray-500 mb-6">Try searching with different keywords</p>
          <button 
              onClick={() => setSearchTerm('')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-full text-white font-medium transition-all duration-300"
          >
              Clear Search
          </button>
          </motion.div>
        )}
        </div>

      {/* Category Popup Modal */}
      <AnimatePresence>
        {selectedCategory && selectedCategoryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCategoryPopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div className="relative p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{selectedCategoryData.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {selectedCategoryData.name}
            </h2>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {selectedItems.length} delicious options
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeCategoryPopup}
                    className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-white text-xl">×</span>
                  </button>
            </div>

                {/* Search within category */}
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={`Search in ${selectedCategoryData.name}...`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
          </div>
        </div>
          </div>

              {/* Popup Content - Enhanced Layout */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-3">
                  {filteredItems.map((item: MenuItem, index: number) => {
                    // Function to get appropriate emoji based on dish name
                    const getItemEmoji = (name: string) => {
                      const lowerName = name.toLowerCase();
                      if (lowerName.includes('noodle') || lowerName.includes('hakka') || lowerName.includes('chow mein')) return '🍜';
                      if (lowerName.includes('rice') || lowerName.includes('fried rice')) return '🍚';
                      if (lowerName.includes('soup')) return '🍲';
                      if (lowerName.includes('chicken') && lowerName.includes('lollypop')) return '🍗';
                      if (lowerName.includes('chicken')) return '🐔';
                      if (lowerName.includes('prawns') || lowerName.includes('shrimp')) return '🦐';
                      if (lowerName.includes('fish')) return '🐟';
                      if (lowerName.includes('momo') || lowerName.includes('dumpling')) return '🥟';
                      if (lowerName.includes('spring roll')) return '🌯';
                      if (lowerName.includes('manchurian')) return '🥢';
                      if (lowerName.includes('curry')) return '🍛';
                      if (lowerName.includes('satay')) return '🍢';
                      if (lowerName.includes('tofu') || lowerName.includes('paneer')) return '🧈';
                      if (lowerName.includes('corn')) return '🌽';
                      if (lowerName.includes('mushroom')) return '🍄';
                      if (lowerName.includes('salad')) return '🥗';
                      if (lowerName.includes('beverage') || lowerName.includes('drink') || lowerName.includes('tea') || lowerName.includes('soda')) return '🥤';
                      if (lowerName.includes('mocktail') || lowerName.includes('mojito')) return '🍹';
                      if (lowerName.includes('boba')) return '🧋';
                      if (lowerName.includes('dessert') || lowerName.includes('brownie') || lowerName.includes('ice cream')) return '🍰';
                      if (lowerName.includes('grill')) return '🔥';
                      return '🥢'; // Default Chinese food emoji
                    };

                    return (
          <motion.div
                key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03, duration: 0.3 }}
                        className="relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 rounded-xl p-4 border border-gray-600/20 hover:border-red-500/40 hover:from-gray-800/60 hover:to-gray-700/60 transition-all duration-300 group overflow-hidden"
                      >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                          {getItemEmoji(item.name)}
                  </div>
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            {/* Item Emoji */}
                            <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                              {getItemEmoji(item.name)}
                  </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium text-sm group-hover:text-red-300 transition-colors mb-1"
                                  style={{ fontFamily: 'Playfair Display, serif' }}>
                                {item.name}
                              </h4>
                              
                              {/* Tags */}
                              <div className="flex items-center gap-2 flex-wrap">
                                {item.description.toLowerCase().includes('spicy') && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full">
                                    🌶️ Spicy
                                  </span>
                                )}
                                {item.description.toLowerCase().includes('thai') && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                                    🇹🇭 Thai
                                  </span>
                                )}
                                {item.description.toLowerCase().includes('chinese') && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                                    🇨🇳 Chinese
                                  </span>
                                )}
                                {item.description.toLowerCase().includes('malaysian') && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                                    🇲🇾 Malaysian
                                  </span>
                                )}
                </div>
              </div>
                          </div>
                          
                          {/* Price Section */}
                          <div className="flex-shrink-0 ml-4 text-right">
                            {typeof item.price === 'number' ? (
                              <div className="bg-red-500/20 px-3 py-1.5 rounded-lg border border-red-500/30">
                                <span className="text-red-300 font-bold text-sm">₹{item.price}</span>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                {item.price.veg && (
                                  <div className="bg-green-500/20 px-2 py-1 rounded text-green-300 text-xs border border-green-500/30">
                                    Veg ₹{item.price.veg}
                                  </div>
                                )}
                                {item.price.chicken && (
                                  <div className="bg-orange-500/20 px-2 py-1 rounded text-orange-300 text-xs border border-orange-500/30">
                                    Chicken ₹{item.price.chicken}
                                  </div>
                                )}
                                {item.price.prawns && (
                                  <div className="bg-red-500/20 px-2 py-1 rounded text-red-300 text-xs border border-red-500/30">
                                    Prawns ₹{item.price.prawns}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Subtle hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </motion.div>
                    );
                  })}
                </div>

                {filteredItems.length === 0 && searchTerm && (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl text-gray-300 mb-2">No items found</h3>
                    <p className="text-gray-500 mb-4">Try searching with different keywords</p>
          <button 
                      onClick={() => setSearchTerm('')}
                      className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-white text-sm transition-colors"
          >
                      Clear Search
          </button>
        </div>
                )}
      </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Happy Hours Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-12"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-light text-white mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              🎊 HAPPY HOURS 🎊
            </h3>
            <div className="text-3xl font-medium text-yellow-300 mb-2 animate-pulse">
              20% OFF
            </div>
            <p className="text-xl text-red-100 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Valid on bills ₹350/- and above
            </p>
            <p className="text-lg text-red-200 flex items-center justify-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <Clock className="w-5 h-5" />
              3:30 PM - 6:30 PM Daily
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-gray-400 mb-4">
            <span className="text-2xl">🍜</span>
            <span className="text-lg font-semibold">Experience Authentic Asian Flavors</span>
            <span className="text-2xl">🥢</span>
          </div>
          <p className="text-gray-500 text-sm">
            Crafted with love • Fresh ingredients • 25 years of culinary excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMenuPage;