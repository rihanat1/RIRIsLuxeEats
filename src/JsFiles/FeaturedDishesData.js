// Import images at the top
import burger from '../assets/FeaturedImages/burger.png';
import yuzu from '../assets/FeaturedImages/yuzu.png';
import pizza from '../assets/FeaturedImages/pizza.png';
import cake from '../assets/FeaturedImages/cake.png';

const Dishes = [
  {
    id: 31,
    image: burger,  // Use the imported variable, not a string
    name: 'Artisan Truffle Burger',
    description: 'Wagyu beef patty, black truffle aioli, aged gruyere, brioche bun.',
    price: 24,
    rating: 4.9,
    cuisine: 'American',
    caloriesPerServing: 750,
    prepTime: '15 mins',
    calories: '750 Kcal',
    ingredients: [
      'Wagyu Beef Patty',
      'Black Truffle Aioli',
      'Aged Gruyere Cheese',
      'Caramelized Onions',
      'Fresh Arugula',
      'Artisanal Brioche Bun'
    ]
  },
  {
    id: 32,
    image: yuzu,
    name: 'Yuzu Salmon Bowl',
    description: 'Fresh Atlantic salmon, edamame, avocado, yuzu ponzu dressing.',
    price: 22.5,
    rating: 4.8,
    cuisine: 'Japanese',
    caloriesPerServing: 580,
    prepTime: '20 mins',
    calories: '580 Kcal',
    ingredients: [
      'Atlantic Salmon',
      'Edamame',
      'Avocado',
      'Yuzu Ponzu Dressing',
      'Sushi Rice',
      'Nori Seaweed',
      'Sesame Seeds'
    ]
  },
  {
    id: 33,
    image: pizza,
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomatoes, buffalo mozzarella, fresh basil, olive oil.',
    price: 18,
    rating: 4.9,
    cuisine: 'Italian',
    caloriesPerServing: 620,
    prepTime: '12 mins',
    calories: '620 Kcal',
    ingredients: [
      'San Marzano Tomatoes',
      'Buffalo Mozzarella',
      'Fresh Basil',
      'Extra Virgin Olive Oil',
      'Wood-Fired Crust',
      'Garlic',
      'Sea Salt'
    ]
  },
  {
    id: 34,
    image: cake,
    name: 'Molten Chocolate Cake',
    description: 'Valrhona dark chocolate, vanilla bean ice cream, raspberry coulis.',
    price: 12.5,
    rating: 4.7,
    cuisine: 'Dessert',
    caloriesPerServing: 480,
    prepTime: '10 mins',
    calories: '480 Kcal',
    ingredients: [
      'Valrhona Dark Chocolate',
      'Vanilla Bean Ice Cream',
      'Raspberry Coulis',
      'Butter',
      'Sugar',
      'Eggs',
      'Flour',
      'Fresh Raspberries'
    ]
  }
];



export default Dishes;