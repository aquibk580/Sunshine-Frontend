import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Packages from "./components/Packages/Packages";
import DomesticPackages from "./components/Packages/DomesticPackages";
import InternationalPackages from "./components/Packages/InternationalPackages";
import AllPackages from "./components/Packages/allPackages";
import OurSpeciality from "./components/OurSpecility/OurSpeciality";
import Cruise from "./components/Cruise/Cruise";
import AllCruise from "./components/Cruise/AllCruise";
import OurServices from "./components/OurServices/OurServices";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Contact/Admin";
import Resources from "./components/Resources/Resources";
import News from "./components/Resources/News";
import Blogs from "./components/Resources/Blogs";
import Privacy from "./components/Policy/Privacy";
import FlightBooking from "./components/Policy/FlightBooking";
import AirLineTerms from './components/Policy/AirLineTerms';
import TermsOfUse from './components/Policy/TermsOfUse' ;
import TermsOfServices from './components/Policy/TermsOfServices';
import Cancellation from "./components/Policy/Cancellation";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/packages",
      element: (
        <>
          <Navbar />
          <Packages />
          <Footer />
        </>
      ),
    },
    {
      path: "/packages/domestic",
      element: (
        <>
          <Navbar />
          <DomesticPackages />
          <Footer />
        </>
      ),
    },
    {
      path: "/packages/international",
      element: (
        <>
          <Navbar />
          <InternationalPackages />
          <Footer />
        </>
      ),
    },
    {
      path: "/packages/international/:type",
      element: (
        <>
          <Navbar />
          <AllPackages />
          <Footer />
        </>
      ),
    },
    {
      path: "/packages/domestic/:type",
      element: (
        <>
          <Navbar />
          <AllPackages />
          <Footer />
        </>
      ),
    },
    {
      path: "/ourspeciality",
      element: (
        <>
          <Navbar />
          <OurSpeciality />
          <Footer />
        </>
      ),
    },
    {
      path: "/cruise",
      element: (
        <>
          <Navbar />
          <Cruise />
          <Footer />
        </>
      ),
    },
    {
      path: "/cruise/:type",
      element: (
        <>
          <Navbar />
          <AllCruise />
          <Footer />
        </>
      ),
    },
    {
      path: "/otherservices",
      element: (
        <>
          <Navbar />
          <OurServices />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar />
          <Admin />
          <Footer />
        </>
      ),
    },
    {
      path: "/resources",
      element: (
        <>
          <Navbar />
          <Resources />
          <Footer />
        </>
      ),
    },
    {
      path: "/resources/blogs",
      element: (
        <>
          <Navbar />
          <Blogs />
          <Footer />
        </>
      ),
    },
    {
      path: "/resources/news",
      element: (
        <>
          <Navbar />
          <News />
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/privacy",
      element: (
        <>
          <Navbar />
          <Privacy />
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/flightbooking",
      element: (
        <>
          <Navbar />
          <FlightBooking/>
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/airlineterms",
      element: (
        <>
          <Navbar />
          <AirLineTerms/>
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/Cancellation",
      element: (
        <>
          <Navbar />
          <Cancellation/>
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/termsofuse",
      element: (
        <>
          <Navbar />
          <TermsOfUse/>
          <Footer />
        </>
      ),
    },
    {
      path: "/policy/termsofservices",
      element: (
        <>
          <Navbar />
          <TermsOfServices/>
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
