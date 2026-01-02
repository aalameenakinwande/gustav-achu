import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import WorkWithGustav from "./components/WorkWithGustav/WorkWithGustav";
import Contact from "./components/Contact/Contact";
import Podcast from "./components/Pocasts/Podcast";
import Store from "./components/Store/Store";
import Cap from "./components/Store/Cap";
import WorkWithGustavPageTwo from "./components/WorkWithGustavPageTwo/WorkWithGustavPageTwo";
import Community from "./components/Community/Community";
import ScrollToTop from "./ScrollToTop";
import Mug from "./components/Store/Mug";
import Shirt from "./components/Store/Shirt";
import Resources from "./components/Resouces/Resources";
import LinkTree from "./components/LinkTree";
import StoreBook from "./components/Store/StoreBook";
import ResourceBook from "./components/Store/ResourceBook";
import RefuseShirt from "./components/Store/RefuseShirt";
import TheSeeker from "./components/TheSeeker/TheSeeker";
import Event from "./components/Event/Event";
import ThankYouPage from "./components/ThankYou/ThankYouPage";
import Masterclass from "./components/Masterclass/Masterclass";
import EventDone from "./components/Event/EventDone";
import SeekerTransformation from "./components/SeekerTransformation/SeekerTransformation";
import NewThankYouPage from "./components/NewThankYouPage/NewThankYouPage";
import InvestorQuiz from "./components/Quiz/InvestorQuiz";
import Bundle from "./components/Bundle/Bundle";
import WealthClarity from "./components/WealthClarity/WealthClarity";
import ThankYouPageVIP from "./components/WealthClarity/ThankYouPageVIP";
import ThankYouPageGeneral from "./components/WealthClarity/ThankYouPageGeneral";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const hiddenRoutes = ["/events", "/masterclass", "/seekertransformation", "/black-friday", "/wealth-clarity", "/thank-you-vip", "/thank-you-general"];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function FooterOnlyLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* <Route
        path="/events"
        element={
          <FooterOnlyLayout>
            <Event />
          </FooterOnlyLayout>
        }
      />   */}
      <Route
        path="/events"
        element={
          <LayoutWrapper>
            <EventDone />
          </LayoutWrapper>
        }
      />
      {/* <Route
      
        path="/thank-you"
        element={
          <FooterOnlyLayout>
            <ThankYouPage />
          </FooterOnlyLayout>
        }
      />{" "} */}

       <Route
        path="/thank-you"
        element={
          <FooterOnlyLayout>
            <NewThankYouPage />
          </FooterOnlyLayout>
        }
      />{" "}


      <Route
        path="/"
        element={
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        }
      />
      <Route
        path="/about"
        element={
          <LayoutWrapper>
            <About />
          </LayoutWrapper>
        }
      />
      <Route
        path="/community"
        element={
          <LayoutWrapper>
            <Community />
          </LayoutWrapper>
        }
      />
      <Route
        path="/work-with-gustav"
        element={
          <LayoutWrapper>
            <WorkWithGustav />
          </LayoutWrapper>
        }
      />
      <Route
        path="/learn-more"
        element={
          <LayoutWrapper>
            <WorkWithGustavPageTwo />
          </LayoutWrapper>
        }
      />
      <Route
        path="/podcast"
        element={
          <LayoutWrapper>
            <Podcast />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store"
        element={
          <LayoutWrapper>
            <Store />
          </LayoutWrapper>
        }
      />
      <Route
        path="/seekertransformation"
        element={
          <LayoutWrapper>
            <SeekerTransformation />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/1"
        element={
          <LayoutWrapper>
            <Cap />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/2"
        element={
          <LayoutWrapper>
            <Mug />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/3"
        element={
          <LayoutWrapper>
            <Shirt />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/4"
        element={
          <LayoutWrapper>
            <StoreBook />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/5"
        element={
          <LayoutWrapper>
            <ResourceBook />
          </LayoutWrapper>
        }
      />
      <Route
        path="/store/6"
        element={
          <LayoutWrapper>
            <RefuseShirt />
          </LayoutWrapper>
        }
      />
      <Route
        path="/contact"
        element={
          <LayoutWrapper>
            <Contact />
          </LayoutWrapper>
        }
      />
      <Route
        path="/resource"
        element={
          <LayoutWrapper>
            <Resources />
          </LayoutWrapper>
        }
      />
      <Route
        path="/the-seeker"
        element={
          <LayoutWrapper>
            <TheSeeker />
          </LayoutWrapper>
        }
      />
        <Route
        path="/black-friday"
        element={
          <LayoutWrapper>
            <Bundle />
          </LayoutWrapper>
        }
      />
        <Route
        path="/wealth-clarity"
        element={
          <LayoutWrapper>
            <WealthClarity />
          </LayoutWrapper>
        }
      />

      <Route
        path="/linktree"
        element={
          <LayoutWrapper>
            <LinkTree />
          </LayoutWrapper>
        }
      />
      <Route
        path="/masterclass"
        element={
          <LayoutWrapper>
            <Masterclass />
          </LayoutWrapper>
        }
      />

         <Route
        path="/quiz-investortype"
        element={
          <LayoutWrapper>
            <InvestorQuiz />
          </LayoutWrapper>
        }
      />

         <Route
        path="/thank-you-vip"
        element={
          <LayoutWrapper>
            <ThankYouPageVIP />
          </LayoutWrapper>
        }
      />

         <Route
        path="/thank-you-general"
        element={
          <LayoutWrapper>
            <ThankYouPageGeneral />
          </LayoutWrapper>
        }
      />




      {/* <Route
        path="/thank-you"
        element={
          <LayoutWrapper>
            <GustavThanks />
          </LayoutWrapper>
        }
      /> */}
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
