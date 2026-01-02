import React, { useEffect } from "react";
import { Gift, FileText, ListChecks, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { FaTicketAlt } from 'react-icons/fa'; // Importing the ticket icon


const getItems = [
  {
    icon: <Gift className="text-[#BD9A35] w-6 h-6" />,
    text: "Access to replay for 72 hours",
  },
  {
    icon: <FileText className="text-[#BD9A35] w-6 h-6" />,
    text: "Digital workbook to help you take action",
  },
  {
    icon: <ListChecks className="text-[#BD9A35] w-6 h-6" />,
    text: "Step by step money mastery",
  },
  {
    icon: <Users className="text-[#BD9A35] w-6 h-6" />,
    text: "Opportunity for live Q&A with me",
  },
];

const EventGet = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[#181349] py-16 px-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white" data-aos="fade-down">
          What You Get
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl text-left" data-aos="zoom-in-up">
          {getItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-sm sm:text-lg text-white" data-aos="fade-up" data-aos-delay={index * 100}>
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <div
          className="max-w-3xl bg-[#FFF7E6] border-l-4 border-[#BD9A35] p-6 rounded-md text-[#BD9A35] text-sm sm:text-lg font-medium italic shadow-sm"
          data-aos="fade-left"
        >
          Invitation to join the <strong>#YouREnough#</strong> Community of thousands of like-minded individuals living and building wealth on their own terms.
        </div>

        <div className="space-y-4" data-aos="zoom-in">
          <p className="text-white text-sm lg:text-2xl font-semibold">
            Don&apos;t let another paycheck pass without a plan.
          </p>
          {/* <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition"
  onClick={() => window.open("https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n", "_blank")}
>
  <FaTicketAlt className="inline-block mr-2" />
  Save My Spot  (Only $97)
</button> */}

 <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition"
  onClick={() =>
    window.open(
      "https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n",
      "_blank"
    )
  }
>
  <span className="mr-2 line-through text-white">$497</span>
  — Yours Now for Just $97
</button>

        </div>
      </div>
    </section>
  );
};

export default EventGet;
