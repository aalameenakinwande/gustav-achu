import React, { useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

const Community = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = {
      api_key: API_KEY,
      email,
      first_name: name,
      fields: {
        phone_number: phone,
      },
    };

    try {
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );

      if (response.data.subscription) {
        setMessage("Successfully subscribed! Please check your email.");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section className="bg-[#0E0E0E] text-white  md:px-16 lg:px-24 py-28 lg:py-44">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto px-2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "Butler, serif" }}>
            Build Wealth With Clarity. Invest With Confidence. Leave a Lasting Legacy.
          </h1>

          <p className=" md:text-xl text-gray-300 mb-8">
            Join thousands of professionals receiving practical weekly insights on investing, personal growth, and legacy building—designed to help you create lasting wealth without confusion, guesswork, or costly financial mistakes.
          </p>

          <p className="text-sm uppercase tracking-widest text-[#BD9A35] mb-6">
            Trusted by Professionals Across the U.S., Canada & Africa
          </p>

          <p className="text-gray-400 mb-12">
            Clear strategies. Practical execution. Real wealth-building principles that help you grow financially, professionally, and personally.
          </p>
        </div>

        {/* FORM + VALUE */}
        <div className="grid lg:grid-cols-2 gap-16 items-start px-6">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Get Your Weekly Wealth Insights
            </h2>

            <p className="mb-6 text-gray-300">
              Receive actionable lessons every week on:
            </p>

            <ul className="space-y-3 text-gray-300 mb-10">
              <li>✔ Smart investing and stock market wealth-building strategies</li>
              <li>✔ Financial clarity and long-term wealth preservation</li>
              <li>✔ Legacy planning for family and future generations</li>
              <li>✔ Real-world case studies and practical money frameworks</li>
              <li>✔ Private insights and exclusive updates from Gustav</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">
              Enter Your Details Below
            </h3>

            {message && (
              <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-3 z-50">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm block mb-1">First Name*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 bg-white text-black"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Email Address*</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-white text-black"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Phone number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-white text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#BD9A35] hover:bg-[#a8872f] py-4 font-semibold transition"
              >
                I Want Weekly Wealth Insights
              </button>
            </form>

            {/* WHATSAPP */}
            <div className="mt-10 text-center">
              <p className="mb-4">
                <FaWhatsapp className="inline mr-2 text-green-500 text-xl" />
                Join Private WhatsApp Community
              </p>

              <p className="text-gray-400 mb-4">
                Connect with professionals, investors, and entrepreneurs focused on building wealth, making better financial decisions, and creating generational impact.
              </p>

              <a
                href="https://chat.whatsapp.com/E1THU5dlbW05lCqVnYQHd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 font-semibold"
              >
                Join the Legacy Circle Community
              </a>
            </div>
          </div>

          {/* RIGHT STORY */}
          <div className="space-y-10 text-gray-300">
            <div>
                <h3 className="text-xl font-bold text-white mb-4">
Join the Legacy Circle Community
              </h3>
              <p className="mb-4">Most people work for money.</p>
              <p className="mb-4">Few learn how to make money work for them.</p>
              <p className="mb-4">
                True wealth is not just about income—it is about clarity, strategy, ownership, and building something that outlives you.
              </p>
              <p className="mb-4">
                This weekly letter helps you move from financial uncertainty to intentional wealth creation.
              </p>
              <p className="mb-4">
                Because your success should not stop with you.
              </p>
              <p>It should become your legacy.</p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">
                A Message From Gustav B. Achu
              </h3>

              <p className="mb-4">
                For years, I have worked with professionals, entrepreneurs, and families who wanted more than financial survival—they wanted clarity.
              </p>
              <p className="mb-4">Clarity on how to invest wisely.</p>
              <p className="mb-4">Clarity on how to structure wealth intentionally.</p>
              <p className="mb-4">
                Clarity on how to create a legacy that impacts generations.
              </p>
              <p className="mb-4">
                This platform was built to provide practical guidance that helps you think differently about money, wealth, and purpose.
              </p>
              <p className="mb-4">Not hype.</p>
              <p className="mb-4">Not noise.</p>
              <p className="mb-4">Just real strategies for real results.</p>
              <p>
                If that is what you are looking for, you are in the right place.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6 text-sm text-gray-400">

                <h3 className="text-xl font-bold text-white mb-4">
Next Weekly Edition Goes Out Tuesday 8AM CS              </h3>


  <h3 className="text-xl font-bold text-white mb-4">
                Your future wealth is built by the decisions you make today.
          </h3>



            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;