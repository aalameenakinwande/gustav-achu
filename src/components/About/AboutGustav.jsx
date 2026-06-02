import React from "react";
import GustavImage from "../../images/gustavImages/Gustav.jpeg";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const GustavProfile = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={GustavImage}
            alt="Gustav B. Achu"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          {/* Quote */}
          {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
            “Helping people take control of their finances and the future they leave behind.”
          </h2> */}

          {/* Name & Title */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Gustav B. Achu
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Wealth & Legacy Coach | Author | Investor
            </p>
           
          </div>

          {/* Bio */}
          <div className="text-gray-700 space-y-4 text-sm md:text-base">
             <p className="text-black mt-1 text-sm md:text-lg font-bold">
              From Bamenda to the world
            </p>
            <p>
 Gustav Achu’s journey is rooted in resilience, discipline, and intentional growth. Migrating to the United States in the early 2000s, Gustav’s experience as a first-generation immigrant shaped his understanding of responsibility, toward family, finances, and the future.            </p>
            <p>
Today, Gustav works with mid- to high-income professionals, entrepreneurs, and family builders to help them invest intentionally, build structured wealth, and design a legacy that lasts. His approach combines practical financial education, disciplined investing principles, and long-term thinking—without hype, shortcuts, or speculation.            </p>
            <p>
With a professional background spanning healthcare, technology, and finance, including roles in Fortune 500 environments—Gustav brings real-world clarity to complex financial decisions. He is the author of The Seeker and the creator of programs/offers such as Paycheck to Prosperity Webinar, Investing 101, and Guarantee Your Legacy, all designed to help individuals move from income to ownership and from effort to impact.            </p>
            <p>
Gustav’s work is guided by stewardship, responsibility, and long-term impact. He believes wealth is not just about accumulation, but about responsibility—how it’s built, protected, and transferred. Through coaching, content, live experiences, and conversations with respected voices in finance, purpose, and legacy, Gustav equips people to make decisions today that honor tomorrow.            </p>


 <p>
Engaging with Gustav means gaining clarity, structure, and confidence, so your money works with intention, and your life is remembered with meaning.    </p>
          </div>

            {/* CTA Section */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Connect with Gustav</h4>
              <p className="text-gray-600 mb-4 md:mb-0 text-sm md:text-lg">
                Have questions or want to work with Gustav? Submit your inquiry or book a session — response within 2 business days.
              </p>
            </div>
            <a
              href="https://calendly.com/gustavachu77/stage-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-semibold py-3 px-10 text-sm md:text-lg whitespace-nowrap rounded-xl shadow-md hover:bg-gray-900 transition transform hover:scale-105"
            >
              Book Your Session
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 mt-6">
            <p className="text-gray-500 font-medium text-sm md:text-lg">Follow Gustav:</p>
            <a href="https://www.linkedin.com/in/gustav-achu-618780103/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110">
              <FaLinkedin size={28} />
            </a>
            <a href="https://www.facebook.com/gustav.achu.1/?_rdc=2&_rdr#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/gachu77" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.youtube.com/@YouREnoughTV" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition transform hover:scale-110">
              <FaYoutube size={28} />
            </a>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default GustavProfile;
