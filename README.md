# RIRISLUXEEATS 🍽️

RIRISLUXEEATS is a dummy restaurant website where users can browse a menu of international dishes, add items to a cart, and proceed to checkout. It's built as a practice/portfolio project showcasing a full front-end e-commerce style flow — from browsing to cart to (eventually) payment.

> **Status:** In progress. Cart view page is currently being built.

---

##  Features

- **Homepage Carousel** — Rotating featured images on the landing page
- **Featured Dishes** — Curated selection of dishes highlighted on the homepage
- **Browse Menu** — View a list of dishes pulled from an external recipes API
- **Search & Filter** — Search dishes by name or cuisine, and filter the menu by cuisine type
- **Loading States** — Skeleton loaders shown while dish data is being fetched
- **Dish Details** — See individual dish info before adding to cart
- **Cart Management** — Add items to cart, increase/decrease quantity, and remove items entirely (items auto-remove when quantity hits 0)
- **View Cart** — Review items added before checkout *(in progress)*
- **Signup Before Checkout** — Users must create an account (name, phone number, address) before proceeding to payment *(planned)*
- **Payment Flow** — Users proceed to payment after signup *(planned)*
- **Contact Page** — Customers can send a message to the restaurant with any questions or feedback 

---

##  Tech Stack

- **React.js** — UI library
- **Vite** — Build tool / dev server
- **Tailwind CSS** — Styling, responsiveness
- **React Router** — Client-side routing
- **React Context API (useContext)** — Global state management via a custom `GlobalContext` provider, handling cart state, featured dishes, and carousel images
- **useEffect** — Fetches dish data from the DummyJSON API on the Menu page when it loads
- **Axios** — HTTP client used to fetch recipe data from the API
- **DummyJSON Recipes API** — Dish/menu data source ([https://dummyjson.com/recipes](https://dummyjson.com/recipes))

---

## 📂 Project Structure (example)

```
ririsluxeeats/
├── src/
│   ├── assets/
│   ├── cards/
│   ├── components/
│   ├── context/
│   ├── JsFiles/FeaturedDishesData
│   ├── pages/
│   │   ├── ContactPage
│   │   ├── Home
│   │   ├── OurStoryPage
│   │   ├── ProductDetailsPage
│   │   └── ViewCartPage
│   ├── routes/
│   │   ├── AllPaths
│   │   └── AllRoutes
│   ├── subSections/
│   │   ├── ContactPageSubSection
│   │   ├── homeSubSection
│   │   ├── ourStorySubSection
│   │   └── productDetailSubSection
│   ├── App.css
│    ├── App.jsx
│    ├── index.css
│    ├── main.jsx
│   └── SVIcons.jsx
├── public/
├── tailwind.config.js
├── vite.config.js
└── package.json
```


##  Getting Started

### Prerequisites

- Node.js installed 
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ririsluxeeats.git
   cd ririsluxeeats
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open the app in your browser at the local URL shown in the terminal

### Environment Variables

This project uses an environment variable for the API base URL. Create a `.env` file in the project root:

```
VITE_API_URL=https://dummyjson.com
```

---

## 🔌 API Reference

Dish data is fetched from the DummyJSON Recipes API:

```
GET https://dummyjson.com/recipes
```

No API key required.

> **Note:** The DummyJSON Recipes API does not include prices, so a random price is generated client-side for each dish when it's fetched.

---

## Contributing

This is currently a solo learning/portfolio project, but suggestions and feedback are welcome. Feel free to open an issue

Built by **Bello Rihanat Oluwayemisi** 