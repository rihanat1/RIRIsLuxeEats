// Import images at the top
import burger from '../assets/FeaturedImages/burger.png';
import yuzu from '../assets/FeaturedImages/yuzu.png';
import pizza from '../assets/FeaturedImages/pizza.png';
import cake from '../assets/FeaturedImages/cake.png';

const Dishes = [
  {
    id: 1,
    image: burger,  // Use the imported variable, not a string
    name: 'Artisan Truffle Burger',
    description: 'Wagyu beef patty, black truffle aioli, aged gruyere, brioche bun.',
    price: 24,
    rating: 4.9,
    cuisine: 'American',
    caloriesPerServing: 750
  },
  {
    id: 2,
    image: yuzu,
    name: 'Yuzu Salmon Bowl',
    description: 'Fresh Atlantic salmon, edamame, avocado, yuzu ponzu dressing.',
    price: 22.5,
    rating: 4.8,
    cuisine: 'Japanese',
    caloriesPerServing: 580
  },
  {
    id: 3,
    image: pizza,
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomatoes, buffalo mozzarella, fresh basil, olive oil.',
    price: 18,
    rating: 4.9,
    cuisine: 'Italian',
    caloriesPerServing: 620
  },
  {
    id: 4,
    image: cake,
    name: 'Molten Chocolate Cake',
    description: 'Valrhona dark chocolate, vanilla bean ice cream, raspberry coulis.',
    price: 12.5,
    rating: 4.7,
    cuisine: 'Dessert',
    caloriesPerServing: 480
  }
];

export default Dishes;