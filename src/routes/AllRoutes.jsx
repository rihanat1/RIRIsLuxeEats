import ContactPage from "../Pages/ContactPage.jsx";
import Home from "../Pages/Home.jsx";
import MenuPage from "../Pages/MenuPage.jsx";
import OurStoryPage from "../Pages/OurStoryPage.jsx";
import AllPaths from "./AllPaths.js";

const AllRoutes = [
    {
        path:AllPaths.home,
        element:<Home/>
    },
    {
      path:AllPaths.menu,
        element:<MenuPage/>
    },
    {
      path:AllPaths.ourStory,
        element:<OurStoryPage/>
    },
    {
      path:AllPaths.contact,
        element:<ContactPage/>
    }
]

export default AllRoutes;