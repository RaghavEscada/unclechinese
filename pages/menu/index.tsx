import { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

// Enhanced Interactive Menu Item Component
interface MenuItemProps {
  item: {
    name: string;
    price: number | { veg?: number; chicken?: number; prawns?: number };
    description: string;
    image?: string;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderPrice = (price: number | { veg?: number; chicken?: number; prawns?: number }) => {
    if (typeof price === 'number') {
      return (
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">₹{price}</span>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col gap-2">
        {price.veg && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-lg font-semibold text-green-400">Veg: ₹{price.veg}</span>
          </div>
        )}
        {price.chicken && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          <span className="text-lg font-semibold text-orange-400">Chicken: ₹{price.chicken}</span>
          </div>
        )}
        {price.prawns && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <span className="text-lg font-semibold text-red-400">Prawns: ₹{price.prawns}</span>
          </div>
        )}
      </div>
    );
  };

  // Get appropriate emoji and Asian elements based on item name
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

  // Get Asian decorative elements
  const getAsianElements = (name: string) => {
    const nameLower = name.toLowerCase();
    const elements = [];
    
    // Add pandas for special items
    if (nameLower.includes('momo') || nameLower.includes('wonton') || nameLower.includes('curry')) {
      elements.push('🐼');
    }
    
    // Add bamboo for rice and noodle dishes
    if (nameLower.includes('rice') || nameLower.includes('noodle')) {
      elements.push('🎋');
    }
    
    // Add chopsticks for main dishes
    if (nameLower.includes('chicken') || nameLower.includes('prawn') || nameLower.includes('gravy')) {
      elements.push('🥢');
    }
    
    // Add lanterns for soups
    if (nameLower.includes('soup')) {
      elements.push('🏮');
    }
    
    // Add fortune cookies for desserts
    if (nameLower.includes('dessert') || nameLower.includes('brownie')) {
      elements.push('🥠');
    }
    
    // Add tea elements for beverages
    if (nameLower.includes('tea') || nameLower.includes('beverage')) {
      elements.push('🫖');
    }
    
    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-gray-600/40 rounded-3xl p-8 hover:border-red-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30 group overflow-hidden backdrop-blur-md cursor-pointer"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      
      {/* Enhanced Content */}
      <div className="relative z-10">
        {/* Header with emoji and name */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5 flex-1">
            <motion.div 
              className="text-5xl group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {getItemEmoji(item.name)}
            </motion.div>
            <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-500">
              {item.name}
            </h3>
          </div>
          <div className="ml-6 text-right">
            {renderPrice(item.price)}
          </div>
        </div>
        
        {/* Asian Decorative Elements */}
        <motion.div 
          className="flex items-center gap-4 mb-6 pl-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {getAsianElements(item.name).map((element, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.4, rotate: 15 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="text-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {element}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-500 pl-20 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {item.description}
        </motion.p>

        {/* Enhanced Spice level indicator */}
        {item.description.toLowerCase().includes('spicy') && (
          <motion.div 
            className="flex items-center gap-3 mt-6 pl-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span 
              className="text-red-400 text-lg"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🌶️
            </motion.span>
            <span className="text-red-400 text-base font-semibold">Spicy</span>
          </motion.div>
        )}
      </div>

      {/* Enhanced decorative corner elements */}
      <motion.div 
        className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{ 
          scale: isHovered ? [1, 1.3, 1] : 1,
          rotate: isHovered ? [0, 180, 360] : 0
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{ 
          scale: isHovered ? [1, 1.4, 1] : 1,
          rotate: isHovered ? [0, -180, -360] : 0
        }}
        transition={{ duration: 3.5, repeat: isHovered ? Infinity : 0 }}
      ></motion.div>
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute top-1/2 right-4 w-12 h-12 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ 
          y: isHovered ? [0, -10, 0] : 0,
          rotate: isHovered ? [0, 90, 180, 270, 360] : 0
        }}
        transition={{ duration: 4, repeat: isHovered ? Infinity : 0 }}
      ></motion.div>
    </motion.div>
  );
};

// Enhanced Category Section with better styling
interface CategorySectionProps {
  category: { id: string; name: string; icon: string };
  items: any[];
}

const CategorySection = ({ category, items }: CategorySectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative group"
    id={category.id}
  >
    {/* Section Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/8 via-transparent to-orange-500/8 rounded-3xl -m-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Category Header */}
    <div className="relative z-10 flex items-center gap-8 mb-20">
      <div className="relative">
        <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <div className="absolute inset-0 text-7xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300">
          {category.icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-6 mb-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text tracking-tight">
          {category.name}
        </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-red-500/60 via-orange-500/60 to-transparent"></div>
          <span className="text-sm text-gray-500 bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm">
            {items.length} items
          </span>
      </div>
        <div className="h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-transparent rounded-full"></div>
    </div>
    </div>

    {/* Menu Items Grid */}
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <MenuItem item={item} />
        </motion.div>
      ))}
    </div>

    {/* Enhanced Asian Decorative Elements */}
    <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-red-500/12 to-transparent rounded-full blur-2xl opacity-60"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-orange-500/12 to-transparent rounded-full blur-xl opacity-60"></div>
    
    {/* Floating Asian Elements */}
    <div className="absolute top-12 right-16 text-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500">
      🐼
    </div>
    <div className="absolute bottom-16 left-20 text-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500">
      🎋
    </div>
    <div className="absolute top-1/2 right-12 text-xl opacity-15 group-hover:opacity-40 transition-opacity duration-500">
      🥢
    </div>
  </motion.section>
);

// Main Menu Component with 3D integration
const EnhancedMenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('beverages');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{ y, opacity }}
      >
        {/* Interactive Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 text-6xl opacity-10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
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
            className="absolute top-40 right-32 text-4xl opacity-10"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          >
            🎋
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 text-5xl opacity-10"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-2 lg:mb-4"
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

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 lg:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToCategory('beverages')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/ucmenu1.pdf', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="w-5 h-5" />
                </motion.div>
                Quick Menu
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/uncmenu2.pdf', '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Download className="w-5 h-5" />
                </motion.div>
                Full Menu
              </motion.button>
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
      </motion.div>

      {/* Enhanced Navigation & Search */}
      <motion.div 
        className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Asian Background Elements */}
        <div className="absolute top-2 left-4 text-lg opacity-10 animate-pulse">🐼</div>
        <div className="absolute top-3 right-6 text-sm opacity-10 animate-bounce">🎋</div>
        <div className="absolute bottom-2 left-1/4 text-base opacity-10 animate-pulse">🥢</div>
        <div className="absolute bottom-1 right-1/3 text-sm opacity-10 animate-bounce">🏮</div>
        
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          {/* Search Bar */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items... 🔍"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
            
            
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Category Navigation */}
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.span>
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Menu Items Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text tracking-tight mb-4">
            Explore Our Menu
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From traditional momos to authentic Thai curries, discover flavors that tell a story
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-24">
          {filteredCategories.map((category) => {
            const items = menuData[category.id as keyof typeof menuData] || [];
            const filteredItems = items.filter((item: any) => 
              !searchTerm || 
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <CategorySection key={category.id} category={category} items={filteredItems} />
            );
          })}
        </div>

        {filteredCategories.length === 0 && searchTerm && (
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
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
              Clear Search
          </button>
          </motion.div>
        )}
        </div>

      {/* Enhanced Menu Summary Section */}
      <div className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl opacity-5 animate-pulse">🐼</div>
          <div className="absolute top-20 right-20 text-4xl opacity-5 animate-bounce">🎋</div>
          <div className="absolute bottom-20 left-1/4 text-5xl opacity-5 animate-pulse">🥢</div>
          <div className="absolute bottom-10 right-1/3 text-3xl opacity-5 animate-bounce">🏮</div>
      </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text tracking-tight mb-6">
              Our Culinary Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the rich tapestry of flavors that have made Uncle&apos;s Chinese a beloved destination for authentic Asian cuisine
            </p>
          </motion.div>

          {/* Menu Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "15+", label: "Categories", icon: "🍽️" },
              { number: "100+", label: "Dishes", icon: "🥟" },
              { number: "24", label: "Years", icon: "⭐" },
              { number: "6", label: "Locations", icon: "📍" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
            </div>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-1">
                  {stat.number}
          </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
        </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Categories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              { 
                title: "Signature Momos", 
                description: "Handcrafted dumplings with authentic flavors", 
                icon: "🥟",
                count: "5 varieties",
                color: "from-red-500 to-red-600"
              },
              { 
                title: "Thai Curries", 
                description: "Aromatic curries with fresh coconut milk", 
                icon: "🍛",
                count: "3 styles",
                color: "from-orange-500 to-orange-600"
              },
              { 
                title: "Chinese Specialties", 
                description: "Traditional wok-tossed dishes", 
                icon: "🍜",
                count: "20+ dishes",
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">{feature.count}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
            ))}
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
          <button 
            onClick={() => window.open('/ucmenu1.pdf', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
              <span>Quick Menu PDF</span>
          </button>
          <button 
            onClick={() => window.open('/uncmenu2.pdf', '_blank')}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
              <span>Full Menu PDF</span>
          </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Happy Hours Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-12 overflow-hidden"
      >
        {/* Asian Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 text-6xl animate-bounce">🎉</div>
          <div className="absolute top-8 right-8 text-4xl animate-pulse">⏰</div>
          <div className="absolute bottom-4 left-1/4 text-5xl animate-spin">💰</div>
          <div className="absolute bottom-8 right-1/4 text-3xl animate-bounce">🍜</div>
          <div className="absolute top-1/2 left-8 text-4xl animate-bounce">🐼</div>
          <div className="absolute top-1/3 right-12 text-3xl animate-pulse">🎋</div>
          <div className="absolute bottom-1/3 left-1/3 text-2xl animate-spin">🥢</div>
          <div className="absolute top-2/3 right-1/4 text-3xl animate-bounce">🏮</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              🎊 HAPPY HOURS 🎊
            </h3>
            <div className="text-3xl md:text-4xl font-medium text-yellow-300 mb-2 animate-pulse">
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
      <div className="bg-black border-t border-gray-800 py-8 relative overflow-hidden">
        {/* Asian Footer Elements */}
        <div className="absolute top-2 left-8 text-lg opacity-10 animate-pulse">🐼</div>
        <div className="absolute top-4 right-12 text-base opacity-10 animate-bounce">🎋</div>
        <div className="absolute bottom-3 left-1/4 text-sm opacity-10 animate-pulse">🥢</div>
        <div className="absolute bottom-2 right-1/3 text-base opacity-10 animate-bounce">🏮</div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 text-gray-400 mb-4">
            <span className="text-2xl">🍜</span>
            <span className="text-lg font-semibold">Experience Authentic Asian Flavors</span>
            <span className="text-2xl">🥢</span>
          </div>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>🐼</span>
            <span>Crafted with love • Fresh ingredients • 24 years of culinary excellence</span>
            <span>🎋</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMenuPage;