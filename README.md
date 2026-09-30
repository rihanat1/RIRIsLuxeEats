# Riri's Luxe Eats

🔗 **Live Demo:** [View site](https://ririsluxeeats.netlify.app)


RIRISLUXEEATS is a dummy restaurant website where users can browse a menu of international dishes, add items to a cart, and proceed to checkout. Built as a portfolio project showcasing a full front-end e-commerce flow — from browsing to cart to placing an order.

---

## Features

- **Menu browsing** — Dishes fetched from an external recipes API, merged with a curated list of featured dishes
- **Search & filter** — Filter by name or cuisine in real time
- **Cart** — Add, increase, decrease, and remove items with live totals
- **Order Summary** — Subtotal, taxes & fees, delivery fee, and total calculated dynamically
- **Signup flow** — Collects name, email, address, and city; persists the user to `localStorage`
- **Checkout flow** — Cart → Signup → Confirm page with delivery details, items, and totals
- **Returning user experience** — Logged-in users skip signup and go straight to confirm
- **Responsive layout** — Optimized for mobile, tablet, and desktop

---

## Tech Stack

- **React** — UI library with hooks and Context API
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Axios** — HTTP requests for the recipes API
- **Vite** — build tool and dev server
- **React Icons** — icon set used across the UI

---

## Project Structure

```
src/
├── assets/                # Images
├── Cards/                 # Reusable card components (ProductCard)
├── Components/            # Shared UI (Header, Footer, SkeletonLoader)
├── Context/               # GlobalContext — cart, user, product state
├── JsFiles/               # Static data (FeaturedDishesData)
├── Pages/                 # Route-level pages
│   ├── MenuPage.jsx
│   ├── ViewCartPage.jsx
│   ├── SignupPage.jsx
│   └── ConfirmPage.jsx
│── Routes/.               #paths and routes 
├── SubSections/           # Page sections (AllOrders, OrderSummary, headers)

```

---

## User Flow

```
Menu → Add to cart → View Cart → Place Order
                                    │
                          ┌─────────┴─────────┐
                          │                   │
                     New user            Returning user
                          │                   │
                     Signup Page         (skip signup)
                          │                   │
                          └─────────┬─────────┘
                                    │
                              Confirm Page
                                    │
                              Order Placed
```

---

## State Management

Global state is handled through React Context (`GlobalContext`):

- **`cart`** — array of cart items with quantity
- **`user`** — logged-in user object, persisted to `localStorage` under `riri_user`
- **`productDetails`** — combined API dishes and featured dishes
- **Cart actions** — `addToCart`, `increaseQuantity`, `decreaseQuantity`, `removeFromCart`
- **Auth actions** — `signUp`, `logOut`

---

## LocalStorage

The app uses `localStorage` to remember returning users:

| Key | Purpose |
|---|---|
| `riri_user` | Stores the logged-in user's name, email, address, city |

On page load, the app reads `riri_user` and restores the session automatically.


---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file at the root:

```
VITE_API_URL=your_api_base_url
```

The app fetches recipes from `${VITE_API_URL}/recipes`.

---

### Deployment

Deployed on Netlify. Every push to `main` triggers an automatic build and deploy.

---

## In Progress

- [ ] Success modal on payment confirmation
- [ ] Order Success page 


---

## Author  **Bello Rihanat oluwayemisi**

Built as a portfolio project showcasing frontend architecture, component design, and a checkout flow in React.

---

## License

This project is for demonstration purposes. All images and data are either placeholder or dummy content.
