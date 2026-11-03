import React from "react";
import { Navigate } from "react-router-dom";
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
import EarlyBird from "./components/EarlyBird/EarlyBird";
import VipPaymentCheckout from "./components/WealthClarity/VipPaymentCheckout";
import GeneralPaymentCheckout from "./components/WealthClarity/GeneralPaymentCheckout";
import WealthArchitectPlaybook from "./components/Store/WealthArchitectPlaybook";
import SecureAccess from "./components/Bridges/SecureAccess";
import FinancialClarity from "./components/Bridges/FinancialClarity";
import WebinarWaitlist from "./components/Bridges/WebinarWaitlist";
import FakeChallenge from "./components/Bridges/FakeChallenge";
import OptIn from "./components/Bridges/OptIn";
import Watch from "./components/Bridges/Watch";
import PaycheckToPosperity from "./components/Bridges/PaycheckToPosperity";
import PaycheckToPosperityWatch from "./components/Bridges/PaycheckToPosperityWatch";
import Precheckout from "./components/WealthClarity/Precheckout";
import WealthMasterclass from "./components/WealthMasterclass/WealthMasterclass";
import RefundPolicy from "./components/RefundPolicy";
import TermsofUse from "./components/TermsofUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useEffect } from "react";
import WealthClarityIndex from "./components/Quiz/WealthClarityIndex";
import WealthClarityQuiz from "./components/Quiz/WealthClarityQuiz";
import WealthConsultation from "./components/WealthClarity/WealthConsultation";
import TripOffer from "./components/WealthClarity/TripOffer";
import WatchTripOffer from "./components/WealthClarity/WatchTripOffer";
import GustavShop from "./components/Shop/GustavShop";
import Programs from "./components/Programs/Programs";
import ProductDetails from "./components/Shop/ProductDetails";
import ProgramForm from "./components/Programs/ProgramForm";



function LayoutWrapper({ children }) {
  const location = useLocation();
  const hiddenRoutes = [
    "/events",
    "/masterclass",
    "/seekertransformation",
    "/black-friday",
    "/wealth-clarity",
    "/thank-you-vip",
    "/thank-you-general",
    "/early-bird",
    "/vip-payment-checkout",
    "/general-payment-checkout",
    "/financial-clarity",
    "/secure-access",
    "/webinar-waitlist",
    "/webinar-waitlist-modal",
    "/challenge",
    "/opt-in",
    "/watch",
    "/paycheck-to-prosperity-opt-in",
    "/paycheck-to-prosperity-watch",
    "/pre-checkout",
    "/wealth-masterclass",
     "/wealth-consultation",
     "/paycheck-escape-system",
       "/paycheck-escape-system-watch",
       "/paycheck-to-prosperity-accelerator"
  ];
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


function WealthClarityRedirect() {
  useEffect(() => {
    window.location.replace("https://my.gustavachu.com/wealth-clarity");
  }, []);

  return null;
}


function PaystackRedirect() {
  useEffect(() => {
    window.location.replace(" https://my.gustavachu.com/paychecktrap-webinar");
  }, []);

  return null;
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
        path="/store/7"
        element={
          <LayoutWrapper>
            <WealthArchitectPlaybook />
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
       

{/* <Route
  path="/wealth-clarity"
  element={<WealthClarityRedirect />}
/> */}


       {/* <Route
  path="/wealth-clarity"
  element={
    <LayoutWrapper>
      {window.location.href = "https://my.gustavachu.com/wealth-clarity"}
    </LayoutWrapper>
  }
/> */}


<Route
        path="/wealth-consultation"
        element={
          <LayoutWrapper>
            <WealthConsultation />
          </LayoutWrapper>
        }
      />


      <Route
        path="/paycheck-escape-system"
        element={
          <LayoutWrapper>
            <TripOffer />
          </LayoutWrapper>
        }
      />


    <Route
        path="/paycheck-escape-system-watch"
        element={
          <LayoutWrapper>
            <WatchTripOffer />
          </LayoutWrapper>
        }
      />




      <Route
        path="/financial-clarity"
        element={
          <LayoutWrapper>
            <FinancialClarity />
          </LayoutWrapper>
        }
      />
      <Route
        path="/secure-access"
        element={
          <LayoutWrapper>
            <SecureAccess />
          </LayoutWrapper>
        }
      />
      <Route
        path="/webinar-waitlist"
        element={
          <LayoutWrapper>
            <WebinarWaitlist />
          </LayoutWrapper>
        }
      />
      <Route
        path="/challenge"
        element={
          <LayoutWrapper>
            <FakeChallenge />
          </LayoutWrapper>
        }
      />
      <Route
        path="/opt-in"
        element={
          <LayoutWrapper>
            <OptIn />
          </LayoutWrapper>
        }
      />
      <Route
        path="/watch"
        element={
          <LayoutWrapper>
            <Watch />
          </LayoutWrapper>
        }
      />
      <Route
        path="/pre-checkout"
        element={
          <LayoutWrapper>
            <Precheckout />
          </LayoutWrapper>
        }
      />


      
{/* <Route
  path="/wealth-masterclass"
  element={<PaystackRedirect />}
/> */}


      <Route
        path="/paycheck-to-prosperity-opt-in"
        element={
          <LayoutWrapper>
            <PaycheckToPosperity />
          </LayoutWrapper>
        }
      /> 


{/* 

      <Route
  path="/paycheck-to-prosperity-opt-in"
  element={
    (() => {
      window.location.href =
        "https://my.gustavachu.com/paychecktrap-webinar";
      return null;
    })()
  }
/>  */}

 
      <Route
        path="/paycheck-to-prosperity-watch"
        element={
          <LayoutWrapper>
            <PaycheckToPosperityWatch />
          </LayoutWrapper>
        }
      />
      {/* <Route
        path="/early-bird"
        element={<Navigate to="/wealth-clarity" replace />}
      /> */}

      
       <Route
        path="/early-bird"
        element={
          <LayoutWrapper>
            <EarlyBird />
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
        path="/wealth-clarity-index"
        element={
          <LayoutWrapper>
            <WealthClarityIndex />
          </LayoutWrapper>
        }
      />



    <Route
        path="/wealth-clarity-quiz"
        element={
          <LayoutWrapper>
            <WealthClarityQuiz />
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
        path="/vip-payment-checkout"
        element={
          <LayoutWrapper>
            <VipPaymentCheckout />
          </LayoutWrapper>
        }
      />
      <Route
        path="/general-payment-checkout"
        element={
          <LayoutWrapper>
            <GeneralPaymentCheckout />
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
      <Route
        path="/wealth-masterclass"
        element={
          <LayoutWrapper>
            <WealthMasterclass />
          </LayoutWrapper>
        }
      />


        {/* <Route
        path="/wealth-masterclass"
        element={
          <LayoutWrapper>
            <WealthMasterclass />
          </LayoutWrapper>
        }
      /> */}

      
        <Route
        path="/programs"
        element={
          <LayoutWrapper>
            <Programs />
          </LayoutWrapper>
        }
      />


  <Route
        path="/paycheck-to-prosperity-accelerator"
        element={
          <LayoutWrapper>
            <ProgramForm />
          </LayoutWrapper>
        }
      />

      


        <Route
        path="/refund-policy"
        element={
          <LayoutWrapper>
            <RefundPolicy />
          </LayoutWrapper>
        }
      />
      


        <Route
        path="/terms-and-conditions"
        element={
          <LayoutWrapper>
            <TermsofUse />
          </LayoutWrapper>
        }
      />
      



        <Route
        path="/privacy-policy"
        element={
          <LayoutWrapper>
            <PrivacyPolicy />
          </LayoutWrapper>
        }
      />


      
        <Route
        path="/shop"
        element={
          <LayoutWrapper>
            <GustavShop />
          </LayoutWrapper>
        }
      />
      
      <Route path="/shop/:slug" element={<ProductDetails />} />


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
