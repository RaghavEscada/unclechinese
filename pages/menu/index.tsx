import { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, Filter, Star, Clock, MapPin, Menu, Download } from "lucide-react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Menu data with images from 1.jpg to 29.jpg
const menuData = {
  beverages: [
    { name: "Fresh Lime Soda", price: 129, description: "Refreshing lime with sparkling soda", image: "/1.jpg" },
    { name: "Ice Tea Lemon/Peach", price: 129, description: "Cool and refreshing iced tea varieties", image: "/2.jpg" },
    { name: "Fresh Lime Water", price: 99, description: "Pure fresh lime water", image: "/3.jpg" },
    { name: "Softdrinks", price: 30, description: "Assorted carbonated beverages", image: "/4.jpg" }
  ],
  mocktails: [
    { name: "Strawberry Passion", price: 159, description: "Sweet strawberry passion fruit blend", image: "/5.jpg" },
    { name: "Virgin Mojito", price: 159, description: "Classic mint and lime refresher", image: "/6.jpg" },
    { name: "Ginger And Basil Mojito", price: 159, description: "Fresh ginger basil lime wedges with sugar & ice", image: "/7.jpg" },
    { name: "Ruthless", price: 159, description: "Litchi cranberry juice, lemon slice mint leaves ice", image: "/8.jpg" },
    { name: "Wild Cat Cooler", price: 159, description: "Blueberry & lime juice with light sugar & soda", image: "/9.jpg" },
    { name: "Sweet Sunrise", price: 159, description: "Orange cranberry & lemon juice with ice cubes", image: "/10.jpg" }
  ],
  boba: [
    { name: "Mango Boba Tea", price: 189, description: "Tropical fusion of creamy milk and luscious mango flavor with popping boba", image: "/11.jpg" },
    { name: "Strawberry Boba Tea", price: 189, description: "Refreshing fusion of creamy milk and vibrant strawberry flavor with popping boba", image: "/12.jpg" }
  ],
  soups: [
    { name: "Spicy Tomyum Soup", price: { veg: 159, chicken: 169 }, description: "Tangy Thai clear soup with Thai herbs and lemony flavour", image: "/13.jpg" },
    { name: "Laksa Ma Soup (Malaysian)", price: { veg: 179, chicken: 189 }, description: "Glorious aromatic curry soup with fried tofu and noodles", image: "/14.jpg" },
    { name: "Tom Kha Soup (Thai)", price: { veg: 179, chicken: 189 }, description: "Thai coconut milk broth with zesty galangal and lemongrass", image: "/15.jpg" },
    { name: "Hot & Sour Soup", price: { veg: 149, chicken: 159 }, description: "All time favourite medium spicy thick soup with shredded veg/chicken", image: "/16.jpg" },
    { name: "Manchow Soup", price: { veg: 149, chicken: 159 }, description: "Medium spicy thick soup with minced veg/chicken and fresh green chillies", image: "/17.jpg" }
  ],
  momos: [
    { name: "Classic Momos", price: { veg: 199, chicken: 209, prawns: 309 }, description: "All time favourite classic momos stuffed to satiation", image: "/18.jpg" },
    { name: "Shanghai Momos", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Minced veg/chicken/seafood stuffed momos in Shanghai style with spicy sauce", image: "/19.jpg" },
    { name: "Crispy Fried Momos", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Crispy fried classic momos served with sweet garlic sauce", image: "/20.jpg" },
    { name: "Schezwan Momos", price: { veg: 199, chicken: 209, prawns: 309 }, description: "Classic momos tossed in spicy Schezwan sauce", image: "/21.jpg" },
    { name: "Steam / Fried Wonton", price: { veg: 179, chicken: 199, prawns: 309 }, description: "Minced veg/chicken wrapped in wonton, steamed/fried with sweet garlic sauce", image: "/22.jpg" }
  ],
  vegStarters: [
    { name: "Mongolian Tofu", price: 279, description: "Crispy tofu stir-fried with savory, sweet, and spicy sauce", image: "/23.jpg" },
    { name: "Veg Spring Roll", price: 259, description: "Crispy vegetable spring rolls", image: "/24.jpg" },
    { name: "Crispy Corn Garlicky", price: 239, description: "Crispy fried American corn tossed in sweet spicy chilli garlic sauce", image: "/25.jpg" },
    { name: "Burmese Chilly Potato", price: 239, description: "Finger cut crispy potatoes wok tossed in medium spicy Burmese sauce", image: "/26.jpg" },
    { name: "Honey Chilly Potato", price: 239, description: "Crispy fried finger potato tossed with honey & chilly soya", image: "/27.jpg" },
    { name: "Paneer Chilly Dry", price: 289, description: "All time favorite preparation", image: "/28.jpg" }
  ],
  nonVegStarters: [
    { name: "Roast Chicken Pepper", price: 279, description: "Roasted chicken with bell pepper tossed in chilly style with crushed black pepper", image: "/29.jpg" },
    { name: "Kung Pao Chicken", price: 279, description: "Diced glazed chicken with ginger, light chilly soya, Chinese vinegar, sesame seeds and nuts", image: "/1.jpg" },
    { name: "Chicken Burnt Red Chilli Pepper", price: 279, description: "Glazed chicken tossed in burnt chilli flakes and veggies", image: "/2.jpg" },
    { name: "Cilantro Chicken", price: 289, description: "Flavorful dish featuring chicken marinated in zesty blend of cilantro, lime juice, garlic, and spices", image: "/3.jpg" },
    { name: "Sticky Korean Wings", price: 309, description: "Chicken wings coated in sweet and spicy sauce with gochujang soy sauce, honey, and garlic", image: "/4.jpg" }
  ],
  seafoodStarters: [
    { name: "Roasted Thai Chilly Prawns", price: 399, description: "Roasted crispy fried prawns tossed in Thai style", image: "/5.jpg" },
    { name: "Singapore Chilly Prawns", price: 399, description: "Fresh prawns cooked in Singaporean style", image: "/6.jpg" },
    { name: "Kung Pao Prawns", price: 399, description: "Glazed prawns with ginger, dark light soya, Chinese vinegar, sesame seed and nuts", image: "/7.jpg" },
    { name: "Ebi Tempura (6 PCS)", price: 399, description: "Japanese tempura crispy fried prawns with Japanese and ginger infusion/mayo", image: "/8.jpg" },
    { name: "Basil Garlic Prawns", price: 399, description: "Fresh prawns prepared in tempting spicy basil sauce", image: "/9.jpg" }
  ],
  vegGravy: [
    { name: "Veg Manchurian Gravy", price: 249, description: "Classic vegetable manchurian in rich gravy", image: "/10.jpg" },
    { name: "Veg Ball Hot Garlic", price: 249, description: "English veggies with balls of vegetable wok tossed in garlic sauce", image: "/11.jpg" },
    { name: "Mushroom Chilly Gravy", price: 269, description: "Light batter fried mushroom with shredded capsicum and onion in special chilly sauce", image: "/12.jpg" },
    { name: "Sweet & Sour Veg", price: 249, description: "Dice mix vegetables and chunks of pineapple cooked in sweet sour sauce", image: "/13.jpg" },
    { name: "Three Treasure Veg", price: 309, description: "Traditional Mongolian cuisine features straw mushroom, brocolli and pokchoy cooked in medium spicy blackbean sauce", image: "/14.jpg" }
  ],
  nonVegGravy: [
    { name: "Chicken Chilly Gravy", price: 289, description: "Classic chicken chilly in rich gravy", image: "/15.jpg" },
    { name: "Chicken Hot Garlic/Manchurian", price: 289, description: "Popular chicken preparations in flavorful sauces", image: "/16.jpg" },
    { name: "Chicken Madras Curry", price: 409, description: "Sliced chicken prepared in Madras curry paste with curry leaf and coconut milk", image: "/17.jpg" },
    { name: "Mongolian Claypot Chicken", price: 299, description: "Diced glazed chicken with ginger, dark light soy, Chinese vinegar and nuts", image: "/18.jpg" },
    { name: "Chicken in Black Bean Sauce", price: 309, description: "Classic Chinese preparation with chicken chunks cooked in fresh spicy bean sauce", image: "/19.jpg" }
  ],
  seafoodGravy: [
    { name: "Hong Kong Gravy", price: 409, description: "Premium seafood in Hong Kong style gravy", image: "/20.jpg" },
    { name: "Chilly Peking", price: 409, description: "Spicy Peking style seafood preparation", image: "/21.jpg" },
    { name: "Madras Curry", price: 439, description: "Fresh prawns prepared in Madras curry paste with curry leaf and coconut", image: "/22.jpg" },
    { name: "Pomfret (Choice of Sauce)", price: 569, description: "Fresh pomfret with choice of Schezwan or Soya sauce", image: "/23.jpg" }
  ],
  curries: [
    { name: "Malaysian Curry", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Traditional Malaysian curry with exotic herbs and nuts, fresh red chilly & coconut cream", image: "/24.jpg" },
    { name: "Thai Red/Yellow/Green Curry", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Slow simmered spicy curry with Thai curry paste, fresh sweet coconut, sour tamarind and fresh herbs", image: "/25.jpg" },
    { name: "Burmese Khow-suey", price: { veg: 399, chicken: 419, prawns: 469 }, description: "Popular Burmese cuisine, burnt garlic rice/noodles with rich creamy curry", image: "/26.jpg" }
  ],
  vegRice: [
    { name: "Veg Fried Rice", price: 239, description: "Classic vegetable fried rice", image: "/27.jpg" },
    { name: "Veg Schezwan Fried Rice", price: 259, description: "Spicy Schezwan style fried rice", image: "/28.jpg" },
    { name: "Veg Burnt Garlic Rice", price: 269, description: "Aromatic burnt garlic flavored rice", image: "/29.jpg" },
    { name: "Veg Thai Chilly Rice", price: 259, description: "Thai wok tossed rice with exotic herbs and Thai green chillies", image: "/1.jpg" },
    { name: "Veg Singapore Chilly Rice", price: 269, description: "Singapore style spicy rice preparation", image: "/2.jpg" }
  ],
  chickenRice: [
    { name: "Chicken Fried Rice", price: 259, description: "Classic chicken fried rice", image: "/3.jpg" },
    { name: "Chicken Schezwan Fried Rice", price: 279, description: "Spicy Schezwan chicken fried rice", image: "/4.jpg" },
    { name: "Chicken Burnt Garlic Rice", price: 289, description: "Aromatic chicken rice with burnt garlic", image: "/5.jpg" },
    { name: "Thai Chilly Chicken Rice", price: 279, description: "Thai wok tossed rice with chicken, exotic herbs and Thai green chillies", image: "/6.jpg" },
    { name: "Indonesian Fried Chicken Rice", price: 289, description: "Indonesian rice tossed in sweet soya with diced chicken", image: "/7.jpg" }
  ],
  desserts: [
    { name: "Brownie with Hot Chocolate Sauce", price: 169, description: "Rich chocolate brownie with warm chocolate sauce", image: "/8.jpg" },
    { name: "Brownie with Vanilla Ice Cream", price: 169, description: "Decadent brownie served with creamy vanilla ice cream", image: "/9.jpg" },
    { name: "Honey Noodle with Ice Cream", price: 169, description: "Sweet honey noodles served with ice cream", image: "/10.jpg" }
  ]
};

const categories = [
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'mocktails', name: 'Mocktails', icon: '🍹' },
  { id: 'boba', name: 'Boba Tea', icon: '🧋' },
  { id: 'soups', name: 'Soups', icon: '🍲' },
  { id: 'momos', name: "Momo's", icon: '🥟' },
  { id: 'vegStarters', name: 'Veg Starters', icon: '🥗' },
  { id: 'nonVegStarters', name: 'Non-Veg Starters', icon: '🍗' },
  { id: 'seafoodStarters', name: 'Seafood Starters', icon: '🦐' },
  { id: 'vegGravy', name: 'Veg Gravy', icon: '🍛' },
  { id: 'nonVegGravy', name: 'Non-Veg Gravy', icon: '🍖' },
  { id: 'seafoodGravy', name: 'Seafood Gravy', icon: '🐟' },
  { id: 'curries', name: 'Curries', icon: '🍜' },
  { id: 'vegRice', name: 'Veg Rice', icon: '🍚' },
  { id: 'chickenRice', name: 'Chicken Rice', icon: '🍗' },
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

    // Responsive sizing
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const spotLight = new THREE.SpotLight(0xff6b6b, 0.5);
    spotLight.position.set(-5, 5, 2);
    scene.add(spotLight);

    // Load GLB model
    const loader = new GLTFLoader();
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
    loader.load(
      '/stylized_ramen_bowl.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.setScalar(13); // Make model more bigger
        model.position.y = -1;
        model.rotation.x = 0.3; // Face up slightly
        scene.add(model);
        bowlRef.current = model;
      },
      undefined,
      (error) => {
        const fallbackBowl = createFallbackBowl();
        fallbackBowl.scale.setScalar(13); // Also scale fallback
        fallbackBowl.rotation.x = 0.3; // Face up slightly
        scene.add(fallbackBowl);
        bowlRef.current = fallbackBowl;
      }
    );
    camera.position.z = 4;
    camera.position.y = 1;

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !sceneRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      rendererRef.current.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (bowlRef.current) {
        bowlRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

// Menu Item Component with enhanced design
interface MenuItemProps {
  item: {
    name: string;
    price: number | { veg?: number; chicken?: number; prawns?: number };
    description: string;
    image?: string; // Added image prop
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const renderPrice = (price: number | { veg?: number; chicken?: number; prawns?: number }) => {
    if (typeof price === 'number') {
      return (
        <span className="text-2xl font-bold text-red-400">₹{price}</span>
      );
    }
    
    return (
      <div className="flex flex-col gap-1">
        {price.veg && (
          <span className="text-lg font-semibold text-green-400">Veg: ₹{price.veg}</span>
        )}
        {price.chicken && (
          <span className="text-lg font-semibold text-orange-400">Chicken: ₹{price.chicken}</span>
        )}
        {price.prawns && (
          <span className="text-lg font-semibold text-red-400">Prawns: ₹{price.prawns}</span>
        )}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Food Image */}
      {item.image && (
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-red-300 transition-colors">
            {item.name}
          </h3>
          <div className="ml-4 text-right">
            {renderPrice(item.price)}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {item.description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

// Category Section with enhanced styling
interface CategorySectionProps {
  category: { id: string; name: string; icon: string };
  items: any[];
}

const CategorySection = ({ category, items }: CategorySectionProps) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mb-20"
    id={category.id}
  >
    <div className="flex items-center gap-6 mb-12">
      <div className="text-5xl animate-pulse">{category.icon}</div>
      <div className="flex-1">
        <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text tracking-tight mb-2">
          {category.name}
        </h2>
        <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-transparent rounded-full"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </motion.section>
);

// Main Menu Component with 3D integration
const EnhancedMenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('beverages');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowMobileMenu(false);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredCategories = categories.filter(category => {
    if (!searchTerm) return true;
    const items = menuData[category.id as keyof typeof menuData] || [];
    return items.some((item: any) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-black text-white font-brice">
      {/* Enhanced Hero Section with 3D Bowl */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Content Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="mb-4 lg:mb-8">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-2 lg:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent">
                  MENU
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-4 lg:mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Authentic Thai & Chinese Cuisine
              </motion.p>
            </div>
            
            {/* Restaurant stats */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 text-xs lg:text-sm text-gray-400 mb-4 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-1 lg:gap-2 bg-black/30 px-2 lg:px-4 py-1 lg:py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-red-400" />
                <span>Since 2000</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2 bg-black/30 px-2 lg:px-4 py-1 lg:py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-red-400" />
                <span>6 Locations in Pune</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2 bg-black/30 px-2 lg:px-4 py-1 lg:py-2 rounded-full backdrop-blur-sm">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500" />
                <span>24 Years of Excellence</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 lg:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={() => scrollToCategory('beverages')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
              >
                <span>🍜</span>
                Explore Menu
              </button>
              
              <button 
                onClick={() => window.open('/ucmenu1.pdf', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Quick Menu
              </button>
              
              <button 
                onClick={() => window.open('/uncmenu2.pdf', '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Full Menu
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Bowl */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] relative -translate-y-12 lg:-translate-y-24 xl:-translate-y-32">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-4xl lg:text-6xl xl:text-8xl animate-spin">🍜</div>
                </div>
              }>
                <RamenBowl3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Category Navigation */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-2xl">🥢</span>
              Categories
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-3 hover:bg-gray-800 rounded-xl transition-all duration-300"
              >
                <Menu className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
          
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search delicious dishes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all duration-300"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filteredCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="text-lg group-hover:animate-bounce">{category.icon}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {filteredCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all text-sm ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span className="truncate">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Menu Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredCategories.map((category, index) => {
          const items = menuData[category.id as keyof typeof menuData] || [];
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategorySection
                category={category}
                items={items}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Happy Hours Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-12 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 text-6xl animate-bounce">🎉</div>
          <div className="absolute top-8 right-8 text-4xl animate-pulse">⏰</div>
          <div className="absolute bottom-4 left-1/4 text-5xl animate-spin">💰</div>
          <div className="absolute bottom-8 right-1/4 text-3xl animate-bounce">🍜</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              🎊 HAPPY HOURS 🎊
            </h3>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 animate-pulse">
              20% OFF
            </div>
            <p className="text-xl text-red-100 mb-2">
              Valid on bills ₹350/- and above
            </p>
            <p className="text-lg text-red-200 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              3:30 PM - 6:30 PM Daily
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span className="text-2xl">🍜</span>
            <span className="text-lg font-semibold">Experience Authentic Asian Flavors</span>
          </div>
          <p className="text-gray-500 text-sm">
            Crafted with love • Fresh ingredients • 24 years of culinary excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMenuPage;