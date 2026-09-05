import ContactPage from "../Pages/ContactPage.jsx";
import Home from "../Pages/Home.jsx";
import MenuPage from "../Pages/MenuPage.jsx";
import OurStoryPage from "../Pages/OurStoryPage.jsx";
import ProductDetailsPage from "../Pages/ProductDetailsPage.jsx";
import AllPaths from "./AllPaths.js";

const AllRoutes = [
    {
        path:AllPaths.home,
        element:<Home/>,
        hasLayout:true
    },
    {
      path:AllPaths.menu,
        element:<MenuPage/>,
        hasLayout:false
    },
    {
      path:AllPaths.ourStory,
        element:<OurStoryPage/>,
        hasLayout:true
    },
    {
      path:AllPaths.contact,
        element:<ContactPage/>,
        hasLayout:true
    },
    {
      path:AllPaths.productsDetails,
        element:<ProductDetailsPage/>,
        hasLayout:false
    }
    
]

export default AllRoutes;